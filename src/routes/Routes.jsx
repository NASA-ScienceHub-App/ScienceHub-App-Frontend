import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Login from "../pages/Login/Login.jsx";
import ViewProject from "../pages/ViewProject/ViewProject.jsx";

const Routering = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/my-projects",
        element: <Home chilldren={<Projects />} />,
    },
    {
        path: "/view-projects",
        element: <Home chilldren={<ViewProject />} />,
    },
]);

export default Routering;
