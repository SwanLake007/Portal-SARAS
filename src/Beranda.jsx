// HomePage.jsx
import React, { useEffect, useState } from 'react';
import './Beranda.css';

const apps = [
  { name: 'Classroom', desc: 'Materi dan tugas', icon: '🎓', redirect_url: 'https://10.3.132.67/auth/oidc' },
  { name: 'OneCloud', desc: 'Email', icon: '📧', redirect_url: 'https://10.3.132.70' },
  { name: 'NexaPlay', desc: 'Streaming Service', icon: '👥', redirect_url: 'https://google.com' },
  { name: 'Chat', desc: 'A VoIP Service', icon: '🗯️', redirect_url: 'https://google.com' },
  { name: 'Settings', desc: 'Pengaturan', icon: '⚙️', redirect_url: 'https://google.com' },
];

const announcements = [
  { title: 'Ijazah Palsu Jokowi Terungkap', desc: 'Peringatan' },
  { title: 'Fufufafa  IPK 2.3', desc: 'Waspada Indonesia Cemas 2050' },
  { title: 'Peringatan waspada penipuan atas nama pejabat ITS', desc: 'Peringatan waspada penipuan' },
];

function redirectFunc(redirect_url) {
  window.open(redirect_url, '_blank');
}

function logoutFunc(keyCloakClient) {
  keyCloakClient.logout();
}

function Beranda({ keyCloakClient }) {
  const today = new Date();
  //const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //const formattedDate = today.toLocaleDateString('id-ID', options);

  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const info = await keyCloakClient.loadUserInfo();
        setUserInfo(info);
        setLoading(false);
      } catch(error) {
        console.error('Gagal memuat informasi pengguna:', error);
      }
    }

    fetchUserInfo();
  }, [keyCloakClient]);

  if(isLoading) return <div>Loading...</div>

  return (
    <div className="portal-container">
      <aside className="sidebar">
        <div className='sidebar-top'>
          <div className="sidebar-header">
            <h1 className="logo"><span>S4RAS</span> Portal</h1>
          </div>
          <nav className="sidebar-menu">
            <a href="/" className="menu-item active">🏠 Beranda</a>
            <a href="/account" className="menu-item">👤 Akun</a>
            <a href="/pengumuman" className="menu-item">📢 Pengumuman</a>
          </nav>
        </div>
        <nav className="sidebar-menu">
          <div className="menu-item" onClick={() => {logoutFunc(keyCloakClient)}}>Logout</div>
        </nav>
      </aside>

      <main className="main-content home-layout">
        <div className="left-column">
          <div className="apps-section">
            <h2>Aplikasi dan Layanan</h2>
            <div className="apps-grid">
              {apps.map((app, index) => (
                <div className="app-card" key={index} onClick={() => {redirectFunc(app.redirect_url)}}>
                  <div className="app-icon">{app.icon}</div>
                  <div>
                    <div className="app-name">{app.name}</div>
                    <div className="app-desc">{app.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="show-all-btn">⬇️ Tampilkan Semua Aplikasi</button>
          </div>
        </div>

        <div className="right-column">
          <div className="profile-card">
            <div className="profile-icon-large">👨‍🎓</div>
            <div className="profile-info">
              <div className="profile-name">{ `Halo, ${userInfo.given_name} ${userInfo.family_name}` }</div>
              <div className="profile-email">{ userInfo.email }</div>
              <div className="manage-account">Kelola Akun ➔</div>
            </div>
          </div>

          <div className="date-card">
            <div className="day">{today.toLocaleDateString('id-ID', { weekday: 'long' })}</div>
            <div className="full-date">{today.getDate()} {today.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</div>
          </div>

          <div className="announcements-card">
            <h3>Pengumuman</h3>
            {announcements.map((item, index) => (
              <div className="announcement-mini" key={index}>
                <div className="megaphone-mini">📢</div>
                <div>
                  <div className="announcement-title-mini">{item.title}</div>
                  <div className="announcement-desc-mini">{item.desc}</div>
                </div>
              </div>
            ))}
            <button className="view-all-announcements">Lihat Semua Pengumuman</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Beranda;
