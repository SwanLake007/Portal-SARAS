import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { KeycloakProviderComponent, useKeycloak } from './KeycloakContext';

import useAuth from './hooks/useAuth';

import Beranda from './Beranda';
//import Login from './Login';

const AppRoutes = () => {
  const [isLogin, keycloakClient] = useAuth();
  console.log(keycloakClient);

  if (!isLogin) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda keyCloakClient={keycloakClient} />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
