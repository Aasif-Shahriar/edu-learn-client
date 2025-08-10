import React, { useRef } from "react";
import Banner from "./banner/Banner";
import Service from "./services/Service";
import FeaturedCourses from "./latest-courses/FeaturedCourses";
import BrowseCategories from "./browse-top-categories/BrowseCategories";
import ExtraSection from "./extra-section/BecomeInstructor";
import PopularCourses from "./popular-courses-section/PopularCourses";

const Home = () => {
  const categoryRef = useRef(null);
  const latestRef = useRef(null);
  const featuredRef = useRef(null);

  // Smooth scroll function for navigation
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // Adjust for navbar height
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Banner Section */}
      <section className="relative">
        <Banner
          scrollToCategories={() => scrollToRef(categoryRef)}
          scrollToLatest={() => scrollToRef(latestRef)}
          scrollToFeatured={() => scrollToRef(featuredRef)}
        />
      </section>

      {/* Featured Courses Section */}
      <section
        ref={latestRef}
        className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800/50"
      >
        <div className="max-w-[1560px] mx-auto px-4">
          <FeaturedCourses />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section
        ref={featuredRef}
        className="py-12 md:py-16 bg-white dark:bg-gray-800"
      >
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <PopularCourses />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <Service />
        </div>
      </section>

      {/* Browse Categories Section */}
      <section
        ref={categoryRef}
        className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/30"
      >
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <BrowseCategories />
        </div>
      </section>

      {/* Extra Section */}
      <section className="py-12 md:py-16 bg-blue-50 dark:bg-gray-800/50">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          <ExtraSection />
        </div>
      </section>

      <title>Home - EduLearn</title>
    </div>
  );
};

export default Home;
