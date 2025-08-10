// AddCourse.jsx
import React from "react";
import RightSide from "./RightSide";
import CourseFrom from "./CourseForm";

const AddCourse = () => {
  return (
    <div className="bg-secondary py-5 md:py-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Add New Course
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Create a new course to share your knowledge with students worldwide.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <CourseFrom />
          </div>

          {/* Right-side panels */}
          <div className="lg:col-span-1">
            <RightSide />
          </div>
        </section>
      </div>
      <title>Add Course - EduLearn</title>
    </div>
  );
};

export default AddCourse;
