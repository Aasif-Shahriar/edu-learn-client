// src/components/dashboard-components/dashboard-overview/DashboardCard.jsx
import React from "react";
import { Link } from "react-router";

export default function DashboardCard({ to, icon, title, description }) {
  return (
    <Link
      to={to}
      className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
