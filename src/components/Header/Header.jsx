import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Kasa Logo" className="header__logo" />
    <nav className="header__nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Accueil
      </NavLink>
      <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'active' : ''}>
        À propos
      </NavLink>
    </nav>
    </header>
    );
}