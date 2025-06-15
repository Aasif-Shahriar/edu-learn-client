import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router';

const EnrollPriceCard = ({course}) => {
    const {_id,benefits,price}=course
    const id = useParams()
    console.log(id);
    return (
            <div className="bg-white  rounded-xl shadow-lg p-6 border border-gray-100 self-start">
            <div className="text-3xl text-center font-semibold text-gray-800">
              {price}
            </div>
            <div className="text-sm text-center mt-2 text-gray-500">
              Full Access
            </div>

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

            <Link to={`/enrolledInCourse/${_id}`}>
              {" "}
              <button className="btn btn-primary w-full mt-6">
                Enroll Now
              </button>
            </Link>

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