import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructors from "../Pages/Instructors/Instructors";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import ManageUsers from "../Pages/DashBoard/Users/ManageUsers";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";

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
        path: 'dashboard',
        element: <DashBoardLayout/>,
        children: [
            {
                path: 'mycart',
                element: <MyCart/>,
            },
            {
                path: 'wallet',
                element: <PaymentHistory/>
            },
            {
                path: 'users',
                element:<ManageUsers/>
            },
            {
                path: 'addclass',
                element:<AddClass/>
            },
            {
                path: 'manageclasses',
                element:<ManageClasses/>
            }


        ]
    }
  ]);


  export default router;