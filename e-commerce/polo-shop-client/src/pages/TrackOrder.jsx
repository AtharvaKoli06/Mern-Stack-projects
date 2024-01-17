import React from "react";

const TrackOrder = () => {
  return (
    <div className="w-full border p-1">
      <div className="w-4/5 mx-auto mb-24">
        <div className="mb-10 mt-20 text-3xl border-b-4 pb-8">
          <h2>TRACK ORDER</h2>
        </div>
        <div className="w-4/5 p-2">
          <h2 className="mb-5">Enter your Order Number or phone Number</h2>
          <input
            type="text"
            name="price"
            id="price"
            className="block sm:w-80 w-56  rounded-md border-0 py-1.5 pl-7 mb-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Find Here..."
          />
          <a
            className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base mx-auto"
            href="#"
          >
            SUBMIT
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
