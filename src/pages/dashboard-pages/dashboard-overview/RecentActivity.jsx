// src/components/dashboard-components/dashboard-overview/RecentActivity.jsx
import React from "react";

const activities = [
  { user: "John Doe", action: "completed", course: "Introduction to React", time: "2 hours ago" },
  { user: "Jane Smith", action: "enrolled in", course: "Advanced JavaScript", time: "5 hours ago" },
  { user: "Mike Johnson", action: "submitted", course: "UI/UX Design Assignment", time: "1 day ago" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
          >
            <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <span className="font-medium">{act.user}</span> {act.action}{" "}
                <span className="font-medium">{act.course}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
