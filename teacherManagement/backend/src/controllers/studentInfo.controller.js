import { StudentAttendenceData } from "../models/attendRecord.model.js";
import { StudentData } from "../models/studentData.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const studentInfo = asyncHandler(async (req, res) => {
  const {
    rollNo,
    enrollNo,
    studentsName,
    medium,
    year,
    course,
    courseName,
    section,
  } = req.body;
  if (
    [
      rollNo,
      enrollNo,
      studentsName,
      medium,
      year,
      course,
      courseName,
      section,
    ].some((property) => property?.trim() === "")
  ) {
    throw new ApiError(400, "All properties are required");
  }
  const existingStudent = await StudentData.findOne({
    $or: [{ enrollNo }, { studentsName }],
  });
  if (existingStudent) {
    throw new ApiError(
      409,
      "Student with rollNo enrollNo, studentsName already exists..?"
    );
  }

  const student = await StudentData.create({
    rollNo,
    enrollNo,
    studentsName,
    medium,
    year,
    course,
    courseName,
    section,
  });
  const createStudent = await StudentData.findById(student._id);

  if (!createStudent) {
    throw new ApiError(
      500,
      "Something went wrong when creating Student or not found"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, createStudent, "Created Student status success..!")
    );
});
export const attendenceRecord = asyncHandler(async (req, res) => {
  const { lecture, date, year, courseName, presentData, absentData } = req.body;

  if (
    [lecture, date, year, courseName].some(
      (property) => property?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All properties are required");
  }

  const createAttendRecord = await StudentAttendenceData.create({
    lecture,
    date,
    year,
    courseName,
    presentData,
    absentData,
  });
  const createRecord = await StudentAttendenceData.findById(
    createAttendRecord._id
  );

  if (!createRecord) {
    throw new ApiError(
      500,
      "Something went wrong when creating AttendRecord or not found"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, createRecord, "Created Student status success..!")
    );
});
export const allStudentInfo = asyncHandler(async (req, res) => {
  const students = await StudentData.find();
  if (!students) {
    throw new ApiError(500, "Something went wrong when getting the Product");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, students, "Students Fetched success..!"));
});
export const allAttendenceRecord = asyncHandler(async (req, res) => {
  const attendence = await StudentAttendenceData.find();
  if (!attendence) {
    throw new ApiError(500, "Something went wrong when getting the Product");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, attendence, "Students Fetched success..!"));
});
