import React, { useEffect } from "react";

import { GoGear } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import LogoPng from "../img/ChatAppLogo.png";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { token, logOut } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(token);
  }, [token]);
  const buttonClass =
    "flex items-center gap-1 cursor-pointer px-3 py-1 hover:bg-[#d1d0d0] rounded text-[#363636]";
  return (
    <header className="flex px-4 sm:px-10 font-[sans-serif] ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full ">
        <Link to="/" className="w-[10rem] relative">
          <div className="h-[4rem] relative">
            <img className="absolute -top-[45px]" src={LogoPng} alt="Logo" />
          </div>
        </Link>

        <div className="flex max-lg:ml-auto space-x-4">
          <div className={buttonClass}>
            <GoGear />
            Setting
          </div>
          {token && (
            <>
              <div className={buttonClass}>
                <CgProfile />
                Profile
              </div>
              <div
                className={buttonClass}
                onClick={async () => {
                  await logOut({ navigate });
                }}
              >
                <RiLogoutBoxRLine />
                Logout
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
