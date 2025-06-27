export const courseAddedByPromise = (email, accessToken) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/courses/enrollments?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
