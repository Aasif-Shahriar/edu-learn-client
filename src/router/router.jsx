import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCourse from "../pages/addCourse/AddCourse";
import NotFound from "../pages/not-found/NotFound";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/authentication/Login";
import PrivateRoute from "../private/PrivateRoute";
import CourseDetails from "../pages/Home/course-details/CourseDetails";
import Loading from "../components/loading/Loading";
import Courses from "../pages/all-courses/Courses";
import MyEnrollments from "../pages/my-enrollments/MyEnrollments";
import ManageCourses from "../pages/manage-courses/ManageCourses";
import UpdateCourse from "../pages/manage-courses/UpdateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add-course",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },

      {
        path: "/courses",
        Component: Courses,
        loader: () => fetch("https://edu-learn-server-jwt.vercel.app/courses"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/manage-courses",
        element: (
          <PrivateRoute>
            <ManageCourses></ManageCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-course/:id",
        loader: ({ params }) =>
          fetch(`https://edu-learn-server-jwt.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCourse></UpdateCourse>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />
      },
      {
        path: "/course-details/:id",
        loader: ({ params }) =>
          fetch(`https://edu-learn-server-jwt.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/signIn",
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/courses",
        Component: Courses,
      },
      {
        path: "/my-enrollments",
        element: (
          <PrivateRoute>
            <MyEnrollments></MyEnrollments>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
