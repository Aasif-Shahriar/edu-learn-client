import React from "react";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";
import { BsClock, BsPerson } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const CourseDetails = () => {
  const {
    _id,
    title,
    bannerImage,
    tags,
    instructorName,
    duration,
    totalSeats,
    about,
    learningObjectives,
    prerequisites,
    whatYouWillLearn,
    benefits,
    price
  } = useLoaderData();

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
          <div className="lg:col-span-2 space-y-6">
            {/* Banner Image */}
            <img
              src={bannerImage}
              alt={`${title}_banner`}
              className="rounded-xl shadow w-full h-[300px] object-cover object-center"
            />

            {/* Tags & Title */}
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-primary/10 px-3 py-2 rounded-full"
                  style={{ color: getRandomColor() }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl font-bold mt-2">{title}</h1>

            {/* Author & Meta Info */}
            <div className="text-gray-600 flex flex-wrap items-center gap-4 text-sm">
              <span>👩‍🏫{instructorName}</span>
              <span className="flex items-center gap-1">
                <BsClock /> {duration}
              </span>
              <span className="flex items-center gap-1">
                <BsPerson /> {totalSeats} enrolled
              </span>
            </div>

            {/* About Course */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold mb-2 ">About This Course</h2>
              {about.map((data, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {data}
                </p>
              ))}
            </div>

            {/* Learning Objectives */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Learning Objectives
              </h2>
              <ul className="space-y-2">
                {learningObjectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
              <ul className="list-disc list-inside text-gray-700">
                {prerequisites.map((data, idx) => (
                  <li key={idx}>{data}</li>
                ))}
              </ul>
            </div>

            {/* What You'll Learn */}
            <div>
              <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {whatYouWillLearn.map((data, idx) => (
                  <div
                    key={idx}
                    className="bg-base-200 p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="font-bold mb-1">{data.title}</h3>
                    <p className="text-gray-700 text-sm">{data.topics}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side (Enroll Card) */}
          <div className="bg-white  rounded-xl shadow-lg p-6 border border-gray-100 self-start">
            <div className="text-3xl text-center font-semibold text-gray-800">{price}</div>
            <div className="text-sm text-center mt-2 text-gray-500">Full Access</div>

            <div className="mt-6">
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                <span>Available Seats</span>
                <span className="text-green-600 font-semibold">3 left</span>
              </div>
              <progress
                className="progress progress-success w-full h-3"
                value="7"
                max="10"
              ></progress>
              <div className="text-xs text-gray-500 mt-1">
                7 out of 10 seats filled
              </div>
            </div>

            <Link to={`course-enroll/${_id}`}>
              {" "}
              <button className="btn btn-primary w-full mt-6">
                Enroll Now
              </button>
            </Link>

            <ul className="text-sm text-gray-700 mt-6 space-y-2">
              {benefits.map((data, idx) => (
                <li key={idx} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                 {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
