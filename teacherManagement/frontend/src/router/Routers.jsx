import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Guide from "../pages/Guide";
import AttendenceMark from "../pages/AttendenceMark";
import LiveClassReport from "../pages/LiveClassReport";
import DeleteAttendence from "../pages/DeleteAttendence";
import ShowAttendence from "../pages/ShowAttendence";
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
import Reports from "../pages/Reports";
import TimeTable from "../pages/TimeTable";
import Lists from "../components/AttendenceReport/Lists";
import DailyReport from "../pages/DailyReport";
import StudentReport from "../components/AttendenceReport/StudentReport";

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="guide" element={<Guide />} />
      <Route path="mark-attendence" element={<AttendenceMark />} />
      <Route path="live-class-attendence-report" element={<LiveClassReport />}>
        <Route index element={<StudentReport />} />
        <Route path="lists/:data" element={<Lists />} />
      </Route>
      <Route path="delete-attendence" element={<DeleteAttendence />} />
      <Route path="show-attendence" element={<ShowAttendence />} />
      <Route path="update-roll" element={<UpdateRollNo />} />
      <Route path="update-seatno" element={<UpdateSeatNo />} />
      <Route path="update-prn" element={<UpdatePrn />} />
      <Route path="send-mail" element={<DXRoom />} />
      <Route path="add-marks" element={<AddMarks />} />
      <Route path="create-exam" element={<CreateExam />} />
      <Route path="online-exams" element={<OnlineResult />} />
      <Route path="leavenote" element={<LeaveNote />} />
      <Route path="complaintbox" element={<Remark />} />
      <Route path="student-password" element={<StudentPassword />} />
      <Route path="daily-report" element={<DailyReport />} />
      <Route path="activity" element={<Reports />} />
      <Route path="timetable" element={<TimeTable />} />
    </Route>
  )
);
export default routers;
