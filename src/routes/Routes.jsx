import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import FormPublication from "../pages/FormPublication/FormPublication.jsx";

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
]);

export default Routering;
