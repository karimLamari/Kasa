import React from 'react';
import logements from '../../assets/data/data.json';
import Card from '../Card/Card.jsx';
import './Logements.scss';

const Logements = () => {
  return (
    <div className="logements">
      {logements.map((logement) => (
        <Card
          id={logement.id}
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
};

export default Logements;
