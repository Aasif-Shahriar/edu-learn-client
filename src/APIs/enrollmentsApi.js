export const myEnrollmentsPromise = (email, accessToken) => {
  return fetch(`${import.meta.env.VITE_API_URL}/enrollments?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
