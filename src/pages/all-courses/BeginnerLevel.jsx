import React from "react";
import AllCoursesCard from "./AllCoursesCard";

const BeginnerLevel = ({ beginner }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-5 text-accent">Beginner: </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beginner.map((data) => (
          <AllCoursesCard key={data._id} course={data}></AllCoursesCard>
        ))}
      </div>
    </div>
  );
};

export default BeginnerLevel;
