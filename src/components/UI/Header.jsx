import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


  const [show, setShow] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", !show);
  }, [show]);

  return (
    <nav className="p-4 px-8 shadow-lg fixed top-0 left-0 w-full z-10 bg-gray-900 text-green-400 flex justify-between items-center">
      <div className="text-2xl font-bold">Culinary Crafter</div>
      <ul className="flex gap-6 items-center text-teal-100">
        <li><NavLink to="/" className="hover:text-gray-500  font-bold">Home</NavLink></li>
        <li><NavLink to="/about" className="hover:text-gray-500 font-bold">About</NavLink></li>
        <li><NavLink to="/recipes" className="hover:text-gray-500 font-bold">Recipes</NavLink></li>
        <li><NavLink to="/dietary-plan" className="hover:text-gray-500 font-bold">Diet</NavLink></li>
        <li><NavLink to="/contact" className="hover:text-gray-500 font-bold">Contact</NavLink></li>

        {/* Button logic */}
        {show ? (
          <button
            onClick={() => {
              navigate("/signup");
              setShow(false); // Show Logout
            }}
            className="bg-blue-500 hover:bg-blue-600 p-1.5 rounded-sm text-white"
          >
            Create Account
          </button>
        ) : (
          
          <button
            onClick={() => {
              setShow(false);// Show Create Account
              localStorage.removeItem("isLoggedIn"); // Remove login state
              navigate("/login");
            
            }}
            className="bg-red-500 hover:bg-red-600 p-1.5 rounded-sm text-white"
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Header;
