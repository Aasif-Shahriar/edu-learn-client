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
import { toast } from "react-toastify";

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
        toast.error('Firebase sign out failed')
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

      <li className="text-gray-500">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow">
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
            <>
              {" "}
              <div className="ml-4">
                <div className="dropdown dropdown-end bg-gray-100 rounded-full">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-10 h-10 cursor-pointer object-cover object-center rounded-full border-3  border-transparent hover:border-gray-400 transition-all duration-300"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content bg-secondary rounded z-1 w-[300px] p-3 shadow-lg"
                  >
                    <div className="bg-white shadow-xl p-2 rounded">
                      {" "}
                      <div className="flex flex-col justify-center items-center gap-2">
                        <img
                          src={user?.photoURL}
                          alt=""
                          className="w-24 h-24 object-center object-cover rounded-full"
                        />

                        <div className="text-center">
                          <h3 className="text-accent text-xl font-semibold">
                            Hi, {user?.displayName}
                          </h3>
                          <p>{user?.email}</p>
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="flex items-center justify-center">
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-2 p-2 rounded-sm cursor-pointer bg-red-500 text-white"
                        >
                          <RxExit size={20} /> Sign out
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
