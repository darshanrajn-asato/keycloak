import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import keycloak from "./config/keycloak";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    keycloak
      .init({ onLoad: "check-sso" })
      .then((authenticated) => {
        setKeycloakInitialized(true);
        if (authenticated) {
          console.log("Authenticated");
        } else {
          console.log("Not authenticated");
        }
      })
      .catch((err) => console.error("Failed to initialize Keycloak", err));
  }, []);

  if (!keycloakInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <h1>Keycloak SSO</h1>
        {keycloak.authenticated ? <LogoutButton /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<PrivateRoute />}>
            <Route path="/protected" element={<ProtectedComponent />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated) {
      navigate("/protected");
    }
  }, [navigate]);

  return (
    <div>
      <LoginButton idpHint="microsoft" />
      <LoginButton idpHint="google" />
    </div>
  );
};

const ProtectedComponent = () => (
  <div>
    <h2>Protected Content</h2>
    <p>This content is protected and requires authentication.</p>
  </div>
);

export default App;
