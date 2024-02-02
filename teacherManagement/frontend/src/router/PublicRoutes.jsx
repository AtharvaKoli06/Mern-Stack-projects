import React from "react";

import { Routes, Route } from "react-router-dom";
import AttendenceMark from "../pages/AttendenceMark";
import LiveClassReport from "../pages/LiveClassReport";
import ShowAttendence from "../pages/ShowAttendence";
import DeleteAttendence from "../pages/DeleteAttendence";
import UpdateRollNo from "../pages/UpdateRollNo.";
import UpdateSeatNo from "../pages/UpdateSeatNo";
import UpdatePrn from "../pages/UpdatePrn";
import DXRoom from "../pages/DXRoom";
import AddMarks from "../pages/AddMarks";
import CreateExam from "../pages/CreateExam";
import OnlineResult from "../pages/OnlineResult";
import LeaveNote from "../pages/LeaveNote";
import Remark from "../pages/Remark";
import StudentPassword from "../pages/StudentPassword";
import DailyReport from "../pages/DailyReport";
import Reports from "../pages/Reports";
import TimeTable from "../pages/TimeTable";
import Home from "../pages/Home";
AttendenceMark;

import About from "../pages/About";
import Guide from "../pages/Guide";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/teacher/mark-attendence" element={<AttendenceMark />} />
      <Route
        path="/teacher/live-class-attendence-report"
        element={<LiveClassReport />}
      />
      <Route path="/teacher/delete-attendence" element={<DeleteAttendence />} />
      <Route path="/teacher/show-attendence" element={<ShowAttendence />} />
      <Route path="/teacher/update-roll" element={<UpdateRollNo />} />
      <Route path="/teacher/update-seatno" element={<UpdateSeatNo />} />
      <Route path="/teacher/update-prn" element={<UpdatePrn />} />
      <Route path="/teacher/send-mail" element={<DXRoom />} />
      <Route path="/teacher/add-marks" element={<AddMarks />} />
      <Route path="/teacher/create-exam" element={<CreateExam />} />
      <Route path="/teacher/online-exams" element={<OnlineResult />} />
      <Route path="/teacher/leavenote" element={<LeaveNote />} />
      <Route path="/teacher/complaintbox" element={<Remark />} />
      <Route path="/teacher/student-password" element={<StudentPassword />} />
      <Route path="/teacher/daily-report" element={<DailyReport />} />
      <Route path="/teacher/activity" element={<Reports />} />
      <Route path="/teacher/timetable" element={<TimeTable />} />
    </Routes>
  );
};

export default PublicRoutes;
