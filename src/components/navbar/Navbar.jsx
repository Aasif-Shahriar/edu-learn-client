// src/components/navbar/Navbar.jsx
import React, { useState } from "react";
import { FaGraduationCap, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import MobileMenu from "./MobileMenu";
import AuthButtons from "./AuthButtons";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
        toast.error("Firebase sign out failed");
      });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent hidden sm:block">
                  EduLearn
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <ul className="flex space-x-1">
                <NavLinks user={user} />
              </ul>
            </div>

            <div className="flex items-center gap-2">
              {/* Right side items */}
              <div className="flex items-center space-x-3">
                {user ? (
                  <UserDropdown
                    user={user}
                    open={userDropdownOpen}
                    setOpen={setUserDropdownOpen}
                    onSignOut={handleSignOut}
                  />
                ) : (
                  <AuthButtons />
                )}
              </div>

              {/* Mobile menu toggle */}
              <div className="md:hidden mr-2">
                <button
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <FaTimes className="w-6 h-6" />
                  ) : (
                    <TfiMenuAlt className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu
          open={mobileMenuOpen}
          setOpen={setMobileMenuOpen}
          user={user}
          onSignOut={handleSignOut}
        />
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
