import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";

const UpdateCourseForm = () => {
  const data = useLoaderData();
  const {
    _id,
    title,
    description,
    imageUrl,
    duration,
    level,
    price,
    learningObjectives,
    prerequisites,
    benefits,
    totalSeats,
    tags,
    category,
  } = data;
  const handleUpdateCourse = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateCourse = Object.fromEntries(formData.entries());

    //process of learning objectives
    updateCourse.learningObjectives = updateCourse.learningObjectives
      .split(",")
      .map((item) => item.trim());
    //process of prerequisites
    updateCourse.prerequisites = updateCourse.prerequisites
      .split(",")
      .map((item) => item.trim());
    //process of benefits
    updateCourse.benefits = updateCourse.benefits
      .split(",")
      .map((item) => item.trim());
    //process of tags
    updateCourse.tags = updateCourse.tags.split(",").map((item) => item.trim());

    axios
      .put(`${import.meta.env.VITE_API_URL}/course/${_id}`, updateCourse)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: `Your "${title}" course has been updated`,
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleUpdateCourse}>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-xl max-w-6xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">
          Update Your Course
        </h2>

        <div className="bg-white rounded-xl p-6 shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Title */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Course Title <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              className="input input-bordered w-full"
              defaultValue={title}
              required
            />
          </div>

          {/* Course Image */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Course Field Image URL <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
              defaultValue={imageUrl}
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Course Description <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full resize-none"
              placeholder="Describe what students will learn in this course (min - 150 words)"
              defaultValue={description}
              required
            ></textarea>
          </div>

          {/* Duration */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Duration <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="duration"
              placeholder="e.g., 6 weeks, 20 hours"
              className="input input-bordered w-full"
              defaultValue={duration}
              required
            />
          </div>

          {/* Course Level */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Course Level
              </span>
            </label>
            <select
              name="level"
              className="select select-bordered w-full"
              defaultValue={level}
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

          {/* Price */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Price <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="e.g., $25, $99"
              className="input input-bordered w-full"
              defaultValue={price}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Category
              </span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue={category}
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
            </select>
          </div>

          {/* Learning Objectives */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Learning Objectives <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              name="learningObjectives"
              className="textarea textarea-bordered w-full resize-none"
              placeholder="Tell what they will learn (separate by comma)."
              defaultValue={learningObjectives}
              required
            ></textarea>
          </div>

          {/* Prerequisites */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Prerequisites <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              name="prerequisites"
              className="textarea textarea-bordered w-full resize-none"
              placeholder="What they need to know before enrolling (separate by comma)."
              defaultValue={prerequisites}
              required
            ></textarea>
          </div>

          {/* Benefits */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Benefits From This Course{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="benefits"
              placeholder="Separate by comma (e.g., Lifetime access)"
              className="input input-bordered w-full"
              defaultValue={benefits}
              required
            />
          </div>

          {/* Total Seats */}
          <div>
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Total Seats <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="number"
              name="totalSeats"
              placeholder="Enter total number of seats"
              className="input input-bordered w-full"
              defaultValue={totalSeats}
              required
            />
          </div>

          {/* Tags */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text text-blue-700 font-medium">
                Tags <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="tags"
              placeholder="e.g., Data Science, Intermediate, Certificate"
              className="input input-bordered w-full"
              defaultValue={tags}
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="">
          <button type="submit" className="btn btn-primary w-full">
            Update Course
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateCourseForm;
