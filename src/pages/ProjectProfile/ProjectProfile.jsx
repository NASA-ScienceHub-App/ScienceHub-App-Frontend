import React from 'react';
// import './ProjectProfile.css'

function ProjectProfile({ name, description, onClick }) {
  return (
    // <button onClick={onClick} className="project-containe">
       <div className="project-profile">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Ver projeto</p>
      </div>
    // </button>
  );
}

export default ProjectProfile;
