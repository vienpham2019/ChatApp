import React from "react";
import LogoPng from "../img/ChatAppLogo.png";
const Logo = ({ className }) => {
  return (
    <div className={className}>
      <img src={LogoPng} alt="Logo" />
    </div>
  );
};

export default Logo;
