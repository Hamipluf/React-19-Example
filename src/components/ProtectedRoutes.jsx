// src/components/ProtectedRoute.js
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogged) {
      return navigate("/login");
    }
  }, [isLogged]);

  return children;
};

export default ProtectedRoute;
