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
import About from "../pages/about/About";
import DashboardOverview from "../pages/dashboard-pages/dashboard-overview/DashboardOverview";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfile from "../components/dashboard-components/user-profile/UserProfile";

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
        path: "courses",
        Component: Courses,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/courses`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "course-details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/course/${params.id}`),
        element: <CourseDetails />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "signIn",
        Component: Login,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
    
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardOverview,
      },
      {
        path: "add-course",
        Component: AddCourse,
      },
      {
        path: "manage-courses",
        Component: ManageCourses,
      },
      {
        path: "update-course/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/course/${params.id}`),
        element: <UpdateCourse />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "my-enrollments",
        Component: MyEnrollments,
      },
        {
        path: "profile",
        Component: UserProfile,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
