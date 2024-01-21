import React from "react";

import { CiFilter } from "react-icons/ci";
import { LuListEnd } from "react-icons/lu";

import NormalCard from "./NormalCard";
import Filter from "./Filter";
import NoMatching from "./NoMatching";
import Loader from "./Loader";

const Products = ({ loading, data, error, length }) => {
  return (
    <>
      <div className=" w-full flex">
        <Filter />
        <div className="w-5/6">
          <div className="w-10/12 mx-auto border-b-2 flex items-center justify-between p-2">
            <div className="flex flex-col justify-between gap-14">
              <h2 className="text-4xl font-thin mt-10">NEW ARRIVALS</h2>
              <h2 className="flex gap-2 items-center cursor-pointer">
                FILTER
                <CiFilter size={20} />
              </h2>
            </div>
            <div className="flex justify-between w-52 items-center">
              <h1>
                <LuListEnd size={30} />
              </h1>
              <div className="flex flex-col gap-5">
                <h2>290 items</h2>
                <h2>SORT</h2>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5 w-full mb-5 relative">
            {!loading && error ? (
              <div>
                <div className="flex items-center justify-center p-5 w-full bg-white absolute">
                  <div classNAme="text-center">
                    <div className="inline-flex rounded-full bg-red-100 p-4 border">
                      <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                        <svg class="w-16 h-16" viewBox="0 0 28 28" fill="none">
                          <path
                            d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M17 16L22 21M22 16L17 21"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[40px]">
                      {error}
                    </h1>
                  </div>
                </div>
              </div>
            ) : null}
            {loading && !length ? <Loader /> : null}
            {data && (
              <>
                {data.map((item) => (
                  <NormalCard item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
