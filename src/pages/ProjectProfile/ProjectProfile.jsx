import React from 'react';

function ProjectProfile({ name, description, onClick }) {
  return (
    <button onClick={onClick} className="project-profile-button">
      <div className="project-profile">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Ver projeto</p>
      </div>
    </button>
  );
}

export default ProjectProfile;
