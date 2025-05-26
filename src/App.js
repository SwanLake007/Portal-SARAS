import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useAuth from './hooks/useAuth';

import Beranda from './Beranda';
import Akun from './Akun';
import Pengumuman from './Pengumuman';

const AppRoutes = () => {
  const [isLogin, keycloakClient] = useAuth();

  if (!isLogin) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda keyCloakClient={keycloakClient} />} />
        <Route path="/account" element={<Akun keyCloakClient={keycloakClient}/>} />
        <Route path="/pengumuman" element={<Pengumuman keyCloakClient={keycloakClient}/>} />
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
