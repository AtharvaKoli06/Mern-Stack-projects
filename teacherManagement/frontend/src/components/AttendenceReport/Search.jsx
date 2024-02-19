import React from "react";

import { useSelector } from "react-redux";
import StudentSearch from "../StudentSearch";

const Search = () => {
  const allReport = useSelector((state) => state.attendenceList);
  const { data } = allReport;
  const students = data?.data?.data;

  return (
    <>
      <StudentSearch students={students} />
    </>
  );
};

export default Search;
