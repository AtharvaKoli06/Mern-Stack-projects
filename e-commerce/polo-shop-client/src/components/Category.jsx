import React from "react";

import heritage from "../assets/home_page_heritage.jpg";
import outdoor from "../assets/home_page_outdoor.jpg";
import Traveler from "../assets/home_page_traveler.jpg";

const Category = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 p-2 gap-2">
        <div className="relative bg-blue-100 border border-blue-900 border-dotted rounded-md hover:opacity-50 cursor-pointer">
          <img src={heritage} alt="" className="w-full" />
        </div>
        <div className="relative bg-blue-100 border border-blue-900 border-dotted rounded-md hover:opacity-50 cursor-pointer">
          <img src={outdoor} alt="" className="w-full" />
        </div>
        <div className="relative bg-blue-100 border border-blue-900 border-dotted rounded-md hover:opacity-50 cursor-pointer">
          <img src={Traveler} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};
export default Category;
