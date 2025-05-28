import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useAuth from './hooks/useAuth';
import LoadingComponent from './components/Loading';

import Beranda from './Beranda';
import Akun from './Akun';
import Pengumuman from './Pengumuman';
import LogoutPage from './LogoutPage';

const AppRoutes = () => {
  const [isLogin] = useAuth();

  if (!isLogin) {
    return (<LoadingComponent/>);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/account" element={<Akun />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/logout" element={<LogoutPage />} />
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
