import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../fire';
import * as routes from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.SIGN_IN,
            state: { from: props.location },
          }}
        />
      ))}
  />
);

export default PrivateRoute;
