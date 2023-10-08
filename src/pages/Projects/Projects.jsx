import React from 'react';
import "./styles.css";
import ShowProject from "../../components/ShowProject/ShowProject";

export default function Projects() {
  return (
    <div className="show-project-profile">
      <ShowProject click={() => navigate("/view-projects")} />
      <ShowProject click={() => navigate("/view-projects")} />
      <ShowProject click={() => navigate("/view-projects")} />
      <ShowProject click={() => navigate("/view-projects")} />
    </div>
  )
}
