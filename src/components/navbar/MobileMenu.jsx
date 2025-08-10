// src/components/navbar/MobileMenu.jsx
import React, { useRef, useEffect } from "react";
import { FaTimes, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router";
import NavLinks from "./NavLinks";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const MobileMenu = React.memo(({ open, setOpen, user, onSignOut }) => {
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  return (
    <div
      className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out transform ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="fixed inset-0 bg-opacity-50"
        onClick={() => setOpen(false)}
      ></div>
      <div
        ref={mobileMenuRef}
        className="relative bg-white dark:bg-gray-900 w-64 h-full shadow-xl"
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <FaGraduationCap className="text-white text-sm" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              EduLearn
            </span>
          </div>
          {/* <button
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen(false)}
          >
            <FaTimes className="w-5 h-5" />
          </button> */}
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <NavLinks user={user} />
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              <ThemeToggle />
            </div>
            {user && (
              <button
                onClick={onSignOut}
                className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default MobileMenu;
