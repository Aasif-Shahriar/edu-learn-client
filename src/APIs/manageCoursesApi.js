export const courseAddedByPromise = (email) => {
  return fetch(`http://localhost:3000/courses?email=${email}`).then((res) =>
    res.json()
  );
};
