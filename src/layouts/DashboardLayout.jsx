// src/layouts/DashboardLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router";
import DashboardSidebar from "../components/dashboard-components/dashboard-sidebar/DashboardSidebar";
import DashboardNavbar from "../components/dashboard-components/dashboard-navbar/DashboardNavbar";
import { DashboardFooter } from "../components/dashboard-components/dash-foot/DashboardFooter";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("keydown", handleEsc);
      // Focus management for accessibility
      if (sidebarRef.current) {
        sidebarRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isSidebarOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen bg-frame-light-2 dark:bg-frame-dark-2 transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex" aria-label="Dashboard navigation">
        <DashboardSidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 flex md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Dashboard navigation"
        >
          {/* Mobile Sidebar */}
          <div
            ref={sidebarRef}
            className="w-64 bg-frame-light-1 dark:bg-frame-dark-1 shadow-lg transition-transform duration-300 transform translate-x-0"
            tabIndex="-1"
          >
            <DashboardSidebar closeSidebar={() => setIsSidebarOpen(false)} />
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        </div>
      )}

      {/* Main Content Area */}
      <div
        className="flex flex-col flex-1 overflow-hidden"
        aria-hidden={isSidebarOpen}
      >
        {/* Navbar */}
        <DashboardNavbar
          toggleSidebar={() => setIsSidebarOpen(true)}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Page Content */}
        <main
          className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 
                         text-frame-light-4 dark:text-frame-dark-4 
                         transition-colors duration-300"
          id="main-content"
          tabIndex="-1"
        >
          <div>
            <Outlet />
          </div>
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
}
