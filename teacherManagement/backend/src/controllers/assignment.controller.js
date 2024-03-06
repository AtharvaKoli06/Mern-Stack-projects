import { Assignment } from "../models/assignment.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/uploadImages.js";

export const uploadAssignment = asyncHandler(async (req, res) => {
  const { courseName, subject, year, description, studentsName, surName } =
    req.body;

  if (
    [courseName, subject, year, studentsName, surName].some(
      (sub) => sub?.trim() === ""
    )
  ) {
    throw new ApiError(400, "Fields cannot be empty");
  }
  const existingStudent = await Assignment.findOne({
    $or: [{ studentsName }, { surName }],
  });

  if (existingStudent) {
    throw new ApiError(409, "Students exist with studentsName and surname ");
  }

  const assignmentFile = req.files?.assignment[0]?.path;
  if (!assignmentFile) {
    throw new ApiError(404, "files is required");
  }

  const assignment = await uploadOnCloudinary(assignmentFile);

  const createAssignment = await Assignment.create({
    courseName,
    subject,
    studentsName,
    year,
    surName,
    description,
    assignment: assignment?.url,
  });
  if (!createAssignment) {
    throw new ApiError(500, "Something went wrong when creating Assignment");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createAssignment,
        "Created Assignment status success..!"
      )
    );
});

export const allStudentAssignment = asyncHandler(async (req, res) => {
  const studentAssignment = await Assignment.find();
  if (!studentAssignment) {
    throw new ApiError(
      500,
      "Something went wrong when getting the studentAssignment"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        studentAssignment,
        "studentAssignment Fetched success..!"
      )
    );
});
