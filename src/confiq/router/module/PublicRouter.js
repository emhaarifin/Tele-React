import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, setSocket, ...rest }) => {
  const isAuth = localStorage.getItem('KEY_TOKEN');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return (
            <>
              <Redirect to="/" />
              <Component {...props} />
            </>
          );
        } else {
          return <Component {...props} setSocket={setSocket} />;
        }
      }}
    />
  );
};

export default PublicRoute;
