import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useSharedApi = () => {
  const axiosSecure = useAxiosSecure();

  
  const myEnrollmentsPromise = (email) => {
    return axiosSecure
      .get(`/enrollments?email=${email}`)
      .then((res) => res.data);
  };


  return {
    myEnrollmentsPromise,
  }
};

export default useSharedApi;
