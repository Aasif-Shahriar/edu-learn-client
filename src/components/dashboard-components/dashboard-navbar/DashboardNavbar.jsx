// src/components/DashboardNavbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaChevronDown, FaHome, FaSignOutAlt, FaUser, FaCog } from "react-icons/fa";
import { Link } from "react-router";
import ThemeToggle from "../../theme-toggle/ThemeToggle";
import useAuth from "../../../hooks/useAuth";

export default function DashboardNavbar({ toggleSidebar }) {
  const { user, signOutUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [dropdownOpen]);

  return (
    <header className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 bg-frame-light-3 dark:bg-frame-dark-3 shadow-md transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      {/* Left side: Mobile menu button + title */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle sidebar"
        >
          <FaBars size={20} />
        </button>
        <h1 className="text-lg font-semibold text-frame-light-4 dark:text-frame-dark-4">
          Dashboard
        </h1>
      </div>
      
      {/* Right side: User info + dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 shadow-sm"
          />
          <span className="hidden sm:inline text-sm font-medium text-frame-light-4 dark:text-frame-dark-4">
            {user?.displayName || "User"}
          </span>
          <FaChevronDown 
            size={14} 
            className={`text-gray-600 dark:text-gray-300 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div 
            className="absolute right-0 mt-2 w-64 bg-frame-light-3 dark:bg-frame-dark-3 shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700 transform transition-all duration-300 origin-top-right"
          >
            {/* Profile card */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="User avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 shadow-sm"
              />
              <div>
                <p className="text-sm font-semibold text-frame-light-4 dark:text-frame-dark-4">
                  {user?.displayName || "User"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email || "user@example.com"}
                </p>
              </div>
            </div>
            
            {/* Menu items */}
            <div className="py-1">
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setDropdownOpen(false)}
              >
                <FaUser className="text-gray-500 dark:text-gray-400" />
                <span>Profile</span>
              </Link>
              
              <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <FaCog className="text-gray-500 dark:text-gray-400" />
                  <span>Settings</span>
                </div>
                <ThemeToggle />
              </div>
              
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setDropdownOpen(false)}
              >
                <FaHome className="text-gray-500 dark:text-gray-400" />
                <span>Home</span>
              </Link>
              
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border-t border-gray-200 dark:border-gray-700"
                onClick={() => {
                  signOutUser();
                  setDropdownOpen(false);
                }}
              >
                <FaSignOutAlt className="text-gray-500 dark:text-gray-400" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}