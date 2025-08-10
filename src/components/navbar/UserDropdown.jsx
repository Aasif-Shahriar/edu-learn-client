// src/components/navbar/UserDropdown.jsx
import React, { useRef, useEffect } from "react";
import { Link } from "react-router";
import { RxExit } from "react-icons/rx";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const UserDropdown = React.memo(({ user, open, setOpen, onSignOut }) => {
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-transparent hover:border-blue-500 dark:hover:border-indigo-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-indigo-500"
        onClick={() => setOpen(!open)}
      >
        <img
          src={
            user?.photoURL ||
            "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          }
          alt={user?.displayName || "User"}
          className="w-full h-full rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-10 transition-all duration-300 transform ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-blue-500 dark:border-indigo-400">
              <img
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                alt={user?.displayName || "User"}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {user?.displayName || "User"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="py-1">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/profile"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Profile Settings
          </Link>
        </div>
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-center">
          <ThemeToggle />
        </div>
        <div className="py-1 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onSignOut}
            className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <RxExit size={18} /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
});

export default UserDropdown;
