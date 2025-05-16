import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const isRun = useRef(false);
  const [keycloakClient, setKeycloakClient] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    const client = new Keycloak({
      url: 'https://keycloak.portal-saras.com',
      realm: 'S4RAS',
      clientId: 'front-end',
    });

    isRun.current = true;
    client
      .init({
        onLoad: 'login-required',
        pkceMethod: 'S256',
        checkLoginIframe: false,
      })
      .then((res) => {
        setLogin(res);
        setKeycloakClient(client);
      });
  }, []);

  return [isLogin, keycloakClient];
};

export default useAuth;