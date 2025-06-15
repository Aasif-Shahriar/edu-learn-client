import React from "react";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";
import { BsClock, BsPerson } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const CourseDetails = () => {
  const {_id} = useLoaderData();

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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Course Banner"
              className="rounded-xl shadow w-full h-[300px] object-cover object-center"
            />

            {/* Tags & Title */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="badge badge-primary">Web Development</div>
              <div className="badge badge-success">Beginner</div>
              <div className="badge badge-warning flex items-center gap-1">
                <FaCertificate />
                Certificate
              </div>
            </div>

            <h1 className="text-3xl font-bold mt-2">
              Complete Web Development Bootcamp 2024
            </h1>

            {/* Author & Meta Info */}
            <div className="text-gray-600 flex flex-wrap items-center gap-4 text-sm">
              <span>👩‍🏫 Dr. Sarah Johnson</span>
              <span className="flex items-center gap-1">
                <BsClock /> 12 weeks
              </span>
              <span className="flex items-center gap-1">
                <BsPerson /> 7 enrolled
              </span>
            </div>

            {/* About Course */}
            <div>
              <h2 className="text-xl font-semibold mb-2">About This Course</h2>
              <p className="text-gray-700 leading-relaxed">
                Master the fundamentals of web development with our
                comprehensive bootcamp. This course covers everything from HTML
                and CSS basics to advanced JavaScript frameworks, giving you the
                skills needed to build modern, responsive websites.
              </p>
              <p className="text-gray-700 mt-2">
                Whether you’re a complete beginner or looking to enhance your
                existing skills, this course provides hands-on experience with
                real-world projects and industry best practices.
              </p>
            </div>

            {/* Learning Objectives */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Learning Objectives
              </h2>
              <ul className="space-y-2">
                {[
                  "Build responsive websites using HTML5, CSS3, and JavaScript",
                  "Master React.js for building dynamic user interfaces",
                  "Understand backend development with Node.js and Express",
                  "Deploy applications to cloud platforms",
                ].map((item, i) => (
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
                <li>Basic computer literacy</li>
                <li>No prior programming experience required</li>
                <li>Enthusiasm to learn and practice</li>
              </ul>
            </div>

            {/* What You'll Learn */}
            <div>
              <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-base-200 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-1">Frontend Development</h3>
                  <p className="text-gray-700 text-sm">
                    HTML5, CSS3, JavaScript, React.js, Responsive Design
                  </p>
                </div>
                <div className="bg-base-200 p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-1">Backend Development</h3>
                  <p className="text-gray-700 text-sm">
                    Node.js, Express.js, APIs, Database Integration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Enroll Card) */}
          <div className="bg-white  rounded-xl shadow-lg p-6 border border-gray-100 self-start">
            <div className="text-3xl font-semibold text-gray-800">Free</div>
            <div className="text-sm text-gray-500">Full Access</div>

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

           <Link to={`course-enroll/${_id}`}> <button className="btn btn-primary w-full mt-6">Enroll Now</button></Link>

            <ul className="text-sm text-gray-700 mt-6 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Lifetime access
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Certificate of completion
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                30-day money-back guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
