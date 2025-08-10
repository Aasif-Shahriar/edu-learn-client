// src/components/navbar/NavLinks.jsx
import React from "react";
import { NavLink } from "react-router";

const NavLinks = React.memo(({ user }) => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  return (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses" className={linkClass}>
          Courses
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </li>
    </>
  );
});

export default NavLinks;
