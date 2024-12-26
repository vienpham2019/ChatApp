import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
      <div className="mb-12">
        <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
        <p className="text-gray-800 text-sm mt-4 ">
          Don't have an account{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Register here
          </Link>
        </p>
      </div>

      <div>
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="text"
            required
            className="w-full text-sm border-b bg-white border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
            placeholder="Enter email"
            onChange={handleChangeFormData}
          />
          <div className=" text-gray-400 w-[18px] h-[18px] absolute right-2">
            <TfiEmail />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="w-full text-sm border-b bg-white border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
            placeholder="Enter password"
            onChange={handleChangeFormData}
          />
          <div className=" text-gray-400 w-[18px] h-[18px] absolute right-2 cursor-pointer">
            {showPassword ? (
              <IoEyeOutline onClick={() => setShowPassword(false)} />
            ) : (
              <IoEyeOffOutline onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox border-gray-400"
          />
          <label for="remember-me" className="text-gray-500 ml-3 block text-sm">
            Remember me
          </label>
        </div>
        {/* <div>
        <a
          href="jajvascript:void(0);"
          className="text-blue-600 font-semibold text-sm hover:underline"
        >
          Forgot Password?
        </a>
      </div> */}
      </div>

      <div className="mt-12">
        <button
          type="submit"
          className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
