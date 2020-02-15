import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../routes/home';
import Search from '../routes/search/root';
import Gallery from '../routes/gallery/root';
import NotFound from '../routes/notFound';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
    <Route path="/gallery">
      <Gallery />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
