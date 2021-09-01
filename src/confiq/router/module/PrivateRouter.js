import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, socket, ...rest }) => {
  const isAuth = localStorage.getItem('KEY_TOKEN');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} socket={socket} />;
        } else {
          return (
            <>
              <Redirect to="/login" />
              <Component {...props} />
            </>
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
