// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user';

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useContext(UserContext);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
