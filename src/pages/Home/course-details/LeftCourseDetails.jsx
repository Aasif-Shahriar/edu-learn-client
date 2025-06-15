import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsClock, BsPerson } from "react-icons/bs";

const LeftCourseDetails = ({ course }) => {
  const {
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
  } = course;

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
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
        <h2 className="text-xl font-semibold mb-2">Learning Objectives</h2>
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
            <div key={idx} className="bg-base-200 p-4 rounded-lg shadow-sm">
              <h3 className="font-bold mb-1">{data.title}</h3>
              <p className="text-gray-700 text-sm">{data.topics}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCourseDetails;
