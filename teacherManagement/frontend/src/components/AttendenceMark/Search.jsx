import React, { useContext } from "react";

import { MdOutlineIntegrationInstructions } from "react-icons/md";
import StudentSearch from "../StudentSearch";
import StudentEnrollNoSearch from "../StudentEnrollNoSearch";
import { useLocation } from "react-router-dom";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../Loader";

const Search = () => {
  const location = useLocation();
  const searchData = location.state?.studentData;

  const {
    studentList,
    studentListingError,
    studentLoading,
    studentError,
    studentListing,
  } = useContext(FeatureContext);

  let message = studentList?.message;

  if (studentLoading) {
    return <Loader size={70} />;
  }
  const student = studentListing.data;

  return (
    <>
      <div className="w-10/12 mx-auto mt-14 flex justify-around border-b-4 gap-2 relative ">
        {!studentListingError.message ? (
          <StudentEnrollNoSearch students={student} />
        ) : (
          <p
            className={`${
              studentListingError.message ? "block" : "hidden"
            } bg-red-100 border w-1/4 border-red-400 text-red-700 px-4 py-3 rounded relative`}
          >
            {studentListingError.message}
          </p>
        )}
        <div className="border bg-green-400 p-2 rounded-md">
          {searchData?.length ? searchData.length : 0}
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div className="cursor-pointer relative group w-52 ">
          <div className="flex">
            <MdOutlineIntegrationInstructions size={30} />
            <span className="text-lg">INSTRUCTIONS</span>
            <div className="absolute top-8 left-10 shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] sm:w-[500px] text-sm">
              <div className="text-center mb-5">
                <h2>Welcome to Mark-Attendence Page!!</h2>
              </div>
              <div>
                <h2>On this page, you can perform following actions:</h2>
                <li>Mark Daily Attendance (P-Present , A-Absent )</li>
                <li>Mark Attendance for Back Dates.</li>
                <h1>
                  <span className="font-bold">Note:{"  "}</span>In case of
                  missing student data, extra student, or spelling correction,
                  Please click on Update Data in features.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!studentListingError ? (
        <StudentSearch students={student} />
      ) : (
        <p
          className={`${
            studentListingError.message ? "block" : "hidden"
          } bg-red-100 border w-1/4 border-red-400 text-red-700 px-4 py-3 rounded relative`}
        >
          {studentListingError.message}
        </p>
      )}
      <div className="w-72 p-2 right-0 top-52 absolute">
        <p
          className={`${
            studentError.message ? "block" : "hidden"
          } bg-red-100 border w-1/4 border-red-400 text-red-700 px-4 py-3 rounded relative`}
        >
          {studentError.message}
        </p>
        <p
          className={`${
            message ? "block" : "hidden"
          } bg-red-100 border w-1/4 border-red-400 text-green-700 px-4 py-3 rounded relative`}
        >
          {message}
        </p>
      </div>
    </>
  );
};

export default Search;
