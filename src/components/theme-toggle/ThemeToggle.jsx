// src/components/ThemeToggle.jsx (Advanced Version)

import { useTheme } from "../../hooks/useTheme";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Sliding toggle */}
      <div
        className={`absolute w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          theme === "light" ? "translate-x-0" : "translate-x-7"
        }`}
      />

      {/* Sun icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 text-yellow-500 z-10 transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 text-indigo-300 z-10 ml-auto transition-opacity duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
