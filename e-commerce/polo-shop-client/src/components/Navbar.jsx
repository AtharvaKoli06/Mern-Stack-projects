import React from "react";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPlus, FaCaretDown } from "react-icons/fa";
import {
  CiLocationOn,
  CiSearch,
  CiShoppingCart,
  CiHeart,
  CiHome,
} from "react-icons/ci";
import { SiAzuredataexplorer } from "react-icons/si";
import { LiaTractorSolid } from "react-icons/lia";
import { MdSpatialTracking } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { dropDownLinks, collection, womenWear } from "../data/data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import { cardInDetailsInfo } from "../redux/slices/AllData";

const Navbar = () => {
  const [remove, setRemove] = useState(true);

  const toggling = () => {
    setRemove(!remove);
  };
  const toggle = () => {
    setRemove(!remove);
    () => useDispatch(cardInDetailsInfo);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex">
          <div className="flex m-2 items-center justify-between w-full">
            <IoMenu size={30} className="mr-20 sm:hidden" onClick={toggling} />
            <h2 className="text-3xl font-extrabold font-mono mx-auto">
              Styler
            </h2>
            <CiSearch size={30} className="sm:hidden" />
            <CiShoppingCart size={30} className="ml-2 sm:hidden" />
            <ul className="hidden 2xl:w-3/4 sm:flex sm:items-center sm:justify-evenly sm:text-xs gap-2 p-2">
              <Link
                to="/"
                className="flex items-center justify-center gap-1 cursor-pointer"
              >
                <CiHome size={20} />
                <span>Home</span>
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center gap-1 cursor-pointer"
              >
                <CiLocationOn size={20} />
                <span>Store Locator</span>
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center gap-1 cursor-pointer"
              >
                <CiHeart size={20} />
                <span>Saved</span>
              </Link>
              <Link
                to="/orderInformation"
                className="flex items-center justify-center gap-1 cursor-pointer"
              >
                <LiaTractorSolid size={20} />
                <span>Track Your Order</span>
              </Link>
              <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                <RiAccountCircleLine size={20} />
                <span>Account</span>
                <div className="absolute top-5 shadow-lg rounded-md -left-9 p-2 z-50 hidden group-hover:block text-black bg-white w-[170px] border">
                  <ul className="grid lg:grid-cols-1">
                    <li className="inline-block p-2 text-xs hover:bg-purple-200 w-full rounded-md">
                      <Link to="/login">Login / Register</Link>
                    </li>
                    <li className="inline-block p-2 text-xs hover:bg-purple-200 w-full rounded-md">
                      <Link to="/orders">My Order</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                <CiShoppingCart size={20} />
                <span>Cart</span>
                <div className="absolute top-5 shadow-lg rounded-md right-1 p-2 z-50 hidden group-hover:block text-black bg-white w-[400px] border">
                  <ul className="grid lg:grid-cols-1">
                    <li className="inline-block p-2 text-xs hover:bg-purple-200 w-full rounded-md">
                      <Link to="/login">Login / Register</Link>
                    </li>
                    <li className="inline-block p-2 text-xs hover:bg-purple-200 w-full rounded-md">
                      <Link to="/orders">My Order</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {!remove ? (
          <div className="bg-gray-50 w-3/4 sm:hidden border-r-2 h-full absolute flex justify-between flex-col z-40 left-0 ">
            <ul className="w-full h-full flex flex-col gap-5 ">
              <GiTireIronCross size={30} className="m-3" onClick={toggling} />
              <Link
                to="/newIn"
                onClick={toggle}
                className="border-b-4 p-2 flex justify-between items-center"
              >
                New In
                <FaPlus />
              </Link>
              <Link
                to="/men"
                onClick={toggle}
                className="border-b-4 p-2 flex justify-between items-center"
              >
                Men
                <FaPlus />
              </Link>
              <Link
                to="/women"
                onClick={toggle}
                className="border-b-4 p-2 flex justify-between items-center"
              >
                Women
                <FaPlus />
              </Link>
              <Link
                to="/collections"
                onClick={toggle}
                className="border-b-4 p-2 flex justify-between items-center"
              >
                Collections
                <FaPlus />
              </Link>
              <Link to="/sales" className="border-b-4 p-2" onClick={toggle}>
                Sale
              </Link>
              <Link to="/fitGuide" className="border-b-4 p-2" onClick={toggle}>
                Fit Guide
              </Link>
              <Link to="/blog" className="border-b-4 p-2" onClick={toggle}>
                Blog
              </Link>
              <span
                to="/account"
                className="border-b-4 p-2 flex gap-2 items-center"
                onClick={toggle}
              >
                <CgProfile />
                Account
              </span>
              <Link
                to="/saved"
                className="border-b-4 p-2 flex gap-2 items-center"
                onClick={toggle}
              >
                <CiHeart />
                Saved
              </Link>
            </ul>
            <ul>
              <Link to="/storeLocator" className="border-b-4 p-2 flex gap-2">
                <CiLocationOn />
                Store Locator
              </Link>
              <Link to="/trackYourOrder" className="p-2 flex gap-2">
                <MdSpatialTracking />
                Track Your Order
              </Link>
            </ul>
          </div>
        ) : null}
        <div className="w-full">
          <div className="w-full  float-right p-2">
            <ul className="sm:flex sm:items-center sm:justify-center sm:text-md lg:text-xl gap-5 hidden text-xs">
              <Link
                to="/newIn"
                onClick={() => useDispatch(cardInDetailsInfo())}
                className="hover:underline py-4 cursor-pointer text-nowrap"
              >
                NEW IN
              </Link>
              <a
                href="/men"
                className="hover:underline py-4 cursor-pointer flex items-center justify-center relative group"
              >
                MEN
                <span>
                  <FaCaretDown
                    size={15}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                </span>
                <div className="absolute top-14 shadow-lg rounded-md -left-9 p-2 z-50 hidden group-hover:block text-black bg-white w-[500px]">
                  <ul className="grid lg:grid-cols-3">
                    {dropDownLinks.map((links) => (
                      <li
                        key={links.id}
                        className="inline-block p-2 text-sm hover:bg-purple-200 w-full rounded-md"
                      >
                        <Link to={links.link}>{links.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
              <a
                href="/women"
                className="hover:underline py-4 cursor-pointer flex items-center justify-center relative group"
              >
                WOMEN
                <span>
                  <FaCaretDown
                    size={15}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                </span>
                <div className="absolute top-14 shadow-lg rounded-md -left-9 p-2 z-50 hidden group-hover:block text-black bg-white w-[500px]">
                  <ul className="grid lg:grid-cols-3">
                    {womenWear.map((links) => (
                      <li
                        key={links.id}
                        className="inline-block p-2 text-sm hover:bg-purple-200 w-full rounded-md"
                      >
                        <Link to={links.link}>{links.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
              <a
                href="/collections"
                className="hover:underline py-4 cursor-pointer flex items-center justify-center relative group"
              >
                COLLECTIONS
                <span>
                  <FaCaretDown
                    size={15}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                </span>
                <div className="w-[500px] absolute top-14 shadow-lg rounded-md -left-9 p-2 z-50 hidden group-hover:block text-black bg-white">
                  <ul className="grid lg:grid-cols-3">
                    {collection.map((links) => (
                      <li
                        key={links.id}
                        className="inline-block p-2 text-sm hover:bg-purple-200 w-full rounded-md"
                      >
                        <Link to={links.link}>{links.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
              <Link to="/sales" className="hover:underline py-4 cursor-pointer">
                SALES
              </Link>
              <Link
                to="/fitGuide"
                className="hover:underline py-4 cursor-pointer text-nowrap"
              >
                FIT GUIDE
              </Link>
              <Link to="/blog" className="hover:underline py-4 cursor-pointer">
                BLOG
              </Link>
              <li className="flex items-center justify-center relative">
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <span className="text-gray-500 sm:text-sm">
                      <SiAzuredataexplorer />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Find Here..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <span
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <CiSearch
                        size={32}
                        className="cursor-pointer absolute right-1 top-1"
                      />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {remove ? (
        <div className="bg-gray-300 flex justify-around p-1 items-center">
          <h2 className="text-center">
            FREE SHIPPING & 30 DAY RETURNS | SIGN UP AND GET 15% OFF* | CUSTOMER
            CARE # 5555-2222-22
          </h2>
          <MdOutlineCancel
            size={25}
            className="cursor-pointer"
            onClick={toggling}
          />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
