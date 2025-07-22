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
    <div className="bg-secondary min-h-screen py-10 px-4">
      <title>Course Details - EduLearn</title>
      <div className="max-w-7xl mx-auto">
        {/* back button */}
        <Link
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary mb-5"
        >
          <FaArrowLeftLong /> Back To Courses
        </Link>

        {/* layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left */}
          <LeftCourseDetails course={course} />

          {/* Right */}
          <EnrollPriceCard course={course} onEnrollmentChange={refetchCourse} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
