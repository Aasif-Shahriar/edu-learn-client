import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsClock, BsPerson } from "react-icons/bs";
import { MdUpdate } from "react-icons/md";

const LeftCourseDetails = ({ course }) => {
  const {
    title,
    imageUrl,
    tags,
    instructorName,
    duration,
    totalSeats,
    description,
    learningObjectives,
    prerequisites,
    publishDate,
    level
  } = course;
   const date = new Date(publishDate);
  const publishedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
        src={imageUrl}
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
        <span className="flex items-center">
          <MdUpdate className="mr-1" />
          Published: {publishedDate}
        </span>
        <span>
          Level: {level}
        </span>
      </div>

      {/* About Course */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold mb-2 ">About This Course</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
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
    </div>
  );
};

export default LeftCourseDetails;
