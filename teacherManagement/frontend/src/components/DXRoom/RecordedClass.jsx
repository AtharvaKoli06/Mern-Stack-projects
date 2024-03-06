import React from "react";
import { FaCheck } from "react-icons/fa";
import SelectedSearch from "./SelectedSearch";

const RecordedClass = () => {
  return (
    <>
      <div className="w-full p-10">
        <div className="border-b-2 pb-1 ">
          <div className="flex mt-5 gap-2">
            <div className="flex items-center gap-2 justify-center">
              <FaCheck size={20} />
              <h1>RECORDED CLASS</h1>
            </div>
          </div>
        </div>
        <SelectedSearch />
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
                          <th className="pb-3 text-end min-w-[30px]">Class</th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Date
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordedClass;
