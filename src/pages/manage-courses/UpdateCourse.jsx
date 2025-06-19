import React from "react";
import UpdateCourseForm from "./UpdateCourseForm";

const UpdateCourse = () => {
  return (
    <div className="bg-secondary py-5 md:py-10">
      <div className="px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Add New Course</h1>
        <p className="mb-6 text-gray-600">
          Create a new course to share your knowledge with students worldwide.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* form */}
          <div className="lg:col-span-2">
            {" "}
            <UpdateCourseForm></UpdateCourseForm>
          </div>
        
        </section>
      </div>
      <title>Add Course - EduLearn</title>
    </div>
  );
};

export default UpdateCourse;
