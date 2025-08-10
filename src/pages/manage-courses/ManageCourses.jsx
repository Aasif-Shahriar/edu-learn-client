import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import ManageCourseTable from "./ManageCourseTable";
import Loading from "../../components/loading/Loading";
import { courseAddedByPromise } from "../../APIs/manageCoursesApi";
// import useSharedApi from "../../APIs/useSharedApi";

const ManageCourses = () => {
  const { user } = useAuth();
  // const { courseAddedByPromise } = useSharedApi();
  return (
    <div className="bg-secondary max-w-[1560px] min-h-[calc(100vh-64px)] py-10">
      <div >
        <h2 className="text-3xl text-accent font-bold mb-3">
          Manage Your Courses
        </h2>
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
