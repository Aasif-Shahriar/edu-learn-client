import React from "react";
import Banner from "./banner/Banner";
import Service from "./services/Service";
import FeaturedCourses from "./featured-courses/FeaturedCourses";

const Home = () => {
  return (
    <div className="">
      {/* Banner */}
      <div>
        <Banner></Banner>
      </div>
      {/* services */}
      <div className="container mx-auto px-4">
        <Service></Service>
      </div>
      {/* featured courses */}
      <div className="bg-secondary ">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p>Explore our most popular and highly-rated courses</p>
          <FeaturedCourses></FeaturedCourses>
        </div>
      </div>

      <title>Home - EduLearn</title>
    </div>
  );
};

export default Home;
