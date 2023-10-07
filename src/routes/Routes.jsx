import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import UserProfile from "../pages/Profile/profile.jsx";

const Routering = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projetos",
        element: <Home chilldren={<Projects />} />,
    },
    {
        path: "/profile",
        element: <Home chilldren={<UserProfile />} />,
    }
]);

export default Routering;
