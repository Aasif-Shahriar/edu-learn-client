import React, { use } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { RxExit } from "react-icons/rx";
import { motion } from "motion/react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  // console.log(user?.displayName,user?.email,user?.photoURL);

  // signOut user
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then(() => {
            Swal.fire({
              title: "Sign out successful",
              icon: "success",
              draggable: true,
            });
          })
          .catch((err) => {
            console.error("backend logout failed: ", err);
          });
      })
      .catch((err) => {
        console.log(`firebase signout failed: ${err}`);
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
      {/* instructor routes */}
      {user && (
        <>
          {" "}
          <li className="text-gray-500">
            <NavLink to="/add-course">Add Course</NavLink>
          </li>
          <li className="text-gray-500">
            <NavLink to="/manage-courses">Manage Courses</NavLink>
          </li>
        </>
      )}

      {/* user related routes */}
      {user && (
        <>
          {" "}
          <li className="text-gray-500">
            <NavLink to="/my-enrollments">My Enrollments</NavLink>
          </li>
        </>
      )}
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
        {/* navbar end */}
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
            <>
              {" "}
              <span className="mr-2 md:mr-5 text-gray-500">
                <NavLink to="/signUp" className="px-2 py-2">
                  Sign up
                </NavLink>
              </span>
              <Link to="/signIn">
                <motion.button
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="btn bg-primary text-white"
                >
                  Sign In
                </motion.button>
              </Link>
            </>
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
