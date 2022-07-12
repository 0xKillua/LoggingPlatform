import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import jwtDecode from "jwt-decode";

const Authenticate = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState("false");

  useEffect(() => {
    const token = decodeURIComponent(document.cookie);
    const arr = token.split("=");
    const temp = arr[1];
    const temp1 = jwtDecode(temp);
    temp1.exp < Date.now()
      ? setIsAuthenticated("true")
      : setIsAuthenticated("false");
    // console.log(temp1.exp < Date.now());
    // console.log(isAuthenticated);
  }, [isAuthenticated]);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default Authenticate;
