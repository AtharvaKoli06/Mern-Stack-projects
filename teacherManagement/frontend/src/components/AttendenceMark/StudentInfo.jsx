import React, { useEffect } from "react";
import AttendenceList from "../AttendenceMark/AttendenceList";
import { useSelector, useDispatch } from "react-redux";
import { getAllStudents } from "../../redux/slices/getAllStudents.slice";

import Loader from "../Loader";
import Error from "../Error";

const StudentInfo = () => {
  const dispatch = useDispatch();
  const studentInfo = useSelector((state) => state.allStudent);
  const { loading, error, data } = studentInfo;
  const studentDetails = data?.data?.data;

  useEffect(() => {
    try {
      dispatch(getAllStudents());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
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
                        Roll No.
                      </th>
                      <th className="pb-3 text-end min-w-[30px]">Enroll No.</th>
                      <th className="pb-3 text-end min-w-[130px] ">
                        Student's Name
                      </th>
                      <th className="pb-3 pr-12 text-end min-w-[135px]">
                        Medium
                      </th>
                      <th className="pb-3 pr-12 text-end min-w-[80px]">Year</th>
                      <th className="pb-3 text-center min-w-[50px]">Course</th>
                      <th className="pb-3 text-center min-w-[100px]">
                        CourseName
                      </th>
                      <th className="pb-3 pl-2 pr-10 text-center min-w-[50px]">
                        Section
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {!loading && error ? (
                      <>
                        <Error error={error} />
                      </>
                    ) : null}
                    {loading && !studentDetails && <Loader size={50} />}
                    {studentDetails && (
                      <>
                        {studentDetails.map((fromData) => (
                          <AttendenceList
                            key={fromData._id}
                            formData={fromData}
                          />
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
