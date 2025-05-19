import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AddRecipes from "../Pages/AddRecipes";
import AllRecipes from "../Pages/allRecipes";
import MyRecipes from "../Pages/MyRecipes";

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
            element: <AllRecipes></AllRecipes>
        },
        {
            path: '/myrecipes',
            element: <MyRecipes></MyRecipes>
        }
    ]
  },
]);

export default router;