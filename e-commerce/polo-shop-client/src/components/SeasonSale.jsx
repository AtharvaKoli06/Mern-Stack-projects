import React from "react";

import men from "../assets/men.png";
import shirt from "../assets/shirt.png";
import polo from "../assets/polo.png";
import jeans from "../assets/jean.png";
import women from "../assets/women.png";

import shirt_2 from "../assets/shirt-2.png";
import shirt_0 from "../assets/shirt_0.png";
const SeasonSale = () => {
  return (
    <div className="w-full border mb-10">
      <div className="grid lg:grid-cols-2 gap-2 p-2">
        <div className="relative bg-gradient-to-tr from-amber-500 to-fuchsia-700 cursor-pointer">
          <img src={men} alt="" />
          <span className="absolute top-40 left-32 font-thin rotate-90 lg:text-5xl text-6xl md:text-6xl">
            MEN
          </span>
        </div>
        <div className="relative bg-gradient-to-tr from-amber-500 to-fuchsia-700  cursor-pointer">
          <img src={women} alt="" />
          <span className="absolute top-40 left-20 font-thin rotate-90 lg:text-5xl text-6xl md:text-6xl">
            WOMEN
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 p-2 gap-2">
        <div className="relative bg-gradient-to-tr from-orange-500 to-green-100 rounded-md cursor-pointer">
          <h2 className="absolute top-16 left-20 font-bold text-3xl leading-3 text-white">
            T-SHIRT
          </h2>
          <img src={shirt} alt="" />
          <h2 className="absolute bottom-5 left-5 font-bold text-2xl text-white">
            Starting @499
          </h2>
        </div>
        <div className="relative bg-gradient-to-tr from-orange-500 to-green-100 rounded-md cursor-pointer">
          <h2 className="absolute top-16 left-20 font-bold text-3xl leading-3 text-white">
            SHIRT
          </h2>
          <img src={shirt_2} alt="" />
          <h2 className="absolute bottom-5 left-5 font-bold text-2xl text-white">
            Starting 50% OFF
          </h2>
        </div>
        <div className="relative bg-gradient-to-tr from-orange-500 to-green-100 rounded-md cursor-pointer">
          <h2 className="absolute top-16 left-20 font-bold text-3xl leading-3 text-white">
            JEANS
          </h2>
          <img src={shirt_0} alt="" />
          <h2 className="absolute bottom-5 left-5 font-bold text-2xl text-white">
            Starting 50% OFF
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-2 p-2">
        <div className="relative bg-blue-50 border border-blue-900 border-dotted rounded-md bg-gradient-to-tr from-blue-100 to-violet-700 cursor-pointer">
          <img src={shirt_2} alt="" />
          <span className="absolute top-40 left-20 font-thin rotate-90 lg:text-5xl text-6xl md:text-6xl">
            SHIRT
          </span>
        </div>
        <div className="relative bg-blue-50 border border-blue-900 border-dotted rounded-md bg-gradient-to-tr from-blue-200 to-violet-700 cursor-pointer">
          <img src={polo} alt="" />
          <span className="absolute top-40 left-20 font-thin rotate-90 lg:text-5xl text-6xl md:text-6xl">
            POLO
          </span>
        </div>
      </div>
      <div className="relative bg-blue-100 border border-blue-900 border-dotted rounded-md bg-gradient-to-tr from-orange-500 to-green-700">
        <img src={jeans} alt="" />
      </div>
    </div>
  );
};

export default SeasonSale;
