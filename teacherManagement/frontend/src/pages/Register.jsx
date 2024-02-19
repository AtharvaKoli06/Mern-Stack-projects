import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";

import { authRegister } from "../redux/auth/AuthRegister.slice";
import Loader from "../components/Loader";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorsMsg, setErrorsMsg] = useState({});
  const [errors, setErrors] = useState("");

  const { loading, error, data } = useSelector((state) => state.Register);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let status = data?.data;
  let message = status?.message;
  let success = status?.success;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "username":
        const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
        if (!usernameRegex.test(value)) {
          error =
            "Username must be between 3 and 20 characters and contain only letters, numbers, underscores, and hyphens";
        }
        break;
      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(value)) {
          error =
            "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long";
        }
        break;
      default:
        break;
    }
    setErrorsMsg((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(authRegister(formData));
    } catch (error) {
      setErrors("An error occurred during User register", message);
    }
    if (error) {
      setErrors("An error occurred during User register2", message);
      return;
    }
    setFormData({
      username: "",
      password: "",
    });
    if (success && status.data && !error) {
      navigate("/login");
      success = false;
    }
    alert(error ? error : message);
  };

  const content = loading ? (
    <Loader size={50} />
  ) : (
    <form className="my-6" onSubmit={handleSubmit}>
      {errors && <p className="text-red-500">{errors}</p>}
      <input
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        placeholder="username..."
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      {errorsMsg.username && (
        <p className="text-red-500">{errorsMsg.username}</p>
      )}
      <input
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        placeholder="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errorsMsg.password && (
        <p className="text-red-500">{errorsMsg.password}</p>
      )}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
      >
        Register
      </button>
    </form>
  );

  return (
    <div className="w-full border h-screen flex items-center justify-center bg-black">
      <div className="card px-8 py-6 rounded-lg bg-white w-[300px] md:w-[500px]">
        <div className="w-full flex flex-col items-center justify-center">
          <GiArchiveRegister size={50} className="text-blue-400" />
          <h1 className="text-center font-bold text-3xl">Register</h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Register;
