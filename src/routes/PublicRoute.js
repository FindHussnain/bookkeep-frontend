import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  if (isLoggedIn()) {
    return <Navigate to="/dashboard" replace />; 
  }

  return children;
};

export default PublicRoute;
