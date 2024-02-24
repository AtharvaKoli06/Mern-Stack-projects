import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Guide from "../pages/Guide";
import AttendenceMark from "../pages/AttendenceMark";
import LiveClassReport from "../pages/LiveClassReport";
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
import Register from "../pages/Register";
import Login from "../pages/Login";
import RequireAuth from "../auth/RequireAuth";
import Features from "../components/Features";
import Logout from "../pages/Logout";
import StudentInfo from "../components/AttendenceMark/StudentInfo";
import SearchList from "../components/AttendenceMark/SearchList";
import StudentReport from "../components/AttendenceReport/StudentReport";

const Routers = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="register" element={<Register />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="guide" element={<Guide />} />
      <Route path="mark-attendence" element={<AttendenceMark />}>
        <Route index element={<StudentInfo />} />
        <Route path="details" element={<SearchList />} />
        <Route path="studentEnrollNo/:enrollNo" element={<SearchList />} />
      </Route>
      <Route path="live-class-attendence-report" element={<LiveClassReport />}>
        <Route index element={<StudentReport />} />
        <Route path="details/:enrollNo" element={<Lists />} />
        <Route path="details" element={<StudentReport />} />
        <Route path="lists" element={<Lists />} />
      </Route>
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
      <Route element={<RequireAuth />}>
        <Route path="/:username/features" element={<Features />} />
      </Route>
    </Route>
  </Routes>
);

export default Routers;
