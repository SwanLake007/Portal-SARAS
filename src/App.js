// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { KeycloakProvider, useKeycloak } from './KeycloakContext'; // import context
import Beranda from './Beranda';
import Login from './Login';

const AppRoutes = () => {
  const { keycloak, authenticated } = useKeycloak();

  if (!authenticated) {
    return <div>Loading...</div>;  // Loading state jika belum terautentikasi
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
    <KeycloakProvider>
      <AppRoutes />
    </KeycloakProvider>
  );
}

export default App;
