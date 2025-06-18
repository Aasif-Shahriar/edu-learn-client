import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const TableRow = ({ enroll, myEnrollments, setMyEnrollments }) => {
  const date = new Date(enroll.enrolledAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleRemoveEnrollment = (id) => {
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
          .delete(`http://localhost:3000/enrollments/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingEnrollments = myEnrollments.filter(
                (data) => data._id !== id
              );
              setMyEnrollments(remainingEnrollments);
              Swal.fire({
                title: "Deleted!",
                text: `Your enrollment from "${enroll.title} course has been removed!"`,
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
    <>
      {/* Desktop Table Row */}
      <tr className="hidden sm:table-row border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150">
        <td className="py-4 px-4">
          <div className="font-medium text-gray-900">{enroll.title}</div>
          <div className="text-sm text-gray-500">{enroll.instructorName}</div>
        </td>
        <td className="py-4 px-4 text-gray-700">{enroll.duration}</td>
        <td className="py-4 px-4 text-gray-700">{formattedDate}</td>
        <td className="py-4 px-4 font-medium text-green-600 text-sm">
          <span className="bg-green-50 p-2 rounded-full">{enroll.status}</span>
        </td>
        <td className="py-4 px-4">
          <button
            onClick={() => handleRemoveEnrollment(enroll._id)}
            className="text-red-600 hover:text-red-800 cursor-pointer font-medium"
          >
            Remove
          </button>
        </td>
      </tr>

      {/* Mobile Card View */}
      <div className="sm:hidden border border-gray-200 rounded-lg p-4 mb-4 bg-white shadow-sm">
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Course:</span>{" "}
          {enroll.title}
        </div>
        <div className="mb-2 text-sm text-gray-500">
          Instructor: {enroll.instructorName}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Duration:</span>{" "}
          {enroll.duration}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Date:</span>{" "}
          {formattedDate}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Status:</span>{" "}
          <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
            {enroll.status}
          </span>
        </div>
        <div className="text-right">
          <button
            onClick={() => handleRemoveEnrollment(enroll._id)}
            className="text-red-600 hover:text-red-800 cursor-pointer font-medium text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default TableRow;
