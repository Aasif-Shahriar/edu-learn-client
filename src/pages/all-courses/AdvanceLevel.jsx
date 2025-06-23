import React from "react";
import AllCoursesCard from "./AllCoursesCard";

const AdvanceLevel = ({ advanced }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent my-5">Advanced: </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {advanced.map((data) => (
          <AllCoursesCard key={data._id} course={data}></AllCoursesCard>
        ))}
      </div>
    </div>
  );
};

export default AdvanceLevel;
