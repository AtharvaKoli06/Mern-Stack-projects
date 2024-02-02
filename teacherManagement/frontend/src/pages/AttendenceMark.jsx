import React, { useState } from "react";

import Search from "../components/AttendenceMark/Search";

import StudentInfo from "../components/AttendenceMark/StudentInfo";

import SearchList from "../components/AttendenceMark/SearchList";

const AttendenceMark = () => {
  const [toggleList, setToggleList] = useState(true);
  const handleToggle = () => {
    setToggleList(!toggleList);
  };
  const [searchData, setSearchData] = useState([]);
  return (
    <>
      <div className="w-full border space-y-5 ">
        <Search
          handleToggle={handleToggle}
          setSearchData={setSearchData}
          searchData={searchData}
        />
        <div className="mx-auto font-thin text-sm sm:text-xl flex items-center justify-center">
          <span>LIST OF ABSENT STUDENTS</span>
        </div>
        <div className="border-t-4">
          {toggleList ? (
            <StudentInfo />
          ) : (
            <SearchList searchData={searchData} />
          )}
        </div>
      </div>
    </>
  );
};

export default AttendenceMark;
