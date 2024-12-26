import { rule } from "postcss";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaInfoCircle, FaUser } from "react-icons/fa";
import { IoCheckmark, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordRule, setPasswordRule] = useState({
    "At least 8 characters long.": false,
    "Contains one letter.": false,
    "Contains one digit.": false,
    "Contains one special character.": false,
  });

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      const rules = {
        "At least 8 characters long.": value.length >= 8,
        "Contains one letter.": /[A-Za-z]/.test(value),
        "Contains one digit.": /\d/.test(value),
        "Contains one special character.": /[@$!%*?&]/.test(value),
      };
      setPasswordRule(rules);
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <form className="max-w-lg w-full mx-auto">
      <div className="mb-12">
        <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
          Create an account
        </h3>
      </div>

      <div>
        <label className="text-gray-800 text-xs block mb-2">Full Name</label>
        <div className="relative flex items-center">
          <input
            name="name"
            type="text"
            required
            className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
            placeholder="Enter name"
          />
          <div className=" text-gray-400 w-[18px] h-[18px] absolute right-2">
            <FaUser />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="text"
            required
            className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
            placeholder="Enter email"
            onChange={handleChangeFormData}
          />
          <div className=" text-gray-400 w-[18px] h-[18px] absolute right-2">
            <TfiEmail />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex gap-4">
          <label className="text-gray-800 text-xs block mb-2">Password</label>
          <div className="relative ">
            <div>
              <FaInfoCircle className="cursor-pointer" />
            </div>
            <ul
              className={`absolute ${
                !passwordFocus && "hidden"
              } top-[-5rem] left-[1rem] ml-2 bg-base-100 rounded-lg z-[1] w-[16rem] py-2 px-4 text-[14px]`}
            >
              {Object.entries(passwordRule).map(([rule, isValid]) => {
                return (
                  <li key={rule} className="flex gap-2">
                    <div className="flex gap-2">
                      {isValid ? (
                        <IoCheckmark className="text-green-400" />
                      ) : (
                        <RxCross2 className="text-red-600" />
                      )}
                    </div>
                    <a>{rule}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="relative flex items-center">
          <input
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            name="password"
            type={showConfirmPassword ? "text" : "password"}
            required
            className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
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
      <div className="mt-6">
        <label className="text-gray-800 text-xs block mb-2">
          Confirm Password
        </label>
        <div className="relative flex items-center">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
            placeholder="Enter confirm password"
            onChange={handleChangeFormData}
          />
          <div className=" text-gray-400 w-[18px] h-[18px] absolute right-2 cursor-pointer">
            {showConfirmPassword ? (
              <IoEyeOutline onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <IoEyeOffOutline onClick={() => setShowConfirmPassword(true)} />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox border-gray-400"
        />
        <label className="ml-3 flex gap-2 text-sm text-gray-800 ">
          I accept the{" "}
          <p
            className="text-blue-500 font-semibold cursor-pointer ml-1"
            onClick={() =>
              document.getElementById("Terms_and_Conditions").showModal()
            }
          >
            Terms and Conditions
          </p>
        </label>
        <dialog id="Terms_and_Conditions" className="modal w-full absolute">
          <div className="modal-box ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h4 className="font-bold">Terms and Conditions</h4>
            <p className="py-2 text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur omnis velit deserunt voluptatum maiores qui vero
              temporibus laboriosam asperiores impedit ea quod voluptas ipsam
              voluptate, autem quia similique dolorum reprehenderit!
            </p>
            <p className="py-1 text-[15px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, quas!
            </p>
            <p className="py-1 text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem earum eaque accusamus cupiditate nostrum nisi.
              Soluta dolore nostrum rem sint.
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

      <div className="mt-12">
        <button
          type="button"
          className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
        >
          Creat an account
        </button>
        <p className="text-sm mt-6 text-gray-800">
          Already have an account?{" "}
          <a
            href="javascript:void(0);"
            className="text-blue-500 font-semibold hover:underline ml-1"
          >
            Login here
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignUpPage;
