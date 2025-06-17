import React from "react";
import CourseCard from "../Home/featured-courses/CourseCard";

const IntermediateLevel = ({ intermediate }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-5 text-accent">Intermediate: </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {intermediate.map((data) => (
          <CourseCard key={data._id} course={data}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default IntermediateLevel;
