import React from "react";
import { useLoaderData } from "react-router";
import AdvanceLevel from "./AdvanceLevel";
import BeginnerLevel from "./BeginnerLevel";
import IntermediateLevel from "./IntermediateLevel";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  const beginner = courses.filter((course) => course.level == "Beginner");
  const intermediate = courses.filter((course) => course.level == "Intermediate");
  const advanced = courses.filter((course) => course.level == "Advanced");
  console.log(advanced);
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8 my-10">
      <div>
        <BeginnerLevel beginner={beginner}></BeginnerLevel>
      </div>
      <div>
        <IntermediateLevel intermediate={intermediate}></IntermediateLevel>
      </div>
      <div>
        <AdvanceLevel advanced={advanced}></AdvanceLevel>
      </div>
      <title>All Courses - EduLearn</title>
    </div>
  );
};

export default Courses;
