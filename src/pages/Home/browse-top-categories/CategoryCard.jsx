import React from "react";
import { FaCode, FaBrain, FaBullhorn } from "react-icons/fa";
import { IoIosColorPalette, IoMdCamera } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";

const CategoryCard = () => {
  const categories = [
    {
      icon: <FaCode />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Development",
      totalCourse: 24,
    },
    {
      icon: <FaChartLine />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Business",
      totalCourse: 18,
    },
    {
      icon: <IoIosColorPalette />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Design",
      totalCourse: 12,
    },
    {
      icon: <FaBrain />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Data Science",
      totalCourse: 20,
    },
    {
      icon: <IoMdCamera />,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Photography",
      totalCourse: 15,
    },
    {
      icon: <FaBullhorn />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Marketing",
      totalCourse: 10,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-3 bg-secondary rounded-lg p-4 cursor-pointer hover:shadow-xl hover:transition-all hover:duration-400"
        >
          <div
            className={`${cat.iconBg} ${cat.iconColor} p-3 rounded-full text-2xl`}
          >
            {cat.icon}
          </div>
          <h2 className=" font-medium text-accent text-center">{cat.title}</h2>
          <p className="text-sm text-accent/80">{cat.totalCourse} Courses</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
