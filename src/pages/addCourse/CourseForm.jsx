// CourseFrom.jsx
import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const CourseFrom = () => {
  const { user } = useAuth();

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const inputData = Object.fromEntries(formData.entries());

    const newCourse = {
      ...inputData,
      instructorName: user?.displayName,
      instructorEmail: user?.email,
      instructorPhoto: user?.photoURL,
    };

    // Process learning objectives
    newCourse.learningObjectives = newCourse.learningObjectives
      .split(",")
      .map((item) => item.trim());

    // Process prerequisites
    newCourse.prerequisites = newCourse.prerequisites
      .split(",")
      .map((item) => item.trim());

    // Process benefits
    newCourse.benefits = newCourse.benefits
      .split(",")
      .map((item) => item.trim());

    // Process tags
    newCourse.tags = newCourse.tags.split(",").map((item) => item.trim());

    axios
      .post(`${import.meta.env.VITE_API_URL}/courses`, newCourse)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your course has been added successfully.😃",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleAddCourse} className="space-y-6">
      <div className="p-5 md:p-6 space-y-6 bg-white dark:bg-gray-800 border border-blue-500/20 rounded-xl shadow-md">
        {/* Section 1: Course Basics */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            1. Course Basics
          </h2>

          {/* Course Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Course Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Course Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Course Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Describe what students will learn in this course (min - 150 words)"
              required
            ></textarea>
          </div>

          {/* Course Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Course Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/course-image.jpg"
              required
            />
          </div>

          {/* Duration, Level, and Category in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Duration <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="duration"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 6 weeks"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Course Level
              </label>
              <select
                name="level"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option disabled value="">
                  Select level
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                name="category"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option disabled value="">
                  Select category
                </option>
                <option>Development</option>
                <option>Business</option>
                <option>Design</option>
                <option>Data Science</option>
                <option>Photography</option>
                <option>Marketing</option>
                <option>IT & Software</option>
                <option>Finance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Pricing and Others */}
        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            2. Pricing and Others
          </h2>

          {/* Price, Total Seats, and Tags in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="0.00"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Total Seats <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalSeats"
                min="1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tags <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="tags"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Data Science"
                required
              />
            </div>
          </div>

          {/* Learning Objectives */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Learning Objectives <span className="text-red-500">*</span>
            </label>
            <textarea
              name="learningObjectives"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="Tell what they will learn (separate by comma)."
              required
            ></textarea>
          </div>

          {/* Prerequisites */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Prerequisites <span className="text-red-500">*</span>
            </label>
            <textarea
              name="prerequisites"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
              placeholder="What they need to know before enrolling (separate by comma)."
              required
            ></textarea>
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Benefits From This Course <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="benefits"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Separate by comma (e.g., Lifetime access)"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Course +
          </button>
        </div>
      </div>
    </form>
  );
};

export default CourseFrom;
