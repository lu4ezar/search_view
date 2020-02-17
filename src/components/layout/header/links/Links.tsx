import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Links = () => (
  <div>
    <Link exact to="/" activeClassName="active">
      Home
    </Link>
    <Link exact to="search" activeClassName="active">
      Search
    </Link>
    <Link exact to="gallery" activeClassName="active">
      Gallery
    </Link>
  </div>
);

export default Links;
