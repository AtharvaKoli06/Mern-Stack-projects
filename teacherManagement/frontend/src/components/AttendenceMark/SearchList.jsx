import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createAttendence } from "../../redux/slices/CreateAttendenceList.slice";
import { useLocation } from "react-router-dom";

const SearchList = () => {
  const dispatch = useDispatch();
  const [includes, setIncludes] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const location = useLocation();
  const searchData = location.state?.studentData;

  const initialValue = Array.from(
    { length: searchData?.length },
    () => isChecked
  );
  const [presentOrAbsent, setPresentOrAbsent] = useState(initialValue);
  const [presentData, setPresentData] = useState([]);
  const [absentData, setAbsentData] = useState([]);

  const [Attend, setAttend] = useState({
    lecture: "",
    date: "",
  });

  const handleIsChecked = (index) => {
    const newPresentStudent = [...presentOrAbsent];
    newPresentStudent[index] = !newPresentStudent[index];
    setPresentOrAbsent(newPresentStudent);
    const presentValue = newPresentStudent[index];
    const absentValue = !newPresentStudent[index];

    const { presentData, absentData } = searchData.reduce(
      (acc, value, index) => {
        const { course, medium, courseName, year } = value;
        if (newPresentStudent[index]) {
          acc.presentData.push({
            ...value,
            course,
            medium,
            courseName,
            year,
            present: presentValue,
            weekDay: new Date().getDay(),
          });
        } else {
          acc.absentData.push({
            ...value,
            absent: absentValue,
            weekDay: new Date().getDay(),
          });
        }
        return acc;
      },
      { presentData: [], absentData: [] }
    );
    setPresentData(presentData);
    setAbsentData(absentData);
    setIncludes(true);
  };

  const handleAttendenceChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const yearCourseName = [];
    attendStudent.forEach(({ year, courseName }) => {
      yearCourseName.push({ year, courseName });
    });
    setAttend({
      ...Attend,
      [name]: value,
      year: yearCourseName[0].year,
      courseName: yearCourseName[1].courseName,
      presentData,
      absentData,
    });
  };

  const handleAttendenceSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(createAttendence(Attend));
    } catch (error) {
      console.log(error.message);
    }
    setAttend({
      lecture: "",
      date: "",
    });
    setPresentOrAbsent(initialValue);
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 shadow-lg">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 text-start min-w-[30px]">
                            Roll No.
                          </th>
                          <th className="pb-3 text-start min-w-[30px]">
                            Enroll No.
                          </th>
                          <th className="pb-3 text-start">Student's Name</th>
                          <th className="pb-3 text-start min-w-[30px]">Year</th>
                          <th className="pb-3 text-start min-w-[30px]">
                            courseName
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchData && searchData?.length > 0 ? (
                          searchData.map((data, index) => (
                            <tr
                              key={data._id}
                              className="border-b font-thin text-sm border-dashed last:border-b-0"
                            >
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  {data.rollNo}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.enrollNo}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.studentsName}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.year}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.courseName}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <div className="relative flex flex-wrap items-center">
                                  <input
                                    className={`relative w-8 h-4 transition-colors rounded-lg appearance-none cursor-pointer ring-2 ring-inset ring-slate-300 hover:ring-slate-400 after:hover:ring-slate-600
                                    'checked:hover:bg-emerald-300 checked:hover:ring-emerald-600 checked:after:hover:ring-emerald-600 checked:focus:bg-emerald-400 checked:focus:ring-emerald-700 checked:after:focus:ring-emerald-700 checked:bg-emerald-200 checked:ring-emerald-500 checked:after:left-4 checked:after:bg-white checked:after:ring-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:border-slate-200 disabled:after:ring-slate-300 focus-visible:outline-none peer after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-white after:ring-2 after:ring-inset after:ring-slate-500 after:transition-all `}
                                    type="checkbox"
                                    name="presentOrAbsent"
                                    value={isChecked}
                                    onChange={() => handleIsChecked(index)}
                                  />
                                  <label
                                    className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                                    htmlFor="id-c01"
                                  >
                                    {presentOrAbsent[index] ? "P" : "A"}
                                  </label>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="border-b font-thin text-sm border-dashed last:border-b-0 flex items-center justify-center">
                            <td className="p-3 pr-0 text-start "></td>
                            <td className="p-3 pr-0 text-start ">
                              <div className="text-2xl text-red-500">
                                ENROLL NO. NOT FOUND
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                {includes && (
                  <form
                    onSubmit={handleAttendenceSubmit}
                    onKeyDown={handleAttendenceSubmit}
                    className="w-full mx-auto flex gap-10 items-center justify-center text-md sm:text-lg p-2"
                  >
                    <select
                      name="lecture"
                      value={Attend.lecture}
                      onChange={handleAttendenceChange}
                      className="text-sm"
                    >
                      <option value="" disabled>
                        Lecture
                      </option>
                      <option value="Lecture-1">LECTURE-1</option>
                      <option value="lecture-2">LECTURE-2</option>
                      <option value="lecture-3">LECTURE-3</option>
                      <option value="lecture-4">LECTURE-4</option>
                      <option value="lecture-5">LECTURE-5</option>
                      <option value="lecture-6">LECTURE-6</option>
                    </select>
                    <input
                      type="date"
                      name="date"
                      value={Attend.date}
                      onChange={handleAttendenceChange}
                      className="w-full sm:w-52 text-sm"
                    />
                    <button
                      type="submit"
                      className="group relative sm:h-10 h-10 sm:w-48 w-72 border p-2 overflow-hidden rounded-xl bg-green-500 font-bold text-white sm:text-lg text-xs"
                    >
                      SUBMIT ATTENDENCE
                      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchList;
