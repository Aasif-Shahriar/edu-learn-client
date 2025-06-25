import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const CourseFromAccordion = () => {
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

    //process of learning objectives
    newCourse.learningObjectives = newCourse.learningObjectives
      .split(",")
      .map((item) => item.trim());
    //process of prerequisites
    newCourse.prerequisites = newCourse.prerequisites
      .split(",")
      .map((item) => item.trim());
    //process of benefits
    newCourse.benefits = newCourse.benefits
      .split(",")
      .map((item) => item.trim());
    //process of tags
    newCourse.tags = newCourse.tags.split(",").map((item) => item.trim());
    console.log(newCourse);

    axios
      .post("https://edu-learn-server-jwt.vercel.app/courses", newCourse)
      .then((res) => {
        console.log(res.data);
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
    <form onSubmit={handleAddCourse}>
      <div className="p-6 space-y-6 bg-blue-50 border border-blue-500/20 rounded-xl shadow-md">
        {/* Section 1: Course Basics */}
        <div className="collapse collapse-arrow bg-base-100">
          <input type="checkbox" />
          <div className="collapse-title font-bold text-primary text-lg">
            1. Course Basics
          </div>
          <div className="collapse-content space-y-4">
            {/* course title */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Course Title <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter course title"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* course description */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Course Description <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full resize-none"
                placeholder="Describe what students will learn in this course (min - 150 words)"
                required
              ></textarea>
            </div>
            {/* course image */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Course Image URL <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="url"
                name="imageUrl"
                className="input input-bordered w-full"
                placeholder="https://example.com/course-image.jpg"
                required
              />
            </div>
            {/* duration and level */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-semibold">
                    Duration <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="duration"
                  className="input input-bordered w-full"
                  placeholder="e.g., 6 weeks, 20 hours"
                  required
                />
              </div>
              {/* course level */}
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Course Level</span>
                </label>
                <select
                  name="level"
                  className="select select-bordered w-full"
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
            </div>
          </div>
        </div>

        {/* Section 2: pricing and others */}
        <div className="collapse collapse-arrow bg-base-100">
          <input type="checkbox" />
          <div className="collapse-title font-bold text-primary text-lg">
            2. Pricing and Others
          </div>
          <div className="collapse-content space-y-4">
            {/* price and category */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-semibold">
                    Price <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  className="input input-bordered w-full"
                  placeholder="Course price"
                  required
                />
              </div>
              {/* course level */}
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled value="">
                    Select level
                  </option>
                  <option>Development</option>
                  <option>Business</option>
                  <option>Design</option>
                  <option>Data Science</option>
                  <option>Photography</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>

            {/* learning objectives */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Learning Objectives <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                name="learningObjectives"
                className="textarea textarea-bordered w-full resize-none"
                placeholder="Tell what they will learn (seperate by comma)."
                required
              ></textarea>
            </div>
            {/* prerequisites */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Prerequisites <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                name="prerequisites"
                className="textarea textarea-bordered w-full resize-none"
                placeholder="What they need to know before enroll in course (seperate by comma)."
                required
              ></textarea>
            </div>
            {/* benefits */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Benefits From This Course{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="benefits"
                className="input input-bordered w-full"
                placeholder="Seperate by comme (e.g., Lifetime access, Access to project datasets)."
                required
              />
            </div>
            {/* Total seats and Tags */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-semibold">
                    Total Seats <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  name="totalSeats"
                  className="input input-bordered w-full"
                  placeholder="Enter total number of seats"
                  required
                />
              </div>
              {/* Tags */}
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-semibold">
                    Tags <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="tags"
                  className="input input-bordered w-full"
                  placeholder="e.g., Data Science, Intermediate, Certificate"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="">
          <button type="submit" className="btn btn-primary w-full mt-4">
            Create Course +
          </button>
        </div>
      </div>
    </form>
  );
};

export default CourseFromAccordion;
