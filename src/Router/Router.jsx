import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AddRecipes from "../Pages/AddRecipes";
import AllRecipes from "../Pages/allRecipes";
import MyRecipes from "../Pages/MyRecipes";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import PrivateProvider from "../Provider/PrivateProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addrecipes',
            element: <AddRecipes></AddRecipes>
        },
        {
            path: '/allrecipes',
            element: <PrivateProvider>
                <AllRecipes></AllRecipes>
            </PrivateProvider>
        },
        {
            path: '/myrecipes',
            element: <MyRecipes></MyRecipes>
        },
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>
        }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: '/auth/login',
            element: <Login></Login>
        },
        {
            path: '/auth/register',
            element: <Register></Register>
        }
    ]
  }
]);

export default router;