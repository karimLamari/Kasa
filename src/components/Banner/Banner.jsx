import React from 'react';
import './Banner.scss';

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__image" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}
