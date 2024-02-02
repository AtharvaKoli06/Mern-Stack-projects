import React from "react";
import { FcManager } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-slate-300">
      <div className="flex items-center justify-around">
        <div className="flex items-center">
          <FcManager size={50} />
          <div>
            <h1 className="text-lg md:text-4xl text-green-900 ">
              Teacher_Management
            </h1>
          </div>
        </div>
        <div className="p-2 sm:w-2/4">
          <ul className="flex justify-around items-center gap-3 text-xs lg:text-xl ">
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>
            <Link to="/about" className="cursor-pointer hover:underline">
              About
            </Link>
            <Link to="/guide" className="cursor-pointer hover:underline">
              Guide
            </Link>
          </ul>
        </div>
        <div className="float-right text-xs sm:text-3xl">
          <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
            <span>
              <MdAccountCircle size={30} className="cursor-pointer" />
            </span>
            <div className="absolute top-5 shadow-lg rounded-md right-1 p-2 z-50 hidden group-hover:block text-black bg-white w-[150px] border">
              <ul className="grid lg:grid-cols-1">
                <Link to="/register">
                  <li className="inline-block p-2 text-xs hover:bg-purple-200 w-full rounded-md">
                    NEW!! REGISTER
                  </li>
                </Link>
                <Link to="/login">
                  <li className="inline-block p-2 text-xs hover:bg-purple-200 w-full rounded-md">
                    LOGIN
                  </li>
                </Link>
              </ul>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
