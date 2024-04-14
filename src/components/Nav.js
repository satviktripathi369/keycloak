import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <nav>
      {keycloak.authenticated ? (
        <div>
          <p>Welcome, {keycloak.tokenParsed.preferred_username}</p>
          <Link to="/secured">Go to Secured Page</Link>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/">Home</Link>
          <button onClick={() => keycloak.login()}>Login</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
