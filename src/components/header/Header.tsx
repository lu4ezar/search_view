import React from 'react';
import { Link } from '@reach/router';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="search">Search</Link>
      <Link to="gallery">Gallery</Link>
    </nav>
  </header>
);

export default Header;
