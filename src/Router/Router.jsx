import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";
import Category from "../Components/Pages/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <Category></Category>
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Error 404 Go Back Home</h1>
    }
])

export default router;