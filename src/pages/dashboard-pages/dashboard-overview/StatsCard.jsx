// src/components/dashboard-components/dashboard-overview/StatsCard.jsx
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function StatsCard({
  title,
  value,
  icon,
  description,
  bg,
  trend,
}) {
  return (
    <div
      className={`group flex flex-col h-full p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg ${bg} border border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-lg bg-white dark:bg-frame-dark-3 shadow transition-transform duration-300 group-hover:scale-110">
          <div className="text-2xl">{icon}</div>
        </div>

        {trend && (
          <div
            className={`flex items-center text-xs font-medium ${
              trend.direction === "up"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {trend.direction === "up" ? <FaArrowUp /> : <FaArrowDown />}
            <span>{trend.value}</span>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </p>
        <h2 className="text-2xl font-bold text-frame-light-4 dark:text-frame-dark-4">
          {value}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
          {trend && (
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
              {trend.label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
