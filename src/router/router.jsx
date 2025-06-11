import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCourse from "../pages/addCourse/AddCourse";
import NotFound from "../pages/not-found/NotFound";

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
        element: <AddCourse></AddCourse>,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
