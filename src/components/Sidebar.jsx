'use client'
import { useNavigate, useLocation } from 'react-router-dom'

const SidebarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  
  function logoutFunc() {
    navigate('/logout');
  }

  function redirectPage(path) {
    navigate(path);
  }

  const isPathActive = (path) =>
    pathname === path ? 'bg-black/5 text-black' : 'text-stone-500';

  return (
    <aside className="fixed flex flex-col justify-between h-screen w-64 bg-white p-5 border-r-[#e0e0e0] border-r-2 border-solid">
      <div className="sidebar-top">
        <div onClick={() => redirectPage('/')} className="sidebar-header hover:cursor-pointer ">
          <h1 className="text-xl font-bold"><span className='text-blue-700'>S4RAS</span> Portal</h1>
        </div>
        <nav className="page-selection mt-10">
          <p onClick={() => redirectPage('/')} className={`block p-2.5 rounded-xl font-medium no-underline hover:bg-black/5 hover:cursor-pointer ${isPathActive('/')}`}>🏠 Beranda</p>
          <p onClick={() => redirectPage('/account')} className={`block p-2.5 rounded-xl font-medium no-underline hover:bg-black/5 hover:cursor-pointer ${isPathActive('/account')}`}>👤 Akun</p>
          <p onClick={() => redirectPage('/pengumuman')} className={`block p-2.5 rounded-xl font-medium no-underline hover:bg-black/5 hover:cursor-pointer ${isPathActive('/pengumuman')}`}>📢 Pengumuman</p>
        </nav>
      </div>
      <nav className="mt-10">
        <div className="block p-2.5 rounded-xl font-medium text-stone-500 no-underline hover:bg-black/5 hover:cursor-pointer" onClick={() => {logoutFunc()}}>Logout</div>
      </nav>
    </aside>
  )
}

export default SidebarComponent;