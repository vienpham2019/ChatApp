import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { logIn } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isUpdateFormData, setUpdateFormData] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateFormData(false);
    const allFieldsFilled = Object.entries(formData).every(
      ([, value]) => value !== ""
    );
    if (!allFieldsFilled) {
      errorToast({
        title: "Missing Fields",
        message: "Please fill out all the required fields.",
      });
    } else {
      try {
        setIsLoading(true);
        await logIn({ payload: formData, navigate });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setUpdateFormData(true);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  if (isLoading) {
    return (
      <div className="flex flex-col gap-[1rem] max-w-lg w-full mx-auto">
        <div className="mb-12">
          <div className="skeleton h-[2rem] w-[35%]"></div>
          <div className="skeleton h-[1rem] w-[50%] mt-[2rem]"></div>
        </div>

        <div className="skeleton h-[4rem] w-full"></div>
        <div className="skeleton h-[4rem] w-full"></div>
        <div className="skeleton h-[2rem] w-[20%]"></div>
        <div className="skeleton h-[3rem] w-full mt-2"></div>
      </div>
    );
  }
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
        <label
          className={`${
            !isUpdateFormData && isError ? "text-red-500" : "text-gray-800"
          } text-xs block mb-2`}
        >
          Email
        </label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="text"
            required
            value={formData.email}
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
        <label
          className={`${
            !isUpdateFormData && isError ? "text-red-500" : "text-gray-800"
          } text-xs block mb-2`}
        >
          Password
        </label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
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
          <label
            htmlFor="remember-me"
            className="text-gray-500 ml-3 block text-sm"
          >
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
