import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col my-20 space-y-4">
      <h2 className="text-4xl">Route Not Found | 404</h2>
      <Link to="/">
        {" "}
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
