import React from 'react';
import '../ProgressBar/ProgressBar.css';

function ProgressBar({ progress }) {

  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressStyle}></div>
    </div>
  );
}

export default ProgressBar;
