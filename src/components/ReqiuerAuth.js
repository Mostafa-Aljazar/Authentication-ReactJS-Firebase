import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ReqiuerAuth = ({ children }) => {
  const { currentUser } = useAuth();

  const location = useLocation();
  if (!currentUser) {
    return <Navigate to={"/login"} state={{ path: location.pathname }} />;
  }

  return (
    <div>
      {children}
      {
        // <Outlet/>
      }
    </div>
  );
};

export default ReqiuerAuth;
