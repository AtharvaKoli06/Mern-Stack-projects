import { Router } from "express";
import {
  studentInfo,
  allStudentInfo,
  attendenceRecord,
  allAttendenceRecord,
  updateStudentInfo,
  deleteStudentInfo,
} from "../controllers/studentInfo.controller.js";
import { verifyJWT } from "../middleware/autho.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import {
  uploadAssignment,
  allStudentAssignment,
} from "../controllers/assignment.controller.js";

const router = Router();

router.route("/info").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  studentInfo
);
router.route("/allStudents").get(verifyJWT, allStudentInfo);
router.route("/attendenceRecord").post(verifyJWT, attendenceRecord);
router.route("/allattendenceRecord").get(verifyJWT, allAttendenceRecord);
router.route("/updateStudent").put(verifyJWT, updateStudentInfo);
router.route("/deleteStudent").delete(verifyJWT, deleteStudentInfo);

//Students Assignment
router.route("/uploadAssignment").post(
  verifyJWT,
  upload.fields([
    {
      name: "assignment",
      maxCount: 1,
    },
  ]),
  uploadAssignment
);
router.route("/uploadAssignment").get(verifyJWT, allStudentAssignment);

export default router;
