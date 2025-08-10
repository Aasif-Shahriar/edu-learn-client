// MyEnrollments.jsx
import React, { Suspense } from "react";
import MyEnrollmentsTable from "./MyEnrollmentsTable";
import Loading from "../../components/loading/Loading";
import useAuth from "../../hooks/useAuth";
import { myEnrollmentsPromise } from "../../APIs/enrollmentsApi";

const MyEnrollments = () => {
  const { user } = useAuth();

  return (
    <div className="bg-secondary min-h-[calc(100vh-64px)] py-6 md:py-10">
      <div className="max-w-[1560] mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            My Enrolled Courses
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Track your learning progress and manage your enrollments
          </p>
        </div>

        {/* Table section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <Suspense fallback={<Loading />}>
            <MyEnrollmentsTable
              myEnrollmentsPromise={myEnrollmentsPromise(user?.email)}
            />
          </Suspense>
        </div>
      </div>
      <title>My Enrollments - EduLearn</title>
    </div>
  );
};

export default MyEnrollments;
