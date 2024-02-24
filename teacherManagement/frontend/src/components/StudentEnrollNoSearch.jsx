import React, { useRef, useState, useCallback } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const StudentEnrollNoSearch = ({ students }) => {
  const navigate = useNavigate();
  const enrollInput = useRef();
  let enrollNumber;
  const [hasError, setHasError] = useState("");

  const handleEnroll = useCallback(
    (e) => {
      e.preventDefault();
      enrollNumber = enrollInput.current.value;
      if (students) {
        if (enrollNumber >= 100) {
          const filter = students.filter(
            (field) => field.enrollNo === enrollNumber
          );
          navigate(`studentEnrollNo/${enrollNumber}`, {
            state: { studentData: filter },
          });
          enrollInput.current.value = "";
          setHasError("");
        } else {
          setHasError("Enroll number should be greater then or equal to 100");
        }
      }
    },
    [enrollNumber]
  );
  return (
    <>
      <div className="flex items-start sm:gap-20 w-full">
        <div className="flex items-center">
          <AiOutlineCheck size={30} />
          <span className="sm:text-lg text-xs font-thin">MARK ATTENDENCE</span>
        </div>
        <div className="flex ml-2">
          <input
            type="number"
            placeholder="Enroll No.>= 100"
            ref={enrollInput}
            min={1}
            className="border text-xs rounded h-10 sm:w-72 w-32"
          />
          <CiSearch
            size={35}
            onClick={handleEnroll}
            className="bg-green-500 text-black h-10 p-1"
          />

          <p
            className={`${
              hasError ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
          >
            {hasError}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentEnrollNoSearch;
