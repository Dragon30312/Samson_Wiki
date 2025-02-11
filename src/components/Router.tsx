import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Home} from "../pages/Home.tsx";
import {NavBar} from "../pages/NavBar.tsx";
import {OneRepPage} from "../pages/OneRepPage.tsx"
import {NewExercisePage} from "../pages/NewExercisePage.tsx";
import {ExercisesByMuscle} from "../pages/ExercisesByMuscle.tsx";
import {ErrorPage} from "../pages/errorPage.tsx";
import { CalorieCalculator } from "../pages/CalorieCalculator.tsx";
import {TrainingPlansPage} from "../pages/TrainingPlansPage.tsx";
import {TrainingPlanEditPage} from "../pages/TrainingPlanEditPage.tsx";
import {WorkoutPage} from "../pages/WorkoutPage.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <NavBar/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "/OneRep",
                element: <OneRepPage/>
            },
            {
                path: "/admin",
                element: <NewExercisePage/>
            },
            {
                path:"/exercises/:muscle",
                element: <ExercisesByMuscle/>
            },
            {
                path: "/CalorieCalculator",
                element: <CalorieCalculator/>
            },
            {
                path:"/plans",
                element: <TrainingPlansPage/>
            },
            {
                path:`/plans/:planId`,
                element: <TrainingPlanEditPage/>
            },
            {
                path:`/workout/:planId`,
                element: <WorkoutPage/>
            }
        ]
    },
    {
        path:"*",
        element: <ErrorPage />
    }
])

export const Router = () => {
    return <RouterProvider router={router}/>
}