import React from "react";
import keycloak from "../config/keycloak";

const LogoutButton = () => {
  const handleLogout = () => {
    keycloak.logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
