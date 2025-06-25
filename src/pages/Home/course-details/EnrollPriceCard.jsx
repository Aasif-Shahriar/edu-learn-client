import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const EnrollPriceCard = ({ course }) => {
  const { _id, benefits, price, totalSeats, enrolledCount, title } = course;
  const { user } = useAuth();

  const [enrolled, setEnrolled] = useState(enrolledCount);
  const [seatsLeft, setSeatsLeft] = useState(totalSeats - enrolledCount);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState(null);

  console.log(enrolled);

  //  Checking if user already enrolled
  useEffect(() => {
    if (!user) return;
    axios
      .get("https://edu-learn-server-jwt.vercel.app/enrollments/check", {
        params: { courseId: _id, email: user.email },
      })
      .then((res) => {
        if (res.data.enrolled) {
          setIsEnrolled(true);
          setEnrollmentId(res.data.enrollmentId);
        }
      });
  }, [user, _id]);

  //  Handle enroll and unenroll
  const handleToggleEnrollment = async () => {
    if (!user) return;

    try {
      if (isEnrolled) {
        // first Unenroll the user
        await axios.delete(
          `https://edu-learn-server-jwt.vercel.app/enrollments/${enrollmentId}`
        );
        setIsEnrolled(false);
        setEnrollmentId(null);
        setEnrolled((prev) => prev - 1);
        setSeatsLeft((prev) => prev + 1);
        Swal.fire("Unenrolled!", `from "${title}"`, "info");
      } else {
        //  Checking if user has already enrolled in 3 courses
        const { data } = await axios.get(
          `https://edu-learn-server-jwt.vercel.app/enrollments/count`,
          {
            params: { email: user.email },
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

        // ✅ Step 2: Proceed to Enroll
        const res = await axios.post(
          `https://edu-learn-server-jwt.vercel.app/enrollments`,
          {
            courseId: _id,
            student: user.email,
          }
        );

        if (res.data.insertedId) {
          setIsEnrolled(true);
          setEnrolled((prev) => prev + 1);
          setSeatsLeft((prev) => prev - 1);
          setEnrollmentId(res.data.insertedId);
          Swal.fire("Enrolled!", `in "${title}"`, "success");
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 self-start">
      <div className="text-3xl text-center font-semibold text-gray-800">
        ${price}
      </div>
      <div className="text-sm text-center mt-2 text-gray-500">Full Access</div>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Available Seats</span>
          <span className="text-green-600 font-semibold">{seatsLeft || totalSeats}</span>
        </div>
        <progress
          className="progress progress-success w-full h-3"
          value={enrolled || 0}
          max={totalSeats}
        ></progress>
        <div className="text-xs text-gray-500 mt-1">
          {enrolled || 0} out of {totalSeats} seats filled
        </div>
      </div>

      {/* Enroll / Unenroll button */}
      <button
        disabled={!user || seatsLeft === 0}
        onClick={handleToggleEnrollment}
        className="btn btn-primary w-full mt-6"
      >
        {!user
          ? "Login to Enroll"
          : seatsLeft === 0 && !isEnrolled
          ? "No Seats Left"
          : isEnrolled
          ? "Unenroll"
          : "Enroll Now"}
      </button>

      <ul className="text-sm text-gray-700 mt-6 space-y-2">
        {benefits.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollPriceCard;
