// RightSide.jsx
import React from "react";
import { FaCircleExclamation, FaLightbulb } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const RightSide = () => {
  return (
    <div className="space-y-5">
      {/* Auto-filled Information Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-5 shadow-sm">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              <FaCircleExclamation className="text-blue-500 dark:text-blue-400 text-lg" />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-300">
              Auto-filled Information
            </h2>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Your name and email will be automatically saved with this course.
              The creation timestamp will also be recorded.
            </p>
          </div>
        </div>
      </div>

      {/* Tips for Success Card */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm">
        <div className="flex gap-3 mb-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <FaLightbulb className="text-yellow-500 dark:text-yellow-400 text-lg" />
            </div>
          </div>
          <h2 className="font-bold text-lg text-gray-800 dark:text-white">
            Tips for Success
          </h2>
        </div>

        <ul className="space-y-3">
          {[
            "Use clear, descriptive titles",
            "Write compelling descriptions",
            "Use high-quality images",
            "Be specific about duration",
            "Set competitive pricing",
            "Include relevant tags",
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <IoMdCheckmark className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Resources Card */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm">
        <h2 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">
          Resources
        </h2>
        <div className="space-y-3">
          <a
            href="#"
            className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span className="font-medium text-gray-800 dark:text-white">
              Course Creation Guidelines
            </span>
          </a>
          <a
            href="#"
            className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span className="font-medium text-gray-800 dark:text-white">
              Best Practices for Instructors
            </span>
          </a>
          <a
            href="#"
            className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span className="font-medium text-gray-800 dark:text-white">
              Marketing Your Course
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
