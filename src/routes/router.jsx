import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../Pages/Rider/Rider";





export const router = createBrowserRouter([
    {
        path:'/',
        Component: Rootlayout,
        children:[
            {
                index:true,
                Component: Home,
            },
            {
                path:'/map',
                Component: Coverage,
                loader: ()=>fetch('/Service-center.json').then(res=>res.json())
            },
            {
                path:'/',
                Component: AuthLayout,
                children: [
                    {
                        path:'/login',
                        Component:Login
                    },
                    {
                        path:'/register',
                        Component:Register
                    }
                ]
            },
            {
                path:'/rider',
                element: <PrivateRoutes> <Rider></Rider> </PrivateRoutes>
            }
        ]
    },
]);