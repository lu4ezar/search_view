import React from 'react';
import { Router as ReachRouter } from '@reach/router';
import Home from '../home';
import Search from '../search';
import Gallery from '../gallery/root';
import NotFound from '../notFound';

const Router = () => (
  <ReachRouter>
    <Home path="/" />
    <Search path="/search" />
    <Gallery path="/gallery" />
    <NotFound default />
  </ReachRouter>
);

export default Router;
