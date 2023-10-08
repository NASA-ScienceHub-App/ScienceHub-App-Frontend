import React from "react";
import ReactWordcloud from "react-wordcloud";

function WordCloudComponent() {
    const words = [
        { text: 'React', value: 10 },
        { text: 'JavaScript', value: 9 },
        { text: 'Web', value: 9 },
        { text: 'Django', value: 12 },
        { text: 'HTML', value: 8 },
        { text: 'CSS', value: 7 },
        { text: 'Node.js', value: 11 },
        { text: 'Vue.js', value: 6 },
        { text: 'Python', value: 10 },
        { text: 'Angular', value: 7 },
    ];
  
    const options = {
      fontFamily: 'Arial',
      rotations: 2,
      rotationAngles: [0, 90],
    };
  
    return (
      <div style={{ width: '500px', height: '300px' }}>
        <ReactWordcloud words={words} options={options} />
      </div>
    );
  }
  
  export default WordCloudComponent;