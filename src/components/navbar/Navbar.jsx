import React, { use } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../../provider/AuthContext";
import { toast } from "react-toastify";
import { RxExit } from "react-icons/rx";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContex);

  //❌ signOut user
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("User signed out successffully");
      })
      .catch((err) => {
        console.log(`Error from signOut ${err}`);
      });
  };

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
    <nav className="bg-base-100 shadow-2xl">
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
              <span className="hidden md:block">EduLearn</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              data-tooltip-id="logout-tooltip"
              data-tooltip-content="Sign out"
              onClick={handleSignOut}
              className="text-lg p-2 rounded-sm cursor-pointer bg-red-500 text-white"
            >
              <RxExit />
              <Tooltip id="logout-tooltip" place="bottom"></Tooltip>
            </button>
          ) : (
            <div>
              <span className="mr-2 md:mr-5 text-gray-500">
                <NavLink to="/signUp">Sign up</NavLink>
              </span>
              <Link to="/signIn">
                <button className="btn bg-primary text-white">Sign In</button>
              </Link>
            </div>
          )}
          {/* 📷 user's profile */}
          <div className="ml-4">
            {user && (
              <>
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  data-tooltip-id="userName-tooltip"
                  data-tooltip-content={user?.displayName}
                  className="w-10 h-10 cursor-pointer object-cover object-center rounded-full"
                />
                <Tooltip id="userName-tooltip" place="bottom"></Tooltip>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
