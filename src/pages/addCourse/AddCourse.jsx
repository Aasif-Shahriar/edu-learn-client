import React from "react";

import RightSide from "./RightSide";
import AddCourseFrom from "./AddCourseFrom";

const AddCourse = () => {
  return (
    <div className="bg-secondary flex justify-center items-center py-5 md:py-10">
      <div className="p-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-4">Add New Course</h1>
        <p className="mb-6 text-gray-600">
          Create a new course to share your knowledge with students worldwide.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* form */}
          <AddCourseFrom></AddCourseFrom>
          {/* Right-side panels */}
          <RightSide></RightSide>
        </section>
      </div>
      <title>Add Course - EduLearn</title>
    </div>
  );
};

export default AddCourse;
