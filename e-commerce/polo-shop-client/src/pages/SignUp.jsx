import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { IoIosMan, IoMdKey } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { signUp, googleLogin } from "../redux/slices/Form.slice";
// import

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const handleRegister = (userData) => {
    try {
      dispatch(signUp(userData));
    } catch (error) {
      console.log("Registration Failed", error.message);
    }
  };

  const onSubmit = (data) => {
    handleRegister(data);
  };

  const handleGooglLogin = () => {
    try {
      dispatch(googleLogin());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full border">
      <div className="w-4/5 border mx-auto">
        {/* <div className="shadow-lg w-full sm:w-1/2 mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-2 mb-5">
          <h2 className="text-gray-300 text-center">SignUp WITH</h2>
          <div
            className="w-full flex items-center justify-center cursor-pointer gap-4 p-2 "
            onClick={handleGooglLogin}
          >
            <FaGoogle
              size={35}
              className="border-r-2 p-2 text-red-600 hover:bg-slate-300"
            />
            <h2>SIGN IN WITH GOOGLE</h2>
          </div>
        </div> */}
        <div className="shadow-lg w-full sm:w-1/2 mx-auto flex flex-col p-4 items-center justify-center mt-14 space-y-5 mb-10 relative">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mt-2 w-full rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
                <span className="text-gray-500 sm:text-sm">
                  <IoIosMan size={20} />
                </span>
              </div>
              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="First Name *"
                aria-invalid={errors.firstName ? "true" : "false"}
                required
              />
              {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )}
              {errors.firstName && errors.firstName.type === "maxLength" && (
                <span>Max length exceeded</span>
              )}
            </div>
            <div className="relative mt-2 w-full rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
                <span className="text-gray-500 sm:text-sm">
                  <IoIosMan size={20} />
                </span>
              </div>
              <input
                {...register("lastName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Last Name *"
                aria-invalid={errors.lastName ? "true" : "false"}
                required
              />
              {errors.lastName?.type === "required" && (
                <p role="alert">Last name is required</p>
              )}
              {errors.lastName && errors.lastName.type === "maxLength" && (
                <span>Max length exceeded</span>
              )}
            </div>
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
                  <MdAddCall size={20} />
                </span>
              </div>
              <input
                {...register("mobileNumber", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Mobile Numbers *"
                aria-invalid={errors.mobileNumber ? "true" : "false"}
                required
              />
              {errors.mobileNumber && (
                <p role="alert">{errors.mobileNumber.message}</p>
              )}
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
              {errors.password && <p role="alert">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-block w-full px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base text-center mt-5"
            >
              SIGN UP
            </button>
          </form>
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
