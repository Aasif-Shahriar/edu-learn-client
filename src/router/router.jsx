import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCourse from "../pages/addCourse/AddCourse";


const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayout,
   children: [
    {
        index: true,
        Component: Home
    },
    {
      path: '/add-course',
      element: <AddCourse></AddCourse>
    }
   ]
  },
]);

export default router;