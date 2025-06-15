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
        path: "/course-details/:id",
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
        loader: ({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/signIn",
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
