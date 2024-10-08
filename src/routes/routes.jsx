import { createBrowserRouter } from "react-router-dom";
import { WelcomeScreen } from "../pages/WelcomeScreen";
import { RegistrarDueno } from "../pages/RegistrarDueno";
import { RegistrarUsuario } from "../pages/RegistrarUsuario";
import { IniciarSesion } from "../pages/IniciarSesion";

export const router = createBrowserRouter([
    {
        path: '/Welcome',
        element: <WelcomeScreen/>
    },
    {
        path: '/registrar-dueno',
        element: <RegistrarDueno />
    },
    {
        path: '/registrar-usuario',
        element: <RegistrarUsuario />
    },
    {
        path: '/iniciar-sesion',
        element: <IniciarSesion />  
    }
])