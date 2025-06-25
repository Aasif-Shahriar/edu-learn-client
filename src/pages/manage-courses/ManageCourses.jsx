import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import { courseAddedByPromise } from "../../APIs/manageCoursesApi";
import ManageCourseTable from "./ManageCourseTable";
import Loading from "../../components/loading/Loading";

const ManageCourses = () => {
  const { user } = useAuth();
  return (
    <div className="bg-secondary min-h-[calc(100vh-64px)] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-accent font-bold mb-3">Manage Your Courses</h2>
        <p className="text-accent/80 mb-10">
          View, edit, and manage all your created courses
        </p>
        {/* table */}
        <div>
          <Suspense fallback={<Loading></Loading>}>
            <ManageCourseTable
              courseAddedByPromise={courseAddedByPromise(user?.email)}
            ></ManageCourseTable>
          </Suspense>
        </div>
      </div>
      <title>My Courses - EduLearn</title>
    </div>
  );
};

export default ManageCourses;
