// CategoryCard.jsx
import React from "react";
import { Link } from "react-router";

const CategoryCard = ({ category }) => {
  const { id, title, description, courseCount, icon, color } = category;

  return (
    <Link 
      to={`/courses?category=${title}`}
      className="block group"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full transition-all duration-300 hover:shadow-xl hover:border-transparent">
        {/* Decorative top border */}
        <div className={`h-1 w-full bg-gradient-to-r ${color}`}></div>
        
        {/* Content */}
        <div className="p-6">
          {/* Icon and Title */}
          <div className="flex items-center mb-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${color} text-white shadow-lg`}>
              {icon}
            </div>
            <h3 className="ml-4 text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Stats and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                  {courseCount}
                </span>
              </div>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                courses
              </span>
            </div>
            
            <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-sm font-medium mr-1">Browse</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-100 dark:from-gray-700 to-transparent rounded-tl-2xl opacity-50"></div>
      </div>
    </Link>
  );
};

export default CategoryCard;