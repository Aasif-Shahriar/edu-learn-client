import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { Link } from "react-router";

const NoCoursesAddedCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 mt-6 text-center max-w-md mx-auto">
      <MdLibraryBooks size={50} className="text-gray-400 mb-3" />
      <h2 className="text-xl font-semibold text-gray-700 mb-1">
        No Courses Added Yet
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        You haven’t added any courses. Create one and share it with learners!
      </p>
      <Link to="/add-course">
        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
          + Add New Course
        </button>
      </Link>
    </div>
  );
};

export default NoCoursesAddedCard;
