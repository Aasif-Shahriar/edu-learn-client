import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="text-gray-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-500">
        <NavLink to="/add-course">Add Course</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <p className="text-2xl font-bold flex items-center gap-1">
              <span className="bg-[#4F46E5] rounded-lg text-white p-2">
                <FaGraduationCap />
              </span>
              <span>EduLearn</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
