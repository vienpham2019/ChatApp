import { Outlet } from "react-router-dom";
import authImage from "../img/Auth.png";
const AuthLayout = () => {
  return (
    <div className="font-[sans-serif] bg-gray-900 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src={authImage}
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
