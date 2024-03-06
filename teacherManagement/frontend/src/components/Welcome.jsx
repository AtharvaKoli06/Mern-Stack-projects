import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const message = location.state?.message;
  return <>{message}</>;
};

export default Welcome;
