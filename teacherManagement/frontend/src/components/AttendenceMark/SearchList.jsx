import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAttendence } from "../../redux/slices/CreateAttendenceList.slice";

const SearchList = ({ attendStudent, searchData }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };
  console.log(attendStudent);
  console.log(filtered);

  const [Attend, setAttend] = useState({
    lecture: "",
    date: "",
    presentOrAbsent: "",
  });

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
  };
  const handleAttendenceChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (searchData) {
      setAttend({
        ...Attend,
        [name]: value,
        presentOrAbsent: isChecked.toString(),
      });
    }
  };
  console.log(Attend);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
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
                          <th className="pb-3 text-start min-w-[50px] ">
                            Student's Name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchData.map((data) => (
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
                              <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                {data.studentsName}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-start">
                              <div className="relative flex flex-wrap items-center">
                                <input
                                  className="relative w-8 h-4 transition-colors rounded-lg appearance-none cursor-pointer ring-2 ring-inset ring-slate-300 hover:ring-slate-400 after:hover:ring-slate-600 checked:hover:bg-emerald-300 checked:hover:ring-emerald-600 checked:after:hover:ring-emerald-600 checked:focus:bg-emerald-400 checked:focus:ring-emerald-700 checked:after:focus:ring-emerald-700 focus-visible:outline-none peer after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-white after:ring-2 after:ring-inset after:ring-slate-500 after:transition-all checked:bg-emerald-200 checked:ring-emerald-500 checked:after:left-4 checked:after:bg-white checked:after:ring-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:border-slate-200 disabled:after:ring-slate-300"
                                  type="checkbox"
                                  name="presentOrAbsent"
                                  value={isChecked}
                                  onChange={handleIsChecked}
                                />
                                <label
                                  className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                                  htmlFor="id-c01"
                                >
                                  {isChecked && "P"}
                                  {!isChecked && "A"}
                                </label>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <form
                    onSubmit={handleAttendenceSubmit}
                    className="w-full mx-auto flex gap-10 items-center justify-center text-md sm:text-lg"
                  >
                    <select
                      name="lecture"
                      value={Attend.lecture}
                      onChange={handleAttendenceChange}
                    >
                      <option value=";ecture-1">LECTURE-1</option>
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
                    />
                    <button
                      type="submit"
                      className="group relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg "
                    >
                      SUBMIT ATTENDENCE
                      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchList;
