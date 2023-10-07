import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import FormPublication from "../pages/FormPublication/FormPublication.jsx";
import Login from "../pages/Login/Login.jsx";
import ViewProject from "../pages/ViewProject/ViewProject.jsx";
import Feed from "../pages/Feed/feed.jsx";

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
        path: "/form-publication",
        element: <Home chilldren={<FormPublication />} />,
    },
    {
        path: "/view-projects",
        element: <Home chilldren={<ViewProject />} />,
    },
]);

export default Routering;
