import React from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routers = () => {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
};

export default Routers;
