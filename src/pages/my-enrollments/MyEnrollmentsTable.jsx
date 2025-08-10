// MyEnrollmentsTable.jsx
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import NoEnrollmentsCard from "./NoEnrollmentsCard";
import { MdRemoveCircle, MdSearch } from "react-icons/md";
import { Link } from "react-router";

const MyEnrollmentsTable = ({ myEnrollmentsPromise }) => {
  const [myEnrollments, setMyEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEnrollments, setFilteredEnrollments] = useState([]);

  useEffect(() => {
    myEnrollmentsPromise.then((data) => {
      setMyEnrollments(data);
      setFilteredEnrollments(data);
      setLoading(false);
    });
  }, [myEnrollmentsPromise]);

  // Filter enrollments based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredEnrollments(myEnrollments);
    } else {
      const filtered = myEnrollments.filter(
        (enroll) =>
          enroll.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          enroll.instructorName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEnrollments(filtered);
    }
  }, [searchTerm, myEnrollments]);

  if (loading) return <Loading />;

  const handleRemoveEnrollment = (id, title) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to unenroll from "${title}". This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
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
          .delete(`${import.meta.env.VITE_API_URL}/enrollments/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingEnrollments = myEnrollments.filter(
                (data) => data._id !== id
              );
              setMyEnrollments(remainingEnrollments);
              setFilteredEnrollments(remainingEnrollments);
              Swal.fire({
                title: "Removed!",
                text: `Your enrollment from "${title}" has been removed.`,
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
              text: "Failed to remove enrollment. Please try again.",
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "in progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "not started":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="w-full">
      {filteredEnrollments.length === 0 ? (
        <NoEnrollmentsCard hasSearch={searchTerm !== ""} />
      ) : (
        <>
          {/* Header with search and stats */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Your Enrollments ({filteredEnrollments.length})
              </h2>
              {searchTerm && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (Filtered)
                </span>
              )}
            </div>

            <div className="w-full sm:w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search enrollments..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Desktop/tablet table view */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Enrolled Date
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredEnrollments.map((enroll) => {
                  const date = new Date(enroll.enrolledAt);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                  return (
                    <tr
                      key={enroll._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {enroll.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {enroll.instructorName}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {enroll.duration}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {formattedDate}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            enroll.status
                          )}`}
                        >
                          {enroll.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Link
                            to={`/course-details/${enroll.courseId}`}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                          >
                            View
                          </Link>
                          <button
                            onClick={() =>
                              handleRemoveEnrollment(enroll._id, enroll.title)
                            }
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                          >
                            Remove
                          </button>
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
            {filteredEnrollments.map((enroll) => {
              const date = new Date(enroll.enrolledAt);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div key={enroll._id} className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {enroll.title}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        enroll.status
                      )}`}
                    >
                      {enroll.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {enroll.instructorName}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div>
                      <span className="font-medium">Duration:</span>{" "}
                      {enroll.duration}
                    </div>
                    <div>
                      <span className="font-medium">Enrolled:</span>{" "}
                      {formattedDate}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/course-details/${enroll.courseId}`}
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                    >
                      View Course
                    </Link>
                    <button
                      onClick={() =>
                        handleRemoveEnrollment(enroll._id, enroll.title)
                      }
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50"
                    >
                      <MdRemoveCircle className="mr-1" />
                      Remove
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

export default MyEnrollmentsTable;
