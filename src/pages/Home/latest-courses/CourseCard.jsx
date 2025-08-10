import { FaClock, FaStar, FaBookmark, FaPlay } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { Link } from "react-router";

const generateRandomRating = () => (Math.random() * 1.5 + 3.5).toFixed(1);
const generateRandomReviews = () => Math.floor(Math.random() * 490) + 10;

export default function CourseCard({ course }) {
  const {
    _id,
    title,
    imageUrl,
    instructorName,
    instructorPhoto,
    price,
    duration,
    level,
  } = course;

  const rating = generateRandomRating();
  const reviews = generateRandomReviews();

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
      <div className="h-96 bg-white dark:bg-frame-dark-3 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
        {/* Image Section */}
        <div className="relative h-1/2 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover object-center transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2 z-10">
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
              New
            </span>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-md shadow-sm ${getLevelColor(
                level
              )}`}
            >
              {level}
            </span>
          </div>
          Play Icon
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
              <FaPlay className="text-blue-600 text-lg ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-5">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          {/* Instructor & price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-3">
              <img
                src={instructorPhoto}
                alt={`${instructorName}_avatar`}
                className="w-7 h-7 rounded-full object-cover mr-2 border-2 border-white dark:border-gray-700 shadow-sm"
              />
              <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                {instructorName}
              </span>
            </div>
            <div className="flex items-center text-indigo-600 dark:text-blue-400 font-bold text-base">
              <IoMdPricetag className="mr-1" />${price}
            </div>
          </div>
          {/*  Duration, Rating & Bookmark*/}
          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center text-xs">
              <div className="flex items-center text-yellow-500 mr-2">
                <FaStar className="mr-1" />
                <span className="font-bold">{rating}</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400">
                ({reviews})
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <FaClock className="mr-1" />
              {duration}
            </div>
            <button
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              onClick={(e) => e.preventDefault()}
            >
              <FaBookmark />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
