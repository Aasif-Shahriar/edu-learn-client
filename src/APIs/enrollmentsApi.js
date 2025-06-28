export const myEnrollmentsPromise = (email) => {
  return fetch(`${import.meta.env.VITE_API_URL}/enrollments?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
