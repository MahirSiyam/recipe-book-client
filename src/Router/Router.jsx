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
import RecipeProvider from "../Provider/RecipeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:3000/recipes'),
        element: <RecipeProvider>
            <Home></Home>
        </RecipeProvider>,
      },
      {
        path: "/addrecipes",
        element: (
          <PrivateProvider>
            <AddRecipes></AddRecipes>
          </PrivateProvider>
        ),
      },
      {
        path: "/allrecipes",
        loader: () => fetch('http://localhost:3000/recipes'),
        element: <RecipeProvider>
            <AllRecipes></AllRecipes>
        </RecipeProvider>
      },
      {
        path: "/myrecipes",
        element: (
          <PrivateProvider>
            <MyRecipes></MyRecipes>
          </PrivateProvider>
        ),
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
