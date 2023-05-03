import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Registration></Registration>
        },
      ]
    },
  ]);



export default router;