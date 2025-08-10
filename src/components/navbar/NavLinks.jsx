// src/components/navbar/NavLinks.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaChevronDown } from "react-icons/fa";

const NavLinks = React.memo(({ user }) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  // Handle scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setServicesDropdownOpen(false);
  };

  return (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses" className={linkClass}>
          Courses
        </NavLink>
      </li>

      {/* Services Dropdown */}
      <li className="relative">
        <button
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
          aria-expanded={servicesDropdownOpen}
          aria-haspopup="true"
        >
          Services
          <FaChevronDown
            className={`transition-transform duration-300 ${
              servicesDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {servicesDropdownOpen && (
          <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
            <Link
              to="/#why-choose-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("why-choose-us");
              }}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Why Choose Us
            </Link>
            <Link
              to="/#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Features
            </Link>
            <Link
              to="/#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("testimonials");
              }}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Testimonials
            </Link>
            <Link
              to="/#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("pricing");
              }}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Pricing
            </Link>
          </div>
        )}
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </li>
    </>
  );
});

export default NavLinks;
