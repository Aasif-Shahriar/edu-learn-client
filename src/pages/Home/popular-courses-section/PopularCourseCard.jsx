// PopularCourseCard.jsx
import React from "react";
import { FaClock, FaStar, FaSignal, FaBookmark, FaPlay } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router";

const PopularCourseCard = ({ course }) => {
  const {
    _id,
    imageUrl,
    title,
    instructorPhoto,
    instructorName,
    price,
    duration,
    level,
    enrolledCount,
  } = course;

  // Generate random rating
  const generateRandomRating = () => {
    return (Math.random() * 1.5 + 3.5).toFixed(1);
  };

  // Generate random reviews count
  const generateRandomReviews = () => {
    return Math.floor(Math.random() * 490) + 10;
  };

  const rating = generateRandomRating();
  const reviews = generateRandomReviews();

  // Determine level color
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <Link to={`/course-details/${_id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
        {/* Top Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover object-center transform hover:scale-110 transition duration-500"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
              Popular
            </span>
            <span
              className={`text-xs font-bold px-2 py-1 rounded-md z-10 ${getLevelColor(
                level
              )}`}
            >
              {level}
            </span>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3 transform scale-90 hover:scale-100 transition-transform duration-300">
              <FaPlay className="text-blue-600 text-xl ml-1" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Instructor */}
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-4">
              <img
                src={instructorPhoto}
                alt={`${instructorName}_avatar`}
                className="w-8 h-8 rounded-full object-cover mr-2 border-2 border-white shadow-sm"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {instructorName}
              </span>
            </div>
            <div className="flex items-center text-indigo-600 font-bold text-lg">
              <IoMdPricetag className="mr-1" />${price}
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <FaClock className="mr-2 text-blue-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <PiStudentBold className="mr-2 text-green-500" />
              <span>{enrolledCount}</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="flex items-center text-yellow-500 mr-2">
                <FaStar className="mr-1" />
                <span className="font-bold">{rating}</span>
              </div>
              <span className="text-gray-500">({reviews})</span>
            </div>
          </div>

          {/* Bookmark button */}
          <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
            <button
              className="flex items-center justify-center w-full py-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
              onClick={(e) => e.preventDefault()}
            >
              <FaBookmark className="mr-2" />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularCourseCard;
