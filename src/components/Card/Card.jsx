import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export default function Card({id,title, cover }) {
  return (
    <div>
      <Link to={`/logement/${id}`} key={id} className='card'>
        <img src={cover} alt={title} className="card__image" />
        <div className="card__overlay">
          <h2 className="card__title">{title}</h2>
        </div>
      </Link>
    </div>
  );
}
