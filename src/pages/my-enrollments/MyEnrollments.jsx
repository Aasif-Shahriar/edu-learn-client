import React, { Suspense } from "react";
import MyEnrollmentsTable from "./MyEnrollmentsTable";
import Loading from "../../components/loading/Loading";
import useAuth from "../../hooks/useAuth";
import { myEnrollmentsPromise } from "../../APIs/enrollmentsApi";



const MyEnrollments = () => {
  const { user } = useAuth();
  console.log(`user from my-enrollments-page: ${user.email}`);
  return (
    <div className="bg-secondary min-h-[calc(100vh-64px)] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-accent font-bold">My Enrolled Courses</h2>
        <p className="text-accent/80 mb-10">
          Track your learning progress and manage your enrollments
        </p>
        {/* table */}
        <div>
          <Suspense fallback={<Loading></Loading>}>
            <MyEnrollmentsTable myEnrollmentsPromise={myEnrollmentsPromise(user?.email)}></MyEnrollmentsTable>
          </Suspense>
        </div>
      </div>
      <title>My Enrollments - EduLearn</title>
    </div>
  );
};

export default MyEnrollments;
