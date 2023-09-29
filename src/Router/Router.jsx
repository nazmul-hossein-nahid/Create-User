import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:
        [
            {
                path:"/",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
]) 

export default Router;