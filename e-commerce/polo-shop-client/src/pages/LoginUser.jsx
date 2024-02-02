import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Login } from "../redux/slices/Form.slice";
import { useDispatch } from "react-redux";

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (userData) => {
    try {
      dispatch(Login(userData));
    } catch (error) {
      console.log("Registration Failed", error.message);
    }
  };

  const onSubmit = (data) => {
    handleLogin(data);
  };

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
        <form
          className="shadow-lg sm:w-1/2 w-full mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-5 mb-5 relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <CiMail size={20} />
              </span>
            </div>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="xyx@gmail.com"
              aria-invalid={errors.email ? "true" : "false"}
              required
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <span className="text-gray-500 sm:text-sm">
                <IoMdKey size={20} />
              </span>
            </div>
            <input
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
              type="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password *"
              aria-invalid={errors.password ? "true" : "false"}
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <FaEye />
              <FaEyeSlash />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="inline-block w-full px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base text-center mt-5"
          >
            LOGIN
          </button>
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
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
