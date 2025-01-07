import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Home} from "../pages/Home.tsx";
import {NavBar} from "../pages/NavBar.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <NavBar/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
        ]
    },
    {
        path: "/admin",
        element: <NewExercisePage/>
    },
    {
        path:"*",
        element: <ErrorPage />
    },
])

export const Router = () => {
    return <RouterProvider router={router}/>
}