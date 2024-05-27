import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import keycloak from "../config/keycloak";

const PrivateRoute = () => {
  return keycloak.authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
