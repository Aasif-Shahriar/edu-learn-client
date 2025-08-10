// NoCoursesAddedCard.jsx
import React from "react";
import { MdLibraryBooks, MdAdd } from "react-icons/md";
import { Link } from "react-router";

const NoCoursesAddedCard = ({ hasSearch = false }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 my-12 text-center max-w-md mx-auto">
      <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
        <MdLibraryBooks
          size={48}
          className="text-blue-500 dark:text-blue-400"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
        {hasSearch ? "No Courses Found" : "No Courses Added Yet"}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {hasSearch
          ? "Try adjusting your search to find what you're looking for."
          : "You haven't added any courses yet. Create one and share your knowledge with learners!"}
      </p>

      {!hasSearch && (
        <Link to="/dashboard/add-course">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md">
            <MdAdd size={20} />
            <span>Add Your First Course</span>
          </button>
        </Link>
      )}

      {hasSearch && (
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-300"
        >
          Clear Search
        </button>
      )}
    </div>
  );
};

export default NoCoursesAddedCard;
