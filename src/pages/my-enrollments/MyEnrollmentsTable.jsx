import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../components/loading/Loading";

const MyEnrollmentsTable = ({ myEnrollmentsPromise }) => {
  const [myEnrollments, setMyEnrollments] = useState([]);
  const[loading,setLoading]=useState(true)

  console.log(`enrollments object from my-enrollment-table: ${myEnrollments}`);

  useEffect(() => {
    myEnrollmentsPromise.then((data) => {
      setMyEnrollments(data);
      setLoading(false)
    });
  }, [myEnrollmentsPromise]);

  if(loading) return <Loading></Loading>

  const handleRemoveEnrollment = (id, title) => {
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
                text: `Your enrollment from "${title} course has been removed!"`,
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
      {myEnrollments.length === 0 ? (
        <p className="text-gray-600 text-center py-4">
          You haven't enrolled yet
        </p>
      ) : (
        <>
          {/* Desktop/tablet table view */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Course Title
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Duration
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Enrolled Date
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myEnrollments.map((enroll) => {
                  const date = new Date(enroll.enrolledAt);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                  return (
                    <tr
                      key={enroll._id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">
                          {enroll.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {enroll.instructorName}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {enroll.duration}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {formattedDate}
                      </td>
                      <td className="py-4 px-4 font-medium text-green-600 text-sm">
                        <span className="bg-green-50 p-2 rounded-full">
                          {enroll.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() =>
                            handleRemoveEnrollment(enroll._id, enroll.title)
                          }
                          className="text-red-600 hover:text-red-800 cursor-pointer font-medium"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile-friendly card view (visible only on mobile) */}
          <div className="sm:hidden space-y-4 px-2">
            {myEnrollments.map((enroll) => {
              const date = new Date(enroll.enrolledAt);
              const formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div
                  key={enroll._id}
                  className="bg-white p-4 rounded-md border border-gray-200 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-gray-800">
                    {enroll.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {enroll.instructorName}
                  </p>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <span className="font-medium">Duration:</span>{" "}
                      {enroll.duration}
                    </p>
                    <p>
                      <span className="font-medium">Enrolled:</span>{" "}
                      {formattedDate}
                    </p>
                    <p>
                      <span className="font-medium">Status:</span>{" "}
                      <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">
                        {enroll.status}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveEnrollment(enroll._id, enroll.title)
                    }
                    className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium"
                  >
                    Remove
                  </button>
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
