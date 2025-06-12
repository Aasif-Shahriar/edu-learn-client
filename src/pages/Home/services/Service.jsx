import React from "react";
import CountUp from "react-countup";

const Service = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl"><CountUp end={15} enableScrollSpy scrollSpyDelay={1500} />K+</h2>
        <p className="text-accent">Online Courses</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl"><CountUp end={9} enableScrollSpy scrollSpyDelay={1500}></CountUp>M+</h2>
        <p className="text-accent">Active Students</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl"><CountUp end={5} enableScrollSpy scrollSpyDelay={1500} />K+</h2>
        <p className="text-accent">Expert Instructors</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h2 className="text-primary font-bold text-2xl"><CountUp end={98} enableScrollSpy scrollSpyDelay={1500}  />%</h2>
        <p className="text-accent">Success Rate</p>
      </div>
    </div>
  );
};

export default Service;
