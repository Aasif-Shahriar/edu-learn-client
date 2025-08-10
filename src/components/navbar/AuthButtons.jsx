// src/components/navbar/AuthButtons.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const AuthButtons = React.memo(() => (
  <div className="flex items-center space-x-2">
    <Link to="/signUp">
      <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 font-medium rounded-lg transition-colors">
        Sign Up
      </button>
    </Link>
    <Link to="/signIn">
      <motion.button
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all duration-300"
      >
        Sign In
      </motion.button>
    </Link>
  </div>
));

export default AuthButtons;
