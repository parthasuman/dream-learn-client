import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Main/Main";
import AllCourse from "../Pages/AllCourse/AllCourse";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Login from "../Pages/Login/Login";
import PrivetPage from "../Pages/PrivetPage/PrivetPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/course/:id",
        element: <AllCourse></AllCourse>,
        loader: ({ params }) =>
          fetch(`https://dream-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/tutorials/:id",
        element: (
          <PrivateRoute>
            <PrivetPage></PrivetPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dream-server.vercel.app/tutorials/${params.id}`),
      },
    ],
  },
]);
