import React from 'react';
import './Card.scss';

export default function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </div>
  );
}
