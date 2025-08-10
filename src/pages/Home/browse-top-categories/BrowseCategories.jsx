// BrowseCategories.jsx
import React from "react";
import CategoryCard from "./CategoryCard";

const BrowseCategories = () => {
  // Sample categories data - in a real app, this would come from an API
  const categories = [
    {
      id: 1,
      title: "Development",
      description: "Learn programming and web development",
      courseCount: 120,
      icon: "💻",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Business",
      description: "Business and management courses",
      courseCount: 85,
      icon: "💼",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "Design",
      description: "UI/UX and graphic design",
      courseCount: 65,
      icon: "🎨",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Marketing",
      description: "Digital marketing and SEO",
      courseCount: 75,
      icon: "📈",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: 5,
      title: "Photography",
      description: "Professional photography techniques",
      courseCount: 45,
      icon: "📷",
      color: "from-red-500 to-rose-600",
    },
    {
      id: 6,
      title: "IT & Software",
      description: "Software and IT certifications",
      courseCount: 95,
      icon: "🖥️",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 7,
      title: "Personal Development",
      description: "Self-improvement and productivity",
      courseCount: 55,
      icon: "🚀",
      color: "from-amber-500 to-yellow-600",
    },
    {
      id: 8,
      title: "Health & Fitness",
      description: "Wellness and fitness programs",
      courseCount: 40,
      icon: "💪",
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 9,
      title: "Music",
      description: "Learn music theory and instruments",
      courseCount: 35,
      icon: "🎵",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 10,
      title: "Language",
      description: "Learn new languages and cultures",
      courseCount: 50,
      icon: "🌍",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Browse Top Categories
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explore our wide range of courses across different categories to find
          the perfect match for your learning goals
        </p>
      </div>

      <section data-aos="fade-up" data-aos-delay="400">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowseCategories;
