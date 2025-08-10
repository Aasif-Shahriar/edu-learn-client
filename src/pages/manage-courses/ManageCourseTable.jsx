// ManageCourseTable.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit, MdSearch, MdFilterList } from "react-icons/md";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";
import NoCoursesAddedCard from "./NoAddedCoursesCard";

const ManageCourseTable = ({ courseAddedByPromise }) => {
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  console.log(myCourses);

  useEffect(() => {
    courseAddedByPromise.then((data) => {
      setMyCourses(data);
      setFilteredCourses(data);
      setLoading(false);
    });
  }, [courseAddedByPromise]);

  // Filter courses based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCourses(myCourses);
    } else {
      const filtered = myCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.level.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm, myCourses]);

  if (loading) return <Loading />;

  // Delete operation with enhanced confirmation dialog
  const handleDeleteCourse = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${title}". This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "dark:bg-gray-800",
        title: "dark:text-white",
        content: "dark:text-gray-300",
        confirmButton: "dark:bg-red-600 dark:hover:bg-red-700",
        cancelButton: "dark:bg-blue-600 dark:hover:bg-blue-700",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/course/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingCourses = myCourses.filter(
                (data) => data._id !== id
              );
              setMyCourses(remainingCourses);
              setFilteredCourses(remainingCourses);
              Swal.fire({
                title: "Deleted!",
                text: `"${title}" has been deleted.`,
                icon: "success",
                customClass: {
                  popup: "dark:bg-gray-800",
                  title: "dark:text-white",
                  content: "dark:text-gray-300",
                  confirmButton: "dark:bg-blue-600 dark:hover:bg-blue-700",
                },
              });
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the course. Please try again.",
              icon: "error",
              customClass: {
                popup: "dark:bg-gray-800",
                title: "dark:text-white",
                content: "dark:text-gray-300",
                confirmButton: "dark:bg-blue-600 dark:hover:bg-blue-700",
              },
            });
          });
      }
    });
  };

  return (
    <div className="w-full">
      {filteredCourses.length === 0 ? (
        <NoCoursesAddedCard hasSearch={searchTerm !== ""} />
      ) : (
        <>
          {/* Header with search and add button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Your Courses ({filteredCourses.length})
              </h2>
              {searchTerm && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (Filtered)
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <Link to="/dashboard/add-course" className="w-full sm:w-auto">
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <span>+ Add New Course</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop/tablet table view */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course Title
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Enrollments
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Created Date
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredCourses.map((course) => {
                  const date = new Date(course.publishDate);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                  return (
                    <tr
                      key={course._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {course.title}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate">
                          {course.description}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {course.enrollmentsCount} enrolled
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {course.duration}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {course.level}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {formattedDate}
                      </td>
                      <td className="py-4 px-4 w-24">
                        {" "}
                        {/* Fixed width column */}
                        <div className="flex items-center justify-center space-x-3">
                          <Link to={`/update-course/${course._id}`}>
                            <button
                              data-tooltip-id="edit"
                              data-tooltip-content="Edit Course"
                              className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full transition-colors duration-200"
                              aria-label="Edit course"
                            >
                              <MdEdit size={18} />
                            </button>
                          </Link>
                          <button
                            onClick={() =>
                              handleDeleteCourse(course._id, course.title)
                            }
                            data-tooltip-id="delete"
                            data-tooltip-content="Delete Course"
                            className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors duration-200"
                            aria-label="Delete course"
                          >
                            <MdDelete size={18} />
                          </button>
                          <Tooltip id="edit" place="top" />
                          <Tooltip id="delete" place="top" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile-friendly card view */}
          <div className="sm:hidden divide-y divide-gray-200 dark:divide-gray-700">
            {filteredCourses.map((course) => {
              const date = new Date(course.publishDate);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div key={course._id} className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {course.enrollmentsCount} enrolled
                    </div>
                  </div>

                  <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p className="line-clamp-2">{course.description}</p>
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Created:</span>
                      <span>{formattedDate}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-4 flex space-x-3">
                    <Link
                      to={`/update-course/${course._id}`}
                      className="flex-1"
                    >
                      <button className="w-full flex items-center justify-center gap-1 text-blue-600 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                        <MdEdit size={18} />
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() =>
                        handleDeleteCourse(course._id, course.title)
                      }
                      className="flex-1 flex items-center justify-center gap-1 text-red-600 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <MdDelete size={18} />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ManageCourseTable;
