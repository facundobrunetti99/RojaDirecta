import { createBrowserRouter } from "react-router-dom";
import { WelcomeScreen } from "../pages/WelcomeScreen";

export const router = createBrowserRouter([
    {
        path: '/Welcome',
        element: <WelcomeScreen/>
    }
])