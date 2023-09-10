import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import {  GuardInterface } from "./types";

const Auth : GuardInterface = ( {children}  ) => {
  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children as JSX.Element;
};

export default Auth;