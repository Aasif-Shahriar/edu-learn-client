import React from "react";
import CourseCard from "../Home/featured-courses/CourseCard";

const BeginnerLevel = ({ beginner }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-5 text-accent">Beginner: </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {beginner.map((data) => (
          <CourseCard key={data._id} course={data}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default BeginnerLevel;
