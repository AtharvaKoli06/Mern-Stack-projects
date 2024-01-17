import React from "react";

import video from "../assets/pexels-pavel-danilyuk-8627667 (1080p).mp4";

import adds from "../assets/adds.png";

const Sponsor = () => {
  return (
    <>
      <div className="mt-8 mb-8">
        <a href="https://www.wrangler.in/sale">
          <img
            className=""
            style={{ width: "100%" }}
            src="https://static.aceomni.cmsaceturtle.com/stag/product-image/aceomni/FinalBannerImages/home_page/Desktop_1.jpeg"
            alt="Offer Section"
          />
        </a>
      </div>
      <section className=" bg-slate-400">
        <div className="grid sm:grid-cols-2 place-content-center">
          <div className="w-5/4">
            <video autoPlay muted loop className="w-full h-full">
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="w-5/4 p-3 flex flex-col items-center justify-center text-center">
            <span className="w-60 text-4xl font-bold">
              Styler X <br /> Atharva koli
            </span>
            <p className="text-sm font-thin mt-4 mb-4">
              This collection of durable pieces is stitched to stay with you
              through all your milestones and pit stops. They're designed to
              shape your ride of life.
            </p>
            <a
              className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
              href="#"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </section>
      <div className="w-full border h-72 mt-4 mb-6 relative bg-gradient-to-tr from-blue-500 to-gray-100">
        <img src={adds} alt="ADDS" className="w-full h-full object-center" />
        <div className="absolute right-0 top-0 text-yellow-400">
          <h2 className="text-3xl font-extrabold font-mono mx-auto float-right mt-4 mr-4">
            Styler
          </h2>
          <h2 className="text-xl font-extrabold font-mono mt-14 mr-10">
            Can never fit into average sizes.
          </h2>
          <h2 className="text-2xl p-1 font-extrabold font-mono leading-tight">
            GET AN EXTRA
          </h2>
          <span className="float-right">
            <h2 className="text-3xl bg-red-500 w-40 p-1 rounded-md font-extrabold font-mono ">
              15% OFF*
            </h2>
          </span>
          <h2 className="text-xl font-extrabold font-mono mt-16">
            ON LUCKY SIZES
          </h2>
          <h2 className="text-3xl font-extrabold float-right rounded-md bg-red-500 w-72 p-1 font-mono mx-auto">
            CODE: `styler06`
          </h2>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
