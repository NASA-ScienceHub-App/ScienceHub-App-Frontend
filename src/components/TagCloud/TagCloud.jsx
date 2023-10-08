// // src/components/TagCloud.js
// import React from 'react';
// import './TagCloud.css'

// const TagCloud = ({ tags }) => {
//   // Lógica para determinar tamanhos e cores com base na frequência/importância das tags

//   return (
//     <div className="tag-cloud">
//       {tags.map((tag, index) => (
//         <span
//           key={index}
//           className={`tag ${tag.importance === 'high' ? 'high-importance' : ''}`}
//         >
//           {tag.text}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default TagCloud;

// src/components/TagCloud.js
import React from 'react';
import './TagCloud.css';

const TagCloud = ({ tags }) => {
  const maxFontSize = 30;
  const minFontSize = 12;

  const determineFontSize = (count, maxCount, minSize, maxSize) => {
    const sizeRange = maxSize - minSize;
    return minSize + (count / maxCount) * sizeRange;
  };

  const maxCount = Math.max(...tags.map((tag) => tag.count));

  return (
    <div className="tag-cloud">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="tag"
          style={{
            fontSize: `${determineFontSize(tag.count, maxCount, minFontSize, maxFontSize)}px`,
          }}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
};

export default TagCloud;
