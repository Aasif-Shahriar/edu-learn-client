// src/components/DashboardSidebar.jsx
import React from "react";
import { Link, NavLink } from "react-router";
import { FaTimes, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlinePlus,
  HiOutlineClipboardList,
} from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";

export default function DashboardSidebar({ closeSidebar }) {
  const { signOutUser } = useAuth();
  const links = [
    { to: "/dashboard", label: "Dashboard Home", icon: <HiOutlineHome /> },
    {
      to: "/dashboard/manage-courses",
      label: "Manage Courses",
      icon: <HiOutlineBookOpen />,
    },
    {
      to: "/dashboard/add-course",
      label: "Add Course",
      icon: <HiOutlinePlus />,
    },
    {
      to: "/dashboard/my-enrollments",
      label: "My Enrollments",
      icon: <HiOutlineClipboardList />,
    },
  ];

  return (
    <aside
      className="flex flex-col w-64 h-full bg-white dark:bg-frame-dark-3 text-frame-light-4 dark:text-frame-dark-4 transition-colors duration-300 shadow-lg"
      aria-label="Dashboard navigation"
    >
      {/* Mobile close button */}
      {closeSidebar && (
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={closeSidebar}
            className="flex items-center justify-center p-2 text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close sidebar"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Sidebar header with logo */}
      <Link to="/">
        {" "}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
              <span className="text-xl font-bold text-white">E</span>
            </div>
            <h1 className="text-xl font-bold">EduLearn</h1>
          </div>
        </div>
      </Link>

      {/* Navigation links */}
      <nav
        className="flex-1 px-4 py-6 space-y-1 overflow-y-auto"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
              }`
            }
            onClick={closeSidebar}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            <span className="text-lg">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User profile section */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        {/* Logout button */}
        <button
          onClick={() => signOutUser()}
          className="flex items-center w-full cursor-pointer gap-3 px-4 py-3 mt-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700 text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaSignOutAlt className="text-lg font-semibold" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
