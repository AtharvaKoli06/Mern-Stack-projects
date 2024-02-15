import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";

import { authLogin } from "../redux/auth/AuthLogin.slice";
import Loader from "../components/Loader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [onSuccess, setOnSuccess] = useState("");

  const dataLogin = useSelector((state) => state.Login);
  const { loading, error, data } = dataLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = data?.data?.data?.user?.username;
  const userDetails = data?.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(authLogin({ username, password, year }));
      setUsername("");
      setPassword("");
      setYear("");
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
    }
    if (userDetails?.success) {
      setOnSuccess(userDetails.message);
      navigate(`/${user}/features`);
    }
    if (!error) {
      alert(userDetails.message);
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleYearSelect = (e) => setYear(e.target.value);

  const years = Array.from(
    { length: 101 },
    (_, i) => new Date().getFullYear() - i
  );

  const content = loading ? (
    <Loader size={50} />
  ) : (
    <form className="my-6" onSubmit={handleSubmit}>
      <p className="text-red-500">{error}</p>
      <select
        value={year}
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        onChange={handleYearSelect}
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <input
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        placeholder="Username..."
        type="text"
        value={username}
        onChange={handleUserInput}
        autoComplete="off"
        required
      />
      <input
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordInput}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
      >
        Login
      </button>
    </form>
  );

  return (
    <div className="w-full border h-screen flex items-center justify-center bg-black ">
      <div className="card px-8 py-6 rounded-lg bg-white w-[300px] md:w-[500px] mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <RiLoginBoxFill size={50} className="text-blue-400" />
          <h1 className="text-center font-bold text-3xl">Login</h1>
        </div>
        {content}
        <div className="flex justify-around items-center w-full border">
          {errorMsg && (
            <Link
              to="/register"
              className="text-md text-green-500 hover:underline"
            >
              Register
            </Link>
          )}
          {onSuccess && (
            <p className="text-md text-green-500 hover:underline">
              {userDetails.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
