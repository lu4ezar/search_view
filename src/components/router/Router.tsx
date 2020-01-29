import React from 'react';
import { Router as ReachRouter } from '@reach/router';
import Home from '../routes/home';
import Search from '../routes/search/root';
import Gallery from '../routes/gallery/root';
import NotFound from '../routes/notFound';

const Router = () => (
  <ReachRouter>
    <Home path="/" />
    <Search path="/search" />
    <Gallery path="/gallery" />
    <NotFound default />
  </ReachRouter>
);

export default Router;
