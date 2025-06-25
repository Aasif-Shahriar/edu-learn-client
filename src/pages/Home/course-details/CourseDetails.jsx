import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import EnrollPriceCard from "./EnrollPriceCard";
import LeftCourseDetails from "./LeftCourseDetails";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const navigate = useNavigate();


  return (
    <div className="bg-secondary min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* back button */}
        <Link
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary mb-5"
        >
          <FaArrowLeftLong></FaArrowLeftLong>Back To Courses
        </Link>
        {/* layout of details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Side (Content) */}
          <LeftCourseDetails course={course}></LeftCourseDetails>

          {/* Right Side (Enroll Card) */}
          <EnrollPriceCard course={course}></EnrollPriceCard>
        </div>
      </div>
      <title>Details - EduLearn</title>
    </div>
  );
};

export default CourseDetails;
