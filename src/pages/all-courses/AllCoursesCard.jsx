import { FaClock, FaSignal, FaEye } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { Link } from "react-router"

export default function AllCourseCard({ course }) {
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
      <div className="max-w-sm h-[420px] flex-grow bg-white dark:bg-[#1E293B] shadow-lg dark:shadow-gray-800 hover:shadow-2xl dark:hover:shadow-gray-700 transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group rounded-xl">
        {/* Top Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover object-center transform group-hover:scale-110 transition duration-500"
          />

          {/* Eye Icon on Hover */}
          <div className="absolute top-4 right-[-40px] group-hover:right-4 transition-all duration-500 bg-black bg-opacity-50 p-2 rounded-full z-20">
            <FaEye className="text-white text-lg" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1">
          {/* Title */}
          <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
            {title}
          </h2>

          {/* Author and Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={instructorPhoto}
                alt={`${instructorName}_avatar`}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <span className="text-gray-800 dark:text-gray-300 font-medium">
                {instructorName}
              </span>
            </div>

            <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-lg">
              <IoMdPricetag className="mr-1" />
              {price}
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex justify-between flex-wrap text-gray-500 dark:text-gray-400 text-sm">
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
}
