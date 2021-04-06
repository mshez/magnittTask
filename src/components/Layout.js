import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

export default function Layout() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
}
