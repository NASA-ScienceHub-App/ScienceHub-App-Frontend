import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import FormPublication from "../pages/FormPublication/FormPublication.jsx";
import FormProjects from "../pages/FormProject/FormProject.jsx";

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
        path: "/form-publication",
        element: <Home chilldren={<FormPublication />} />,
    },
    {
        path: "/form-project",
        element: <Home chilldren={<FormProjects />} />,
    },
]);

export default Routering;
