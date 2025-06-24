export const myEnrollmentsPromise = (email) => {
  return fetch(`http://localhost:3000/enrollments?email=${email}`).then((res) => res.json());
};