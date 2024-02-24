import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const message = location.state?.message;
  console.log(message);
  return <div>Hello Welcome to Teacher Management System {message}</div>;
};

export default Welcome;
