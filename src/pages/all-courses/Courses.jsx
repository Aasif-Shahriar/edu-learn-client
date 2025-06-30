import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";
import AllCourseCard from "./AllCoursesCard";

const Courses = () => {
  const courses = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortLevel, setSortLevel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Unique categories
  const categories = ["All",...new Set(courses.map((course) => course.category))];

  // Filter + Search + Sort
  const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((course) =>
      selectedCategory === "All" ? true : course.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortLevel === "Beginner") return a.level === "Beginner" ? -1 : 1;
      if (sortLevel === "Intermediate")
        return a.level === "Intermediate" ? -1 : 1;
      if (sortLevel === "Advanced") return a.level === "Advanced" ? -1 : 1;
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* Title + Subtitle */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Explore All Courses</h1>
        <p className="text-gray-500">
          Learn anything from anywhere. Browse now.
        </p>
      </div>

      {/* Filter/Search/Sort Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-base-100 p-4 rounded shadow-md">
        <div className="text-lg font-semibold">
          Total Courses:{" "}
          <span className="text-primary">{filteredCourses.length}</span>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-1/2">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaSearch />
            <input
              type="text"
              className="grow"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </label>
        </div>

        {/* Category + Sort */}
        <div className="flex gap-2">
          <select
            className="select select-bordered"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            className="select select-bordered"
            value={sortLevel}
            onChange={(e) => setSortLevel(e.target.value)}
          >
            <option value="">Sort by Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCourses.map((course) => (
          <AllCourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="join">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`join-item btn btn-sm ${
                  currentPage === i + 1 ? "btn-primary" : "btn-outline"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
