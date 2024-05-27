import React from "react";
import keycloak from "../config/keycloak";

const LoginButton = ({ idpHint }) => {
  const handleLogin = () => {
    keycloak.login({ idpHint });
  };

  return (
    <button onClick={handleLogin}>
      Login with {idpHint.charAt(0).toUpperCase() + idpHint.slice(1)}
    </button>
  );
};

export default LoginButton;
