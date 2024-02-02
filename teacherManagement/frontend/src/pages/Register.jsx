import React from "react";

const Register = () => {
  return (
    <>
      <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
        <h1 className="text-center font-bold text-3xl text-white">Register</h1>
        <form className="my-6">
          <input
            className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
            placeholder="Name"
            type="text"
          />
          <input
            className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
            placeholder="Email"
            type="email"
          />
          <input
            className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
            placeholder="Password"
            type="password"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
