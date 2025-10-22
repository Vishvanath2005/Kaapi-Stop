import React, { useState } from "react";
import { useNavigate } from "react-router";

import LOGO from "../../assets/images/logo.png";
import { IoEyeOff, IoEye } from "react-icons/io5";



const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
<div className="relative font-layout-font h-screen flex justify-center bg-light-yellow items-center overflow-hidden">
  {/* Background Image */}
  
  

  {/* Login Box */}
  <div className="w-full max-w-lg bg-white z-10 p-8 rounded-xl shadow-lg">
    <div className="flex justify-between items-center py-4">
      <div>
        <img src={LOGO} alt="Logo" className="w-44" />
      </div>
      <p className="text-3xl font-bold text-center my-4 mr-7">Reset Password</p>
    </div>
    <form className="mx-4 mt-4 space-y-4">
      <label className="grid relative">
        Password
        <input
          type={showPassword ? "text" : "password"}
          className="border-2 border-input-bordergrey outline-none rounded-md py-2 px-2 pr-10"
          placeholder="Enter password"
        />
        <span
          className="absolute right-3 top-9 cursor-pointer dark:text-gray-400 text-black"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </span>
      </label>

      <label className="grid relative">
        Confirm Password
        <input
          type={showPassword ? "text" : "password"}
          className="border-2 border-input-bordergrey outline-none rounded-md py-2 px-2 pr-10"
          placeholder="Enter password"
        />
        <span
          className="absolute right-3 top-9 cursor-pointer dark:text-gray-400 text-black"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </span>
      </label>

       <p
              onClick={() => navigate("/forgotpassword")}
              className="text-right text-sm cursor-pointer hover:underline mt-4 "
            >
              Forgot Password?
            </p>
      <p
        onClick={() => navigate("/")}
        className="cursor-pointer text-white bg-dark-brown text-center w-full py-2 my-3 rounded-md text-lg font-semibold transition duration-200"
      >
        Reset Passoword
      </p>
    </form>
  </div>
</div>

    </>
  );
};

export default ResetPassword;
