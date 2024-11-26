import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="w-full flex justify-between px-6 py-4 bg-gray-100">
      <div>
        <NavLink to="/" className="text-lg font-bold text-blue-600">
          BookKeeping
        </NavLink>
        {isLoggedIn() && (
          <NavLink to="/dashboard" className="ml-6 text-lg font-bold text-blue-600">
            Dashboard
          </NavLink>
        )}
      </div>
      <div>
        {isLoggedIn() ? (
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className="text-lg font-bold text-blue-600 mx-2">
              Login
            </NavLink>
            <NavLink to="/signup" className="text-lg font-bold text-blue-600 mx-2">
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
