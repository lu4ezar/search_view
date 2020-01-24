import React from 'react';
import { Router } from '@reach/router';
import Home from '../home';
import Search from '../search';
import Gallery from '../gallery';
import NotFound from '../notFound';

const Main = () => (
  <Router>
    <Home path="/" />
    <Search path="search" />
    <Gallery path="gallery" />
    <NotFound default />
  </Router>
);

export default Main;
