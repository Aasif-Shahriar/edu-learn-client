import React from "react";
import CourseCard from "../Home/featured-courses/CourseCard";

const AdvanceLevel = ({ advanced }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent my-5">Advanced: </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advanced.map((data) => (
          <CourseCard key={data._id} course={data}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AdvanceLevel;
