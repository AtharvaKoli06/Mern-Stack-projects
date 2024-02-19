import React, { useState } from "react";

import Search from "../components/AttendenceMark/Search";

import StudentInfo from "../components/AttendenceMark/StudentInfo";

import { Outlet } from "react-router-dom";

const AttendenceMark = () => {
  return (
    <>
      <div className="w-full border space-y-5 ">
        <Search />
        <div className="mx-auto font-thin text-sm sm:text-xl flex items-center justify-center">
          <span>LIST OF STUDENTS</span>
        </div>
        <div className="border-t-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AttendenceMark;
