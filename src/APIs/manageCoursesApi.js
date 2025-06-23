export const courseAddedByPromise = (email) => {
  return fetch(`https://edu-learn-server-jwt.vercel.app/courses/enrollments?email=${email}`).then((res) =>
    res.json()
  );
};
