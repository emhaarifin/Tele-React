import React from "react";
import { Route, Redirect } from "react-router-dom";
const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("KEY_TOKEN");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? <Redirect to={{ pathname: "/" }} /> : <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
