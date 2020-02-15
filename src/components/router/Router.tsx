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
    <Route exact path="/search">
      <Search />
    </Route>
    <Route exact path="/gallery">
      <Gallery />
    </Route>
    <Route exact path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
