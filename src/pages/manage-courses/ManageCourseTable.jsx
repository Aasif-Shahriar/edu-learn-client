import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";
import NoCoursesAddedCard from "./NoAddedCoursesCard";

const ManageCourseTable = ({ courseAddedByPromise }) => {
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    courseAddedByPromise.then((data) => {
      setMyCourses(data);
      setLoading(false);
    });
  }, [courseAddedByPromise]);

  if (loading) return <Loading></Loading>;

  //delete operation
  const handleDeleteCourse = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://edu-learn-server-jwt.vercel.app/courses/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              const remaininCourses = myCourses.filter(
                (data) => data._id !== id
              );
              setMyCourses(remaininCourses);

              Swal.fire({
                title: "Deleted!",
                text: `Your ${title} course has been deleted.`,
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="w-full">
      {myCourses.length === 0 ? (
        <NoCoursesAddedCard />
      ) : (
        <>
          <div className="min-w-full mb-1 bg-white border border-gray-200 text-sm sm:text-base p-3 flex items-center justify-between">
            <h2 className="text-xl font-medium">
              Your Courses ({myCourses.length})
            </h2>
            <div>
              <Link to="/add-course">
                <button className="btn btn-primary">+ Add New Course</button>
              </Link>
            </div>
          </div>

          {/* Desktop/tablet table view */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Course Title
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Description
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Enrolled Counts
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Duration
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Created Date
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myCourses.map((course) => {
                  const date = new Date(course.publishDate);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                  return (
                    <tr
                      key={course._id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">
                          {course.title}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700 truncate max-w-[200px]">
                        {course.description}
                      </td>
                      <td className="py-4 px-4">
                        {course.enrollmentsCount}{" "}
                        {course.enrollmentsCount == 1
                          ? "person has"
                          : "people have"}{" "}
                        enrolled
                      </td>
                      <td className="py-4 px-4 text-primary">
                        {course.duration}
                      </td>
                      <td className="py-4 px-4 font-medium text-green-600 text-sm">
                        {formattedDate}
                      </td>
                      {/* action */}
                      <td className="py-4 px-4 flex items-center gap-4">
                        <Link to={`/update-course/${course._id}`}>
                          {" "}
                          <button
                            data-tooltip-id="edit"
                            data-tooltip-content="Edit Course"
                            className="text-primary hover:bg-primary/10 px-1 py-2 cursor-pointer font-medium transition-all duration-200 rounded-sm"
                          >
                            <MdEdit size={20} />
                            <Tooltip id="edit" place="bottom"></Tooltip>
                          </button>
                        </Link>

                        <button
                          onClick={() =>
                            handleDeleteCourse(course._id, course.title)
                          }
                          data-tooltip-id="delete"
                          data-tooltip-content="Delete Course"
                          className="text-red-600 hover:bg-red-100 px-1 py-2 cursor-pointer font-medium transition-all duration-200 rounded-sm"
                        >
                          <MdDelete size={20} />
                          <Tooltip id="delete" place="bottom"></Tooltip>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile-friendly card view (visible only on mobile) */}
          <div className="sm:hidden space-y-4">
            {myCourses.map((course) => {
              const date = new Date(course.publishDate);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div
                  key={course._id}
                  className="bg-white p-4 rounded-md border border-gray-200 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-800">
                    {course.title}
                  </h3>

                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <span className="font-medium">Description:</span>{" "}
                      {course.description}
                    </p>
                    <p>
                      <span className="font-medium">Duration:</span>{" "}
                      {course.duration}
                    </p>
                    <p>
                      <span className="font-medium">Created:</span>{" "}
                      {formattedDate}
                    </p>
                   
                    <p>
                      <span className="font-medium">Enrolled Count:</span>{" "}
                      {course.enrollmentsCount}{" "}
                      {course.enrollmentsCount == 1
                        ? "person has"
                        : "people have"}{" "}
                      enrolled
                    </p>
                  </div>
                  {/* action */}
                  <div className="py-4 flex items-center gap-4">
                    <button className="flex items-center gap-1 text-primary bg-primary/10 hover:bg-primary/30 px-3 py-2 cursor-pointer font-medium transition-all duration-200 rounded-sm">
                      <MdEdit size={20} />
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleDeleteCourse(course._id, course.title)
                      }
                      className="flex items-center gap-1 text-red-600 bg-red-100 hover:bg-red-200 px-3 py-2 cursor-pointer font-medium transition-all duration-200 rounded-sm"
                    >
                      <MdDelete size={20} />
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
