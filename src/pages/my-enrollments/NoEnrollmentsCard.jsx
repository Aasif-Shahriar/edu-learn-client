import React from "react";
import { MdSentimentDissatisfied } from "react-icons/md";
import { Link } from "react-router";

const NoEnrollmentsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 mt-6 text-center mx-auto">
      <MdSentimentDissatisfied size={50} className="text-gray-400 mb-3" />
      <h2 className="text-xl font-semibold text-gray-700 mb-1">
        No Enrollments Yet
      </h2>
      <p className="text-gray-500 text-sm">
        You haven’t enrolled in any courses. Explore our catalog and get
        started!
      </p>
      <Link to="/courses">
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition cursor-pointer">
          Browse Courses
        </button>
      </Link>
    </div>
  );
};

export default NoEnrollmentsCard;
