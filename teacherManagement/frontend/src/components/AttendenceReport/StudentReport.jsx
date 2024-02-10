import Loader from "../Loader";
import Error from "../Error";

import ReportList from "../AttendenceReport/ReportList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAttendenceList } from "../../redux/slices/getAllAttendence.slice";

const StudentReport = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.attendenceList);
  const attendenceList = data?.data?.data;

  useEffect(() => {
    dispatch(getAllAttendenceList());
  }, [dispatch]);

  return (
    <>
      <div className="w-full flex justify-around gap-5 items-center mt-2">
        <div className="text-center w-3/4 sm:w-2/4">
          <h1 className="text-xs sm:text-sm">
            Degree-BACHELOR OF COMPUTER APPLICATION-TYBCA-THIRD YEAR-A - (97)
          </h1>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-400 rounded-md text-xs sm:text-sm p-2"
          >
            Export
          </button>
        </div>
      </div>
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
                          Lecture
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          DATE
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[365px]">
                          Present Student's List
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[365px]">
                          Absent Student's List
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loading && error ? (
                        <>
                          <Error error={error} />
                        </>
                      ) : null}
                      {loading && !attendenceList && <Loader size={50} />}
                      {attendenceList && (
                        <>
                          {attendenceList.map((data) => (
                            <ReportList key={data._id} attendencedata={data} />
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
    </>
  );
};

export default StudentReport;
