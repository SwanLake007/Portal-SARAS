import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { KeycloakProviderComponent, useKeycloak } from './KeycloakContext';
import Beranda from './Beranda';
import Login from './Login';

const AppRoutes = () => {
  const { authenticated } = useKeycloak();

  if (!authenticated) {
    return <div>Loading...</div>; // Tampilkan loading jika belum terautentikasi
  }

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Beranda />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <KeycloakProviderComponent>
      <AppRoutes />
    </KeycloakProviderComponent>
  );
}

export default App;
