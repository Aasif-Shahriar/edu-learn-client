import React from "react";
import CategoryCard from "./CategoryCard";

const BrowseCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div>
        <h2 data-aos="fade-up"  data-aos-delay="0" className="text-4xl font-bold text-center text-accent mb-5">
          Browse Top Categories
        </h2>
        <p data-aos="fade-up"  data-aos-delay="200" className="text-center text-accent/80 mb-10">
          Explore our wide range of courses across different categories to find
          the perfect match <br /> for your learning goals
        </p>
        <section data-aos="fade-up"  data-aos-delay="400">
            <CategoryCard></CategoryCard>
        </section>
      </div>
    </div>
  );
};

export default BrowseCategories;
