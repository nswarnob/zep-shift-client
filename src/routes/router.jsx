import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";





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
            }
        ]
    },
]);