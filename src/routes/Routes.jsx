import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Feed from "../pages/Feed/feed.jsx";

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
        path: "/feed",
        element: <Home chilldren={<Feed />} scroll={true} />
    },
]);

export default Routering;
