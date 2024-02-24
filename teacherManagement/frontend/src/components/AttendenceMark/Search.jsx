import React, { useContext, useState } from "react";

import { MdOutlineIntegrationInstructions } from "react-icons/md";
import StudentSearch from "../StudentSearch";
import StudentEnrollNoSearch from "../StudentEnrollNoSearch";
import { useLocation } from "react-router-dom";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../Loader";

const Search = () => {
  const [formData, setFormData] = useState({
    rollNo: "",
    enrollNo: "",
    studentsName: "",
    medium: "",
    year: "",
    course: "",
    courseName: "",
    section: "",
    lecture: "",
    date: "",
  });

  const location = useLocation();
  const searchData = location.state?.studentData;

  const {
    studentList,
    studentLoading,
    studentError,
    studentListing,
    createStudent,
  } = useContext(FeatureContext);

  let message = studentList?.message;
  let success = studentList?.success;

  const [errors, setErrors] = useState("");
  const [apiErrors, setApiErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(formData);
    } catch (error) {
      setApiErrors(error);
    }
    if (errors) {
      setErrors(
        <h1 className="text-xs text-red-600">
          Something went Wrong {studentError}
        </h1>
      );
    }
    setFormData({
      rollNo: "",
      enrollNo: "",
      studentsName: "",
      medium: "",
      year: "",
      course: "",
      courseName: "",
      section: "",
      lecture: "",
      date: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.toUpperCase(),
    }));
  };

  if (studentLoading) {
    return <Loader size={70} />;
  }
  const student = studentListing.data;

  return (
    <>
      <div className="w-10/12 mx-auto mt-14 flex justify-between border-b-4 gap-2 relative ">
        <StudentEnrollNoSearch students={student} />
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
                  Please click on Update Data.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer relative group w-52 ">
          <button className="group relative h-10 w-94 overflow-hidden rounded-xl text-sm font-bold  sm:text-lg underline ">
            Students Entry here
          </button>
          <div className="absolute top-8 right-0 sm:right-5 shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[250px] sm:w-[550px] text-sm">
            <form
              className="w-full border grid sm:grid-cols-2 lg:grid-cols-3 gap-2 "
              onSubmit={handleSubmit}
            >
              {errors && <p className="text-xl text-red-500">{errors}</p>}
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Roll no."
                type="number"
                name="rollNo"
                min={1}
                value={formData.rollNo}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Enroll no."
                type="number"
                name="enrollNo"
                min={1}
                value={formData.enrollNo}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Student Name"
                type="text"
                name="studentsName"
                value={formData.studentsName}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Medium eg.'degree'"
                type="text"
                name="medium"
                value={formData.medium}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Year eg:'First Year'"
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Course"
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="CourseName eg:'FYBCA'"
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Section eg.'A'"
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="group relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg "
              >
                SUBMIT
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <StudentSearch students={student} />
      <div className="w-72 p-2 right-0 top-52 absolute">
        {apiErrors && (
          <p className={`text-xl text-red-500 ${success ? "hidden" : "flex"}`}>
            Error:- {apiErrors}
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
