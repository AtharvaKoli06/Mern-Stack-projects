import React from "react";
import { useParams } from "react-router-dom";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";

const Lists = () => {
  const { data } = useParams();
  const studentsCurrentAttendence = JSON.parse(decodeURIComponent(data));
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-5 w-full">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          ROLL NO.
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          ENROLL NO.
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          STUDENTS NAME
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          P??A
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          WEEK DAY
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentsCurrentAttendence.map((student) => (
                        <PresentList key={student._id} student={student} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
