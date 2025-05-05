// KeycloakContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext();

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const keycloakInstance = new Keycloak({
      url: 'http://10.3.131.175:8080',
      realm: 'S4RAS',
      clientId: 'front-end',
    });

    keycloakInstance.init({ onLoad: 'login-required' }).then(authenticated => {
      setKeycloak(keycloakInstance);
      setAuthenticated(authenticated);
    }).catch((error) => {
      console.error("Keycloak initialization failed:", error);
    });

    // Cleanup on component unmount
    return () => {
      setKeycloak(null);
      setAuthenticated(false);
    };
  }, []);

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};
