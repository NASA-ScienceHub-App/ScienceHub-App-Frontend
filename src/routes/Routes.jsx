import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import FormPublication from "../pages/FormPublication/FormPublication.jsx";
import FormProjects from "../pages/FormProject/FormProject.jsx";
import Login from "../pages/Login/Login.jsx";
import ViewProject from "../pages/ViewProject/ViewProject.jsx";
import Feed from "../pages/Feed/feed.jsx";
import Profile from "../pages/Profile/profile1.jsx";

const Routering = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home chilldren={<Feed />} scroll={true} />,
    },
    {
        path: "/my-projects",
        element: <Home chilldren={<Projects />} />,
    },
    {
        path: "/profile",
        element: <Home chilldren={<Profile />} />,
    },
    {
        path: "/form-publication",
        element: <Home chilldren={<FormPublication />} />,
    },
    {
        path: "/form-project",
        element: <Home chilldren={<FormProjects />} />,
    },
    {
        path: "/view-projects",
        element: <Home chilldren={<ViewProject />} />,
    },
]);

export default Routering;
