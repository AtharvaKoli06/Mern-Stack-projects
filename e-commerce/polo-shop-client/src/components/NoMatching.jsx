import React from "react";

import { GiEmptyWoodBucketHandle } from "react-icons/gi";

const NoMatching = () => {
  return (
    <div className="w-full border">
      <div>
        <GiEmptyWoodBucketHandle size={40} />
      </div>
      <div>
        <h2>We are sorry. No matching products found!</h2>
      </div>
      <div>
        <a
          className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
          href="#"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default NoMatching;
