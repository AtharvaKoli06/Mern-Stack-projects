import React from "react";

import App from "../App";
import Home from "../pages/Home";
import NewIn from "../pages/NewIn";
import Women from "../pages/Women";
import Collections from "../pages/Collections";
import Sales from "../pages/Sales";
import Blog from "../pages/Blog";
import Men from "../pages/Men";
import FitGuide from "../pages/FitGuide";
import TrackOrder from "../pages/TrackOrder";
import CardDetails from "../pages/CardDetails";
import { Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newIn" element={<NewIn />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/fitGuide" element={<FitGuide />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/orderInformation" element={<TrackOrder />} />
      <Route path="/cardDetails/:id" element={<CardDetails />} />
    </Routes>
  );
};

export default PublicRoutes;
