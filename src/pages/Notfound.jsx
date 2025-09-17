import React from 'react';
import './Notfound.scss';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Notfound;
