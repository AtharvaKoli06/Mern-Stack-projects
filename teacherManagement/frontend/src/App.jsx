import React from "react";
import Layout from "./pages/Layout";
import { RouterProvider } from "react-router-dom";

import router from "./router/Routers.jsx";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
