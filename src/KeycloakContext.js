import React, { createContext, useContext, useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'keycloak-react-web';

const KeycloakContext = createContext();

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProviderComponent = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Menambahkan state loading

  useEffect(() => {
    const initializeKeycloak = async () => {
      const keycloakInstance = new Keycloak({
        url: 'http://10.3.131.175:8080', // Ganti dengan URL Keycloak Anda
        realm: 'S4RAS',
        clientId: 'front-end',
      });

      try {
        // Tunggu hingga inisialisasi selesai
        const authenticated = await keycloakInstance.init({
          onLoad: 'login-required', // Atur login-required atau check-sso sesuai kebutuhan
          pkceMethod: 'S256',
          checkLoginIframe: false,
        });

        console.log(authenticated);

        // Set status setelah berhasil
        setKeycloak(keycloakInstance);
        setAuthenticated(authenticated);
        setLoading(false); // Set loading ke false setelah inisialisasi selesai
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
        setLoading(false); // Set loading ke false meskipun terjadi error
      }
    };

    initializeKeycloak();

    return () => {
      setKeycloak(null);
      setAuthenticated(false);
      setLoading(true); // Pastikan loading direset saat komponen unmount
    };
  }, []);

  // Menampilkan loading sampai keycloak dan autentikasi selesai
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      <KeycloakProvider keycloak={keycloak}>
        {children}
      </KeycloakProvider>
    </KeycloakContext.Provider>
  );
};
