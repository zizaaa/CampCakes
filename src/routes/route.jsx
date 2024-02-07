import { createBrowserRouter } from "react-router-dom";
import { Layout,Home,CakesList,ContactUs } from "../components/index";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/cake",
                element:<CakesList/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            }
        ]
    }
])