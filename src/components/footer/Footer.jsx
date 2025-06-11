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
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="container mx-auto px-4">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <Link to="/">
            <p className="text-2xl font-bold flex items-center gap-1 mb-4">
              <span className="bg-[#4F46E5] rounded-lg text-white p-2">
                <FaGraduationCap />
              </span>
              <span>EduLearn</span>
            </p>
          </Link>
            <p>
              Empowering individuals to reach their full potential through
              high-quality online education and skill development.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">
              Subscribe to our newsletter to receive updates on new courses and
              promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-indigo-600 px-4 flex items-center justify-center rounded-r-md">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className=" flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023 EduLearn. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
