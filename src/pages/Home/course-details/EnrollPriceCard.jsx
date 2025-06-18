import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const EnrollPriceCard = ({ course }) => {
  const { _id, benefits, price, title } = course;

  const { user } = useAuth();
  const navigate = useNavigate()

  console.log(`user from enrollcard ${user?.email}`);

  const handleEnroll = () => {
    const enrollment = {
      courseId: _id,
      student: user.email,
    };

    axios
      .post("http://localhost:3000/enrollments", enrollment)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: `Your enrollment to "${title}" course has been successful👏`,
            icon: "success",
            draggable: true,
          });
          navigate('/my-enrollments')
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(enrollment);
  };

  return (
    <div className="bg-white  rounded-xl shadow-lg p-6 border border-gray-100 self-start">
      <div className="text-3xl text-center font-semibold text-gray-800">
        {price}
      </div>
      <div className="text-sm text-center mt-2 text-gray-500">Full Access</div>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Available Seats</span>
          <span className="text-green-600 font-semibold">3 left</span>
        </div>
        <progress
          className="progress progress-success w-full h-3"
          value="7"
          max="10"
        ></progress>
        <div className="text-xs text-gray-500 mt-1">
          7 out of 10 seats filled
        </div>
      </div>

      {/* Enroll button */}
      <button
        disabled={!user}
        onClick={handleEnroll}
        className="btn btn-primary w-full mt-6"
      >
        {!user ? "Login To Enroll" : "Enroll Now"}
      </button>

      <ul className="text-sm text-gray-700 mt-6 space-y-2">
        {benefits.map((data, idx) => (
          <li key={idx} className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollPriceCard;
