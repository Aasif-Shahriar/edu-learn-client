// LeftCourseDetails.jsx
import React from "react";
import {
  FaCheckCircle,
  FaClock,
  FaUserGraduate,
  FaCalendarAlt,
  FaSignal,
} from "react-icons/fa";

const LeftCourseDetails = ({ course }) => {
  const {
    title,
    imageUrl,
    tags,
    instructorName,
    duration,
    description,
    learningObjectives,
    prerequisites,
    publishDate,
    level,
    enrolledCount,
  } = course;

  const date = new Date(publishDate);
  const publishedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Get level color
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    }
  };

  return (
    <div className="space-y-8">
      {/* Banner Image */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={`${title}_banner`}
          className="w-full h-64 md:h-80 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getLevelColor(
              level
            )}`}
          >
            {level}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Meta Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-2">
            <FaUserGraduate className="text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            {instructorName}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 mb-2">
            <FaClock className="text-green-600 dark:text-green-400" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            {duration}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-2">
            <FaUserGraduate className="text-purple-600 dark:text-purple-400" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            {enrolledCount} enrolled
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-2">
            <FaCalendarAlt className="text-yellow-600 dark:text-yellow-400" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
            {publishedDate}
          </span>
        </div>
      </div>

      {/* About Course */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <FaSignal className="text-sm" />
          </span>
          About This Course
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white ">
          Learning Objectives
        </h2>
        <ul className="space-y-3">
          {learningObjectives.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prerequisites */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Prerequisites
        </h2>
        <ul className="space-y-3">
          {prerequisites.map((data, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5">
                <FaSignal className="text-xs" />
              </span>
              <span className="text-gray-700 dark:text-gray-300">{data}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftCourseDetails;
