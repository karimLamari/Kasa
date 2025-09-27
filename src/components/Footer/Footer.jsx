import React from 'react';
import logo from '../../assets/images/Footer.png'; 
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
