import React from "react";
import Navbar from "../components/Navbar";
import Routers from "../router/Routers";

const Layout = () => {
  return (
    <div className="text-3xl text-blue-400">
      <Navbar />
      <Routers />
    </div>
  );
};

export default Layout;
