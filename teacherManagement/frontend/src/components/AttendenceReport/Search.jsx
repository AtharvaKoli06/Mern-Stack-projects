import React, { useContext } from "react";

import StudentSearch from "../StudentSearch";
import { FeatureContext } from "../../context/FeaturesSystem";
import Error from "../Error";
import Loader from "../Loader";

const Search = () => {
  const { attendList, attendListError, attendListLoading } =
    useContext(FeatureContext);

  if (attendListError) {
    return <Error error={attendListError} />;
  }
  if (attendListLoading) {
    return <Loader size={50} />;
  }
  const students = attendList?.data;

  return (
    <>
      <StudentSearch students={students} />
    </>
  );
};

export default Search;
