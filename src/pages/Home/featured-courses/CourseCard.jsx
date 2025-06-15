import { FaStar, FaClock, FaSignal } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { Link } from "react-router";

export default function CourseCard({ course }) {
  const {
    _id,
    title,
    about,
    bannerImage,
    instructorName,
    price,
    duration,
    level,
    publishDate,
  } = course;
  return (
    <div className="max-w-sm h-[550px] bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
      {/* Top Image Section */}
      <div className="relative h-48">
        <img
          src={bannerImage}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
          New
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1">
        {/* Title */}
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        {about.map((des, idx) => (
          <p key={idx} className="text-gray-600 text-sm mb-4">
            {des}
          </p>
        ))}

        {/* Author and price*/}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {" "}
            <img
              src="https://i.pravatar.cc/32?img=10"
              alt={`${instructorName}_avatar`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800 font-medium">{instructorName}</span>
          </div>
          {/* Price */}
          <div className="mt-4 text-right text-indigo-600 font-bold text-lg">
            <IoMdPricetag className="inline mr-1" />
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
            Published {publishDate}
          </span>
        </div>

        {/* see details */}
        <Link to={`/course-details/${_id}`}>
          {" "}
          <button className="btn btn-primary mt-3">Course Details</button>
        </Link>
      </div>
    </div>
  );
}
