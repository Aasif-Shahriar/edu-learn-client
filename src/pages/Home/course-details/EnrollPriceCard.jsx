// EnrollPriceCard.jsx
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaUserGraduate, FaChair, FaLock } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const EnrollPriceCard = ({ course, onEnrollmentChange }) => {
  const { _id, benefits, price, totalSeats, enrolledCount, title } = course;
  const { user } = useAuth();
  const [enrolled, setEnrolled] = useState(enrolledCount);
  const [seatsLeft, setSeatsLeft] = useState(totalSeats - enrolledCount);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState(null);

  useEffect(() => {
    if (course) {
      setEnrolled(course.enrolledCount);
      setSeatsLeft(course.totalSeats - course.enrolledCount);
    }
  }, [course]);

  // Checking if user already enrolled
  useEffect(() => {
    if (!user) return;
    axios
      .get(`${import.meta.env.VITE_API_URL}/enrollments/check`, {
        params: { courseId: _id, email: user.email },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.enrolled) {
          setIsEnrolled(true);
          setEnrollmentId(res.data.enrollmentId);
        }
      });
  }, [user, _id]);

  // Handle enroll and unenroll
  const handleToggleEnrollment = async () => {
    if (!user) return;
    try {
      if (isEnrolled) {
        // Unenroll the user
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/enrollments/${enrollmentId}`,
          { withCredentials: true }
        );
        setIsEnrolled(false);
        setEnrollmentId(null);
        setEnrolled((prev) => prev - 1);
        setSeatsLeft((prev) => prev + 1);
        Swal.fire("Unenrolled!", `from "${title}"`, "info");
        if (onEnrollmentChange) onEnrollmentChange();
      } else {
        // Check enrollment limit
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/enrollments/count`,
          {
            params: { email: user.email },
            withCredentials: true,
          }
        );
        if (data.count >= 3) {
          Swal.fire(
            "Limit Reached!",
            "You can't enroll in more than 3 courses at a time.",
            "warning"
          );
          return;
        }
        // Proceed to enroll
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/enrollments`,
          {
            courseId: _id,
            student: user.email,
          },
          {
            withCredentials: true,
          }
        );
        if (res.data.insertedId) {
          setIsEnrolled(true);
          setEnrolled((prev) => prev + 1);
          setSeatsLeft((prev) => prev - 1);
          setEnrollmentId(res.data.insertedId);
          Swal.fire("Enrolled!", `in "${title}"`, "success");
          if (onEnrollmentChange) onEnrollmentChange();
        }
      }
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Something went wrong",
        "error"
      );
      console.error(err);
    }
  };

  // Calculate enrollment percentage
  const enrollmentPercentage = Math.round((enrolled / totalSeats) * 100);

  // Get progress bar color based on percentage
  const getProgressColor = () => {
    if (enrollmentPercentage < 50) return "bg-green-500";
    if (enrollmentPercentage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 sticky top-6">
      {/* Price */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-800 dark:text-white">
          ${price}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Full Access
        </div>
      </div>

      {/* Seats Info */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaChair className="mr-2 text-blue-500" />
            Available Seats
          </div>
          <div
            className={`font-semibold ${
              seatsLeft > 5
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {seatsLeft} left
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
          <div
            className={`h-2.5 rounded-full ${getProgressColor()}`}
            style={{ width: `${enrollmentPercentage}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
          <span>{enrolled} enrolled</span>
          <span>{totalSeats} total</span>
        </div>
      </div>

      {/* Enroll/Unenroll Button */}
      <button
        disabled={!user || (seatsLeft === 0 && !isEnrolled)}
        onClick={handleToggleEnrollment}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
          !user
            ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            : seatsLeft === 0 && !isEnrolled
            ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 cursor-not-allowed"
            : isEnrolled
            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50"
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        }`}
      >
        {!user ? (
          <>
            <FaLock className="mr-2" />
            Login to Enroll
          </>
        ) : seatsLeft === 0 && !isEnrolled ? (
          "No Seats Left"
        ) : isEnrolled ? (
          "Enrolled"
        ) : (
          "Enroll Now"
        )}
      </button>

      {/* Benefits */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          What You'll Get
        </h3>
        <ul className="space-y-3">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnrollPriceCard;
