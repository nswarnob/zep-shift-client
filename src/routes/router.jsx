import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../Pages/Home/Home";





export const router = createBrowserRouter([
    {
        path:'/',
        Component: Rootlayout,
        children:[
            {
                index:true,
                Component: Home,
            }
        ]
    },
]);