import React from "react";

import jean from "../assets/jean-photo.avif";

const FitAdventure = () => {
  return (
    <>
      <div className="w-full border relative">
        <div className="h-96">
          <img src={jean} className="w-full max-h-96" alt="" />
        </div>
        <div className="absolute top-24 right-32 sm:left-60 sm:bottom-32 text-center">
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl text-lg text-white mb-8 text-nowrap">
            FIT FOR EVERY ADVENTURE
          </h2>
          <a
            className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
            href="#"
          >
            Explore
          </a>
        </div>
      </div>
      <div className="w-full text-center mt-12 mb-16">
        <h3 className="text-xl">STYLER INDIA</h3>
        <p className="w-3/4 mx-auto">
          Everyone knows that Wrangler’s denim heritage goes deep, right back to
          the working cowboy. So, making jeans that are durable and comfortable
          enough for the wild frontier is a given for us.
        </p>
      </div>
    </>
  );
};

export default FitAdventure;
