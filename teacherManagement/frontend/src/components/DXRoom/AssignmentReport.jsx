import React, { useState } from "react";

const AssignmentReport = () => {
  const [date, setDate] = useState({
    fromDate: "",
    toDate: "",
    courseName: "",
  });
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...date,
      [name]: value,
    });
  };
  const handleDateSubmit = (e) => {
    e.preventDefault();
  };
  console.log(date);
  return (
    <>
      <div className="w-full px-20">
        <div className="mx-auto w-full mt-5">
          <form
            onSubmit={handleDateSubmit}
            className="sm:w-full w-5/6 mx-auto grid sm:grid-cols-3 lg:grid-cols-4 place-content-center gap-15 p-2 text-lg"
          >
            <div className="relative my-6 w-72 sm:w-60 flex items-center justify-between">
              <h1>From</h1>
              <input
                type="date"
                name="fromDate"
                value={date.fromDate}
                onChange={handleDateChange}
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 sm:w-60  flex items-center justify-between">
              To
              <input
                type="date"
                name="toDate"
                value={date.toDate}
                onChange={handleDateChange}
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 sm:w-60">
              <input
                type="text"
                name="courseName"
                value={date.courseName}
                onChange={handleDateChange}
                placeholder="courseName..."
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 text-center sm:w-60">
              <button
                type="submit"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                Filter
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 pr-1 text-start min-w-[30px]">
                            Sr No.
                          </th>
                          <th className="pb-3 text-end min-w-[30px]">
                            Teacher Name
                          </th>
                          <th className="pb-3 text-end min-w-[130px] ">
                            course
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[135px]">
                            CourseName
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[80px]">
                            Message
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {studentDetails ? (
                          <>
                            {studentDetails.map((fromData) => (
                              <AttendenceList
                                key={fromData._id}
                                formData={fromData}
                              />
                            ))}
                          </>
                        ) : (
                          <NoDataFound size={70} />
                        )} */}

                        <h1>NO MESSAGE TO SHOW !!</h1>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
          >
            X Close Chat BOX
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignmentReport;
