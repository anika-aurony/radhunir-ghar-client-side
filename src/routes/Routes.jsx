import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import ViewRecipe from "../pages/ViewRecipe/ViewRecipe";
import PrivateRoutes from "./PrivateRoutes";
import Page404 from "../pages/Page404/Page404";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://chef-recipe-assignment-project-server-anika-tasnim-aurony.vercel.app/chefs')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Registration></Registration>
        },
        {
            path: 'chefs/:id',
            element: <PrivateRoutes><ViewRecipe></ViewRecipe></PrivateRoutes>,
            
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
            path: '*',
            element: <Page404></Page404>
        }
      ]
    },
  ]);



export default router;