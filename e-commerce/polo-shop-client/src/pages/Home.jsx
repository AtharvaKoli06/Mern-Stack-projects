import React from "react";

import Banner from "../components/Banner";
import Discount from "../components/Discount";
import Sponsor from "../components/Sponsor";
import SeasonSale from "../components/SeasonSale";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import FitAdventure from "../components/FitAdventure";

const Home = () => {
  return (
    <>
      <Banner />
      <Discount />
      <Sponsor />
      <SeasonSale />
      <BestSeller />
      <Category />
      <FitAdventure />
    </>
  );
};

export default Home;
