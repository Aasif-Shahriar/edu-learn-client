export const DashboardFooter = () => {
  return (
    <footer className="py-4 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} EduLearn. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
