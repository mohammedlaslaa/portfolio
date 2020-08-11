import React from 'react';
import './style.scss';

function Header() {
  return (
    <ul className="HeaderMenuList d-flex mr-3">
      <li>Accueil</li>
      <li>À propos</li>
      <li>Compétences</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  );
}

export default Header;
