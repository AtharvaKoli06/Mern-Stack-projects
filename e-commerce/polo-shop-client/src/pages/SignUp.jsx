import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { IoIosMan, IoMdKey } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";

const SignUp = () => {
  return (
    <div className="w-full border">
      <div className="w-4/5 border mx-auto">
        <div className="shadow-lg w-full sm:w-1/2 mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-2 mb-5">
          <h2 className="text-gray-300 text-center">SignUp WITH</h2>
          <div className="w-full flex items-center justify-center cursor-pointer gap-4 p-2">
            <FaGoogle size={35} className="border-r-2 p-2 text-red-600" />
            <h2>SIGN IN WITH GOOGLE</h2>
          </div>
        </div>
        <div className="shadow-lg w-full sm:w-1/2 mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-5 mb-10 relative">
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <IoIosMan size={20} />
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="First Name *"
              required
            />
          </div>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <IoIosMan size={20} />
              </span>
            </div>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Last Name *"
              required
            />
          </div>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <CiMail size={20} />
              </span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Your Email Address *"
              required
            />
          </div>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <MdAddCall size={20} />
              </span>
            </div>
            <input
              type="text"
              name="number"
              id="number"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Mobile Numbers *"
              required
            />
          </div>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <IoMdKey size={20} />
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password *"
              required
            />
          </div>
          <Link
            className="inline-block w-full px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base text-center mt-5"
            href="/home"
          >
            SIGN UP
          </Link>
          <div className="flex w-full items-center justify-around p-2">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h1 className="text-lg">AIREADY REGISTERED?</h1>
              </div>
              <Link
                className="inline-block rounded-lg py-2 px-3 transform transition border border-dotted border-red-300 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm  sm:text-base text-center mt-5"
                to="/login"
              >
                LOG IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
