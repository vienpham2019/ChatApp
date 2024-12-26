import { useEffect, useState } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Loader } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import usePersist from "../hooks/usePersist";
const PersistLogin = () => {
  const [persist] = usePersist();

  const { token, verifyRefreshToken, verifyRefreshTokenLoading } =
    useAuthStore();
  useEffect(() => {
    if (!token && persist) verifyRefreshToken();
  }, [verifyRefreshToken]);
  const location = useLocation();
  if (verifyRefreshTokenLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  if (!verifyRefreshTokenLoading && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
};

export default PersistLogin;
