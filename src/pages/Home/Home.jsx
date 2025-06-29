import React, { useRef } from "react";
import Banner from "./banner/Banner";
import Service from "./services/Service";
import FeaturedCourses from "./featured-courses/FeaturedCourses";
import BrowseCategories from "./browse-top-categories/BrowseCategories";
import ExtraSection from "./extra-section/ExtraSection";
import PopularCourses from "./popular-courses-section/PopularCourses";

const Home = () => {
  const categoryRef = useRef(null);
  const latestRef = useRef(null);
  const featuredRef = useRef(null);

  return (
    <div className="">
      {/* Banner */}
      <div>
        <Banner
          categoryRef={categoryRef}
          latestRef={latestRef}
          featuredRef={featuredRef}
        ></Banner>
      </div>
      {/* services */}
      <div className="max-w-7xl mx-auto px-4">
        <Service></Service>
      </div>
      {/* Lates courses */}
      <div  ref={latestRef} className="bg-secondary">
        <FeaturedCourses></FeaturedCourses>
      </div>
      {/* popular courses */}
      <div  ref={featuredRef} className="bg-primary/10">
        <PopularCourses></PopularCourses>
      </div>
      {/* browse top categories */}
      <div ref={categoryRef} className="bg-white py-10">
        <BrowseCategories></BrowseCategories>
      </div>
      {/* extra section */}
      <div className="bg-primary/10 py-10">
        <ExtraSection></ExtraSection>
      </div>

      <title>Home - EduLearn</title>
    </div>
  );
};

export default Home;
