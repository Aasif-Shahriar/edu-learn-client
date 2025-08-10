// src/components/dashboard-components/dashboard-overview/DashboardOverview.jsx
import React, { useState, useEffect } from "react";
import {
  FaBox,
  FaUsers,
  FaChartLine,
  FaClock,
  FaPlus,
  FaBook,
  FaUserGraduate,
} from "react-icons/fa";
import DashboardCard from "./DashboardCard";
import StatsCard from "./StatsCard";
import RecentActivity from "./RecentActivity";
import BarCharts from "./BarCharts";

export default function DashboardOverview() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setStats([
        {
          title: "Total Orders",
          value: "1,250",
          icon: <FaBox className="text-blue-500" />,
          description: "Orders placed this month",
          bg: "bg-blue-100 dark:bg-blue-900/40",
          trend: { value: "4.5%", direction: "up", label: "since last month" },
        },
        {
          title: "Active Students",
          value: "1,532",
          icon: <FaUsers className="text-green-500" />,
          description: "Currently enrolled",
          bg: "bg-green-100 dark:bg-green-900/40",
          trend: { value: "2.3%", direction: "up", label: "this week" },
        },
        {
          title: "Revenue Growth",
          value: "+18%",
          icon: <FaChartLine className="text-indigo-500" />,
          description: "Compared to last month",
          bg: "bg-indigo-100 dark:bg-indigo-900/40",
          trend: {
            value: "5.1%",
            direction: "up",
            label: "projected increase",
          },
        },
        {
          title: "Pending Tasks",
          value: "12",
          icon: <FaClock className="text-yellow-500" />,
          description: "Tasks to complete",
          bg: "bg-yellow-100 dark:bg-yellow-900/40",
          trend: { value: "1.7%", direction: "down", label: "from yesterday" },
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard Overview
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <title>Dashboard Overview</title>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard Overview
        </h1>
        <div className="mt-2 sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      <BarCharts />

      <RecentActivity />

      {/* Quick Action Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        <DashboardCard
          to="/dashboard/add-course"
          icon={<FaPlus />}
          title="Add New Course"
          description="Create a new course for your students"
        />
        <DashboardCard
          to="/dashboard/manage-courses"
          icon={<FaBook />}
          title="Manage Courses"
          description="Edit or remove existing courses"
        />
        <DashboardCard
          to="/dashboard/my-enrollments"
          icon={<FaUserGraduate />}
          title="My Enrollments"
          description="View your enrolled courses and progress"
        />
      </div>
    </div>
  );
}
