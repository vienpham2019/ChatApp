import { useEffect, useRef, useState } from "react";

import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import usePersist from "../hooks/usePersist";
import { waringToast } from "../util/constomToast";

const PersistLogin = () => {
  const [persist] = usePersist();
  const effectRan = useRef(true);
  const { token, verifyRefreshToken: refreshToken } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        setIsLoading(true);
        await refreshToken();
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (effectRan.current === true) {
      if (!token && persist) verifyRefreshToken();
    } else {
      effectRan.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  if (isError) {
    waringToast({
      title: "Login",
      message:
        "Your login session has expired. Please log in again to continue.",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
};

export default PersistLogin;
