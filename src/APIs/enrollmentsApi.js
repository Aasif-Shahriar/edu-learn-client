export const myEnrollmentsPromise = (email) => {
  return fetch(`https://edu-learn-server-jwt.vercel.app/enrollments?email=${email}`).then((res) => res.json());
};