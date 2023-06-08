import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructors from "../Pages/Instructors/Instructors";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoard from "../Pages/DashBoard/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/instructors',
            element: <Instructors/>
        }
      ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard/>,
            }
        ]
    }
  ]);


  export default router;