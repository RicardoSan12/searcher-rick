import React from 'react';
import { Link } from 'wouter';
import './Header.css';

const Header = () => {
  return (
    <section className="Header">
      <ul className="Header-menu">
        <li>
          <Link to="/">Casa</Link>
        </li>
        <li>
          <Link to="/character">PERSONAJES</Link>
        </li>
        <li>
          <Link to="/location">LOCACIONES</Link>
        </li>
        <li>
          <Link to="/episode">EPISODIOS</Link>
        </li>
      </ul>
    </section>
  );
};
export default Header;
