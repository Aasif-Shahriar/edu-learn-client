import React, { use, useState } from "react";
import TableRow from "./TableRow";

const MyEnrollmentsTable = ({ myEnrollmentsPromise }) => {
  const allEnrollments = use(myEnrollmentsPromise);
  const [myEnrollments, setMyEnrollments] = useState(allEnrollments);

  return (
    <div className="w-full">
      {myEnrollments.length === 0 ? (
        <p className="text-gray-600 text-center py-4">
          You haven't enrolled yet
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="py-3 px-4 font-semibold text-gray-700">
                  Course Title
                </th>
                <th className="py-3 px-4 font-semibold text-gray-700">
                  Duration
                </th>
                <th className="py-3 px-4 font-semibold text-gray-700">
                  Enrolled Date
                </th>
                <th className="py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="py-3 px-4 font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myEnrollments.map((enroll) => (
                <TableRow
                  key={enroll._id}
                  enroll={enroll}
                  setMyEnrollments={setMyEnrollments}
                  myEnrollments={myEnrollments}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEnrollmentsTable;
