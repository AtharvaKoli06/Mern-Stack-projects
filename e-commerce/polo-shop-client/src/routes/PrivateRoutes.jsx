import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "../pages/LoginUser";
import SignUp from "../pages/SignUp";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const userData = useSelector((state) => state.userLogin);
  console.log(userData);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default PrivateRoutes;
