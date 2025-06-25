export const courseAddedByPromise = (email) => {
  return fetch(`http://localhost:3000/courses/enrollments?email=${email}`).then((res) =>
    res.json()
  );
};
