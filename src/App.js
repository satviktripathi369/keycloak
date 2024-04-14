import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import keycloak from './Keycloak'; // Import Keycloak instance
import Nav from './components/Nav';
import WelcomePage from './pages/Homepage';
import SecuredPage from './pages/Securedpage';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
