import React from "react";
import { FaGoogle } from "react-icons/fa";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full border">
      <div className="w-4/5 border mx-auto">
        <div className="shadow-lg sm:w-1/2 w-full mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-2 mb-5">
          <h2 className="text-gray-300 text-center">LOGIN WITH</h2>
          <div className="w-60 flex items-center justify-center cursor-pointer gap-4 p-2">
            <FaGoogle size={35} className="border-r-2 p-2 text-red-600" />
            <h2>SIGN IN WITH GOOGLE</h2>
          </div>
        </div>
        <div className="shadow-lg sm:w-1/2 w-full mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-5 mb-5 relative">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="E-Mail Address"
            required
          />
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Password"
            required
          />
          <a
            className="inline-block w-full px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base text-center mt-5"
            href="#"
          >
            LOGIN
          </a>
          <div className="flex w-full items-center justify-between">
            <div>
              <h2>FORGOT PASSWORD</h2>
            </div>
            <div>
              NOT REGISTERED USER?{"  "}
              <Link to="/signUp" className="text-sm font-bold cursor-pointer">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
