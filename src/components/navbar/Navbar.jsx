import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="text-gray-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-500">
        <NavLink to="/courses">Courses</NavLink>
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
              <HiBars3 className="w-8 h-8" />
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
              <span className="bg-primary rounded-lg text-white p-2">
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
          <a className="btn bg-primary text-white">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
