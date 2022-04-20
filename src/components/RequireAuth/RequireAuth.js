import { getAuth } from "@firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import app from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(getAuth(app));
  const location = useLocation();
  console.log();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
