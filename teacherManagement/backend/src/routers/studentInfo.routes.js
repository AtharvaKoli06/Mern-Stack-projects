import { Router } from "express";
import {
  studentInfo,
  allStudentInfo,
  attendenceRecord,
  allAttendenceRecord,
} from "../controllers/studentInfo.controller.js";

const router = Router();

router.route("/info").post(studentInfo);
router.route("/allStudents").get(allStudentInfo);
router.route("/attendenceRecord").post(attendenceRecord);
router.route("/allattendenceRecord").get(allAttendenceRecord);

export default router;
