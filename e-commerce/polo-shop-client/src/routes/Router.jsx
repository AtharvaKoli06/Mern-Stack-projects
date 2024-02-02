import React from "react";

import PublicRoutes from "./PublicRoutes.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
const Router = () => {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
};

export default Router;
