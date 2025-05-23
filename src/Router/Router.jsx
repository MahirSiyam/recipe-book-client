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
import RecipeDetails from "../Components/RecipeDetails";
import UpdateRecipe from "../Components/UpdateRecipe";
import About from "../Components/About";
import TipsAndTricks from "../Components/TipsAndTricks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://recipe-book-server-one.vercel.app/recipes"),
        element: (
          <RecipeProvider>
            <Home />
          </RecipeProvider>
        ),
      },
      {
        path: "/addrecipes",
        element: (
          <PrivateProvider>
            <AddRecipes />
          </PrivateProvider>
        ),
      },
      {
        path: "/allrecipes",
        loader: () => fetch("https://recipe-book-server-one.vercel.app/recipes"),
        element: (
          <RecipeProvider>
            <AllRecipes />
          </RecipeProvider>
        ),
      },
      {
        path: "/recipe-details/:id",
        loader: ({ params }) =>
          fetch(`https://recipe-book-server-one.vercel.app/recipes/${params.id}`),
        element: <RecipeDetails />,
      },
      {
        path: "/myrecipes",
        loader: () => fetch("https://recipe-book-server-one.vercel.app/recipes"),
        element: (
          <PrivateProvider>
            <RecipeProvider>
              <MyRecipes />
            </RecipeProvider>
          </PrivateProvider>
        ),
      },
      {
        path: '/update-recipes',
        loader: ({params}) => fetch(`https://recipe-book-server-one.vercel.app/recipes/${params.id}`),
        element: <RecipeProvider>
          <UpdateRecipe></UpdateRecipe>
        </RecipeProvider>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/tips-and-tricks',
        element: <TipsAndTricks></TipsAndTricks>
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
