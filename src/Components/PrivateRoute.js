import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./Auth/auth-context";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);

  return authCtx.isLoggedIn ? <Component {...rest} /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
