// CourseDetails.jsx
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import EnrollPriceCard from "./EnrollPriceCard";
import LeftCourseDetails from "./LeftCourseDetails";
import axios from "axios";

const CourseDetails = () => {
  const initialCourse = useLoaderData();
  const navigate = useNavigate();
  const [course, setCourse] = useState(initialCourse);

  const refetchCourse = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/courses/${initialCourse._id}`
      );
      setCourse(res.data);
    } catch (err) {
      console.error("Failed to refetch course", err);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-4">
      <title>Course Details - EduLearn</title>
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors duration-200"
        >
          <FaArrowLeftLong className="text-lg" />
          <span className="font-medium">Back To Courses</span>
        </Link>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2">
            <LeftCourseDetails course={course} />
          </div>

          {/* Right */}
          <div className="lg:col-span-1">
            <EnrollPriceCard
              course={course}
              onEnrollmentChange={refetchCourse}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
