import React from "react";
import Banner from "./banner/Banner";
import Service from "./services/Service";
import FeaturedCourses from "./featured-courses/FeaturedCourses";
import BrowseCategories from "./browse-top-categories/BrowseCategories";

const Home = () => {


  return (
    <div className="">
      {/* Banner */}
      <div>
        <Banner></Banner>
      </div>
      {/* services */}
      <div className="max-w-7xl mx-auto px-4">
        <Service></Service>
      </div>
      {/* featured courses */}
      <div className="bg-secondary">
        <FeaturedCourses></FeaturedCourses>
      </div>
      {/* browse top categories */}
      <div className="bg-white py-10">
        <BrowseCategories></BrowseCategories>
      </div>

      <title>Home - EduLearn</title>
    </div>
  );
};

export default Home;
