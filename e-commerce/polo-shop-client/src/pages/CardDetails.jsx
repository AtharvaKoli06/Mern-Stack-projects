import React from "react";
import { useEffect } from "react";
import { IoBagAdd } from "react-icons/io5";
import { useSelector } from "react-redux";
import { GiReturnArrow } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";
import { LuBadgePercent } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Loader from "../components/Loader";

const DetailCard = () => {
  const productData = useSelector((state) => state.cardDetailsWithId);
  const { loading, error, data } = productData;

  const singleProduct = data.data;

  // console.log(singleProduct);

  return (
    <div className="w-full border border-dotted border-blue-700 p-2">
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
      {loading ? <Loader /> : null}
      {singleProduct && (
        <div className="w-full flex gap-3 items-start justify-center p-2">
          <div className="grid lg:grid-cols-2 gap-2 w-3/5">
            {singleProduct.img.map((item) => (
              <div key={item._id} className="m-auto w-full p-2 cursor-pointer">
                <img src={item.img} alt="hello" className="rounded" />
              </div>
            ))}
          </div>
          <div className="w-2/5 p-2 space-y-2">
            <div className="w-full p-2">
              <h2 className="text-2xl font-semibold">{singleProduct.title}</h2>
              <h2 className="text-xl font-semibold">{singleProduct.typeOf}</h2>
            </div>
            <div className="w-full flex gap-4 px-2">
              <span className="text-xl font-bold">{singleProduct.cost}</span>
              <span className="text-gray-300">MRP</span>
              <span className="line-through text-gray-300">
                {singleProduct.mrpPrice}
              </span>
              <span className="text-green-300">{singleProduct.discount}</span>
            </div>
            <h2 className="text-xs px-2">(inclusive of all taxes)</h2>
            <div>
              <div className="flex items-center">
                <h1 className="text-red-800 font-bold px-2">
                  {singleProduct.cashBack}
                </h1>
                <CiCircleInfo size={18} className="cursor-pointer" />
              </div>
              <div className="border w-full rounded-lg m-2">
                <div className="flex items-center gap-1 bg-gray-300 rounded-lg p-2">
                  <LuBadgePercent size={20} />
                  <span>{singleProduct.bestPrice}</span>
                </div>
                <ul className="p-2 flex items-center flex-col">
                  <li className="flex item-center gap-4">
                    <GoDotFill size={15} />
                    {singleProduct.discountCode}
                  </li>
                  <li className="flex item-center gap-4">
                    <GoDotFill size={15} />
                    {singleProduct.additionalDiscount}
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-2">
              <h2 className="text-xl font-semibold mb-2">
                Color:{" "}
                <span className="font-thin text-md">{singleProduct.color}</span>
              </h2>
              <img
                src={singleProduct.img[1].img}
                alt="preView"
                className="w-16 cursor-pointer hover:border hover:border-black"
              />
            </div>
            <div className="px-2 flex items-center justify-between w-full">
              <h1 className="font-bold text-xl">
                Size:{"  "}
                <span className="font-thin text-md">
                  {singleProduct.size[7]}
                </span>
              </h1>
              <a href="#" className="hover:underline border p-1 bg-slate-200">
                Size Guide
              </a>
            </div>
            <div className="flex w-full gap-4 ">
              <button
                className="inline-block px-5 py-3 rounded-lg transform transition hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm shadow-lg sm:text-base focus:bg-slate-200 "
                href="#"
              >
                S
              </button>
              <button
                className="inline-block px-5 py-3 rounded-lg transform transition hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm  shadow-lg sm:text-bas focus:bg-slate-200 "
                href="#"
              >
                M
              </button>
              <button
                className="inline-block px-5 py-3 rounded-lg transform transition hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm shadow-lg sm:text-base focus:bg-slate-200 "
                href="#"
              >
                L
              </button>
              <button
                className="inline-block px-5 py-3 rounded-lg transform transition  hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm shadow-lg sm:text-base focus:bg-slate-200"
                href="#"
              >
                XL
              </button>
              <button
                className="inline-block px-5 py-3 rounded-lg transform transition hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm  shadow-lg sm:text-bas focus:bg-slate-200"
                href="#"
              >
                XXL
              </button>
            </div>
            <div className="w-full flex px-2 items-center gap-4 py-2">
              <span className="text-xl font-bold">Qty</span>
              <span className="px-4 py-2 border cursor-pointer hover:border-black">
                -
              </span>
              <span>{singleProduct.quantity}</span>
              <span className="px-4 py-2 border cursor-pointer hover:border-black">
                +
              </span>
            </div>
            <div className="w-full p-2 text-sm">
              <h1>Please select your size and quantity to continue</h1>
            </div>
            <a
              className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
              href="#"
            >
              <div className="flex gap-2 items-center justify-center">
                <IoBagAdd size={30} />
                ADD TO CART
              </div>
            </a>
            <h2 className="text-xl font-bold px-2">Serviceability</h2>
            <div className="w-full px-2 flex">
              <input
                type="text"
                placeholder="Enter Delivery Pincode"
                className="h-full p-4 w-full focus:border-none border-none"
              />
              <a
                className="inline-block px-5 py-3  transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base h-full"
                href="#"
              >
                CHECK
              </a>
            </div>
            <div className="px-2">
              <h2 className="text-sm font-bold ">
                Please enter pincode to check serviceability.
              </h2>
              <div className="flex w-full p-1 border-b-2  bg-slate-300 mt-4">
                <div className="flex items-center justify-center flex-col border-r-2 text-wrap w-2/4 p-2 text-center text-sm">
                  <GiReturnArrow size={25} />
                  <h2>Easy 30 Days Return</h2>
                </div>
                <div className="flex items-center justify-center flex-col border-r-2 text-wrap w-2/4 p-2 text-center text-sm">
                  <TbTruckDelivery size={25} />
                  <h2>Cash On Delivery Available</h2>
                </div>
                <div className="flex items-center justify-center flex-col text-wrap w-2/4 p-2 text-center text-sm">
                  <MdLocalShipping size={25} />
                  <h2>Free Shipping</h2>
                </div>
              </div>
            </div>
            <div className="px-2 mt-4 w-full">
              <h1 className="text-lg font-bold">Style Note</h1>
              <p>{singleProduct.styleNote}</p>
            </div>
            <div className="w-full p-2">
              <h2 className="text-xl font-bold py-2">Features</h2>
              <div className="w-full grid lg:grid-cols-2 p-2 space-y-4 gap-2 ">
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Material</h2>
                  <h2>{singleProduct.features[5].Material}</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Pattern</h2>
                  <h2>Checked</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Collar Type</h2>
                  <h2>Spread Collar</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Sleeve length</h2>
                  <h2>Full Sleeve</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Closure Type</h2>
                  <h2>{singleProduct.features[0].ClosureType}</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Pocket Type</h2>
                  <h2>{singleProduct.features[7].PocketType}</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Numbers of Pockets</h2>
                  <h2>{singleProduct.features.NumberOfPockets}</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold"></h2>
                  <h2>Sherpa Jacket</h2>
                </div>
                <div className="w-full p-1 border-b-2 ">
                  <h2 className="text-md font-bold">Story</h2>
                  <h2>AAK by Stylers</h2>
                </div>
              </div>
            </div>
            <div className="w-full px-2 space-y-4">
              <h2 className="text-xl font-bold">Additional Details</h2>
              <ul>
                <li className="mb-2 p-2 ">
                  <span className="flex items-center ">
                    <GoDotFill size={15} />
                    <h2 className="text-md mr-4 font-bold text-nowrap ">
                      Country Of Origin:{" "}
                    </h2>
                    {singleProduct.additionalDetail.CountryOfOrigin}
                  </span>
                </li>
                <li className="mb-2 p-2 ">
                  <span className="flex items-center ">
                    <GoDotFill size={25} />
                    <h2 className="text-md mr-4 font-bold text-nowrap ">
                      Manufactured By:{" "}
                    </h2>
                    {singleProduct.additionalDetail.ManufacturedBy}
                  </span>
                </li>
                <li className="mb-2 p-2 ">
                  <span className="flex items-center ">
                    <GoDotFill size={15} />
                    <h2 className="text-md mr-4 font-bold text-nowrap ">
                      Marketed By:{" "}
                    </h2>
                    {singleProduct.additionalDetail.MarketedBy}
                  </span>
                </li>
                <li className="mb-2 p-2 ">
                  <span className="flex items-center ">
                    <GoDotFill size={15} />
                    <h2 className="text-md mr-4 font-bold text-nowrap ">
                      CustomerCare No:{" "}
                    </h2>
                    {singleProduct.additionalDetail.CustomerCareNo}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
