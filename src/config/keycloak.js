import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "http://localhost:8080/",
  realm: "SSO-Test",
  clientId: "asato-ai",
  clientSecret: "2tfcVMeMvxq4UJvQBweAZs88tkgUpTw2",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
