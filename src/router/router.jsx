import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCourse from "../pages/addCourse/AddCourse";
import NotFound from "../pages/not-found/NotFound";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/authentication/Login";
import PrivateRoute from "../private/PrivateRoute";

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
