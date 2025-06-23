import React from "react";
import { FaClock, FaSignal } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { Link } from "react-router";

const AllCoursesCard = ({ course }) => {
  const {
    _id,
    title,
    imageUrl,
    instructorName,
    instructorPhoto,
    price,
    duration,
    level,
    publishDate,
  } = course;

  const date = new Date(publishDate);
  const publishedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Link to={`/course-details/${_id}`}>
      <div className="max-w-sm h-[420px] flex-grow bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
        {/* Top Image Section */}
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1">
          {/* Title */}
          <h2 className="text-xl font-bold mb-1">{title}</h2>

          {/* Author and price*/}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {" "}
              <img
                src={instructorPhoto}
                alt={`${instructorName}_avatar`}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <span className="text-gray-800 font-medium">
                {instructorName}
              </span>
            </div>
            {/* Price */}
            <div className="flex items-center mt-4 text-right text-indigo-600 font-bold text-lg">
              <IoMdPricetag />
              {price}
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex justify-between flex-wrap text-gray-500 text-sm">
            <span className="flex items-center">
              <FaClock className="mr-1" />
              {duration}
            </span>
            <span className="flex items-center">
              <FaSignal className="mr-1" />
              {level}
            </span>
            <span className="flex items-center">
              <MdUpdate className="mr-1" />
              {publishedDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCoursesCard;
