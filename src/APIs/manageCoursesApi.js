export const courseAddedByPromise = (email) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/courses/enrollments?email=${email}`,
    { credentials: "include" }
  ).then((res) => res.json());
};
