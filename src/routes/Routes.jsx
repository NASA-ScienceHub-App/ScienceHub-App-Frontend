import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../pages/Profile/profile";


const Routering = createBrowserRouter([
    {
        path: "/perfil",
        element: <UserProfile />,
    },
]);

export default Routering;
