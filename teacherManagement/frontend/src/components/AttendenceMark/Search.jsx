import React, { useState, useRef, useCallback } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "../../redux/slices/CreateStudent.slice";
import { IoIosArrowDown } from "react-icons/io";

const Search = ({ handleToggle, setSearchData, searchData }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState({
    medium: "",
    year: "",
    courseName: "",
  });
  // const attendanceOptions = {
  //   present: "Present",
  //   absent: "Absent",
  //   late: "Late",
  // };
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
  const enrollInput = useRef();

  const data = useSelector((state) => state.allStudent);
  const filterData = data.data.data.data;

  let enrollNumber;
  const handleEnroll = useCallback(
    (e) => {
      e.preventDefault();
      enrollNumber = enrollInput.current.value;
      if (enrollNumber >= 100) {
        const filter = filterData.filter(
          (field) => field.enrollNo === enrollNumber
        );
        setSearchData(filter);
        console.log(searchData);
        handleToggle();
      }
    },
    [enrollNumber]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(createStudent(formData));
    } catch (error) {
      console.log(error.message);
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

  const handleSelectedSearch = useCallback(
    (value) => {
      if (value) {
        const filtered = filterData.filter(
          (option) =>
            option.medium === value.medium &&
            option.year === value.year &&
            option.courseName === value.courseName
        );
        setSearchData(filtered);
        handleToggle();
      }
    },
    [filterData]
  );
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value.toUpperCase(),
    });
  };
  const handleOptionsSubmit = (e) => {
    e.preventDefault();
    handleSelectedSearch(selected);
    setSelected({
      medium: "",
      year: "",
      courseName: "",
    });
  };

  return (
    <>
      <div className="w-10/12 mx-auto mt-14 flex justify-between border-b-4 gap-2">
        <div className="flex items-center justify-center">
          <AiOutlineCheck size={40} />
          <span className="sm:text-lg text-xs font-thin">MARK ATTENDENCE</span>
          <div className="flex ml-4">
            <input
              type="number"
              placeholder="Enroll No.>= 100"
              ref={enrollInput}
              min={1}
              className="border text-xs rounded h-10 sm:w-52 w-32"
            />
            <CiSearch
              size={35}
              onClick={handleEnroll}
              className="bg-green-500 text-black h-10 p-1"
            />
          </div>
        </div>
        <div className="border bg-green-400 p-2 rounded-md">
          {searchData.length ? searchData.length : 0}
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
            Update Your credentials
          </button>
          <div className="absolute top-8 right-0 sm:right-5 shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[250px] sm:w-[550px] text-sm">
            <form
              className="w-full border grid sm:grid-cols-2 lg:grid-cols-3 gap-2 "
              onSubmit={handleSubmit}
            >
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
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                placeholder="Lecture eg:Lecture-1"
                name="lecture"
                value={formData.lecture}
                onChange={handleChange}
                type="text"
                required
              />
              <input
                className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
                type="date"
                name="date"
                value={formData.date}
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
      <div className="w-full">
        <form
          className="w-10/12 mx-auto grid sm:grid-cols-2 lg:grid-cols-4 place-content-center gap-5 p-2 text-lg"
          onSubmit={handleOptionsSubmit}
        >
          <div className="relative my-6 md:w-60">
            <select
              id="medium"
              name="medium"
              value={selected.medium}
              onChange={handleSelectChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                degree
              </option>
              <option value="degree">DEGREE</option>
            </select>
            <label
              htmlFor="medium"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Select an option
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-6 md:w-60">
            <select
              name="year"
              id="year"
              value={selected.year}
              onChange={handleSelectChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                year
              </option>
              <option value="first year">FIRST YEAR</option>
              <option value="second year">SECOND YEAR</option>
              <option value="third year">THIRD YEAR</option>
            </select>
            <label
              htmlFor="year"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Select an option
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-6 md:w-60">
            <select
              id="courseName"
              name="courseName"
              value={selected.courseName}
              onChange={handleSelectChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                CourseName
              </option>
              <option value="fybms">FYBMS</option>
              <option value="sybms">SYBMS</option>
              <option value="tybms">TYBMS</option>
              <option value="fyb.sc">FYB.Sc</option>
              <option value="syb.sc">SYB.Sc</option>
              <option value="tyb.sc">TYB.Sc</option>
              <option value="sybmm">FYBMM</option>
              <option value="sybmm">SYBMM</option>
              <option value="tybmm">TYBMM</option>
              <option value="fybfm">FYBFM</option>
              <option value="sybfm">SYBFM</option>
              <option value="tybfm">TYBFM</option>
              <option value="fyb.com">FYB.COM</option>
              <option value="syb.com">SYB.COM</option>
              <option value="tyb.com">TYB.COM</option>
              <option value="fybbi">FYBBI</option>
              <option value="sybbi">SYBBI</option>
              <option value="tybbi">TYBBI</option>
              <option value="fybaf">FYBAF</option>
              <option value="sybaf">SYBAF</option>
              <option value="tybaf">TYBAF</option>
              <option value="fybca">FYBCA</option>
              <option value="sybca">SYBCA</option>
              <option value="tybca">TYBCA</option>
            </select>
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Select an option
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-6 md:w-60">
            <button
              type="submit"
              className="bg-green-400 rounded-md text-md p-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
