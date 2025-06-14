import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";

const AddCourseFrom = () => {
  const {user}=useContext(AuthContext)
  const handleAddCourse = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form)
    const newCourse = Object.fromEntries(formData.entries())

    console.log(newCourse,user.displayName);
  };
  return (
    <div>
      <div className="max-w-md bg-white p-6 rounded-lg shadow-md border border-primary/20">
        <form onSubmit={handleAddCourse} className="space-y-4">
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
                Short Description <span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full resize-none"
              placeholder="Describe what students will learn in this course..."
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
          {/* duration */}
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

          <button type="submit" className="btn btn-primary w-full mt-4">
            Create Course +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseFrom;
