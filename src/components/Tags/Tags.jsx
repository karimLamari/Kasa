import React from 'react';
import './Tags.scss';

const Tags = ({ tags }) => { 
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
