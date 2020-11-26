import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
