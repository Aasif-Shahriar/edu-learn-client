import React from "react";

const Service = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl">15K+</h2>
        <p className="text-accent">Online Courses</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl">8.5M+</h2>
        <p className="text-accent">Active Students</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl">5K+</h2>
        <p className="text-accent">Expert Instructors</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl">98%</h2>
        <p className="text-accent">Success Rate</p>
      </div>
    </div>
  );
};

export default Service;
