import { useEffect, useState } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";
const PersistLogin = () => {
  //   const [persist] = usePersist();

  const { token, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  const location = useLocation();

  if (isCheckingAuth && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
};

export default PersistLogin;
