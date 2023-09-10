import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import {  GuardInterface } from "./types";

const Guest : GuardInterface = ( {children}  ) => {
  const token = Cookies.get("token");
  if (token) {
    return <Navigate to="/" />;
  }
  return children as JSX.Element;
};

export default Guest;