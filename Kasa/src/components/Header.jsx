import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Header.css';
import redLogo from '../assets/LOGO_rouge.svg'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={redLogo}  alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
