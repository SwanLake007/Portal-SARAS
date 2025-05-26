'use client'

const SidebarComponent = ({ keyCloakClient }) => {
  function logoutFunc(keyCloakClient) {
    keyCloakClient.logout();
  }

  return (
    <aside className="fixed flex flex-col justify-between h-screen w-64 bg-white p-5 border-r-[#e0e0e0] border-r-2 border-solid">
      <div className="sidebar-top">
        <div className="sidebar-header">
          <h1 className="text-xl font-bold"><span className='text-blue-700'>S4RAS</span> Portal</h1>
        </div>
        <nav className="mt-10">
          <a href="/" className="active block p-2.5 rounded-xl font-medium text-stone-500 no-underline hover:bg-black/5">🏠 Beranda</a>
          <a href="/account" className="block p-2.5 rounded-xl font-medium text-stone-500 no-underline hover:bg-black/5">👤 Akun</a>
          <a href="/pengumuman" className="block p-2.5 rounded-xl font-medium text-stone-500 no-underline hover:bg-black/5">📢 Pengumuman</a>
        </nav>
      </div>
      <nav className="mt-10">
        <div className="block p-2.5 rounded-xl font-medium text-stone-500 no-underline hover:bg-black/5 hover:cursor-pointer" onClick={() => {logoutFunc(keyCloakClient)}}>Logout</div>
      </nav>
    </aside>
  )
}

export default SidebarComponent;