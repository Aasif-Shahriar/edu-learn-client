import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <Link to="/">
              <p className="text-2xl font-bold flex items-center gap-1 mb-4">
                <span className="bg-indigo-600 rounded-lg text-white p-2">
                  <FaGraduationCap />
                </span>
                <span className="text-gray-900 dark:text-white">EduLearn</span>
              </p>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering individuals to reach their full potential through
              high-quality online education and skill development.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {["Home", "Courses", "Instructors", "About Us", "Contact", "Careers"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Subscribe
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on new courses and
              promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 flex items-center justify-center rounded-r-md text-white transition-all">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2023 EduLearn. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
