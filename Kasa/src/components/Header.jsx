import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import redLogo from '../assets/LOGO_rouge.svg'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={redLogo}  alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-link">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
