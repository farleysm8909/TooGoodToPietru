import React, { useState } from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navBar">
      <Link to="/" className="title">
        Home
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/rsvp">RSVP</NavLink>
        </li>
        <li>
          <NavLink to="/wedding-info">Wedding Info</NavLink>
        </li>
        <li>
          <NavLink to="/our-story">Our Story</NavLink>
        </li>
        <li>
          <NavLink to="/attractions">Attractions</NavLink>
        </li>
        <li>
          <NavLink to="/registry">Registry</NavLink>
        </li>
      </ul>
    </nav>
  );
};
