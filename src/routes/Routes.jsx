import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import ViewRecipe from "../pages/ViewRecipe/ViewRecipe";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/chefs')
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
      ]
    },
  ]);



export default router;