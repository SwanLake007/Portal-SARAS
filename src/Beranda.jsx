'use client'

import { useEffect, useState } from 'react';
import { portalApps, announcementList } from './constant/portal-const';
import SidebarComponent from './components/Sidebar';
import './Beranda.css';

function redirectFunc(redirect_url) {
  window.open(redirect_url, '_blank');
}

function Beranda({ keyCloakClient }) {
  const today = new Date();

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
      <SidebarComponent keyCloakClient={keyCloakClient}/>

      <main className="main-content home-layout">
        <div className="left-column">
          <div className="apps-section">
            <h2>Aplikasi dan Layanan</h2>
            <div className="apps-grid">
              {portalApps.filter((app) => userInfo.realm_access.roles.includes('admin')? app : app.isForAdmin === false).map((app, index) => (
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
              <a href="/account" className="manage-account">Kelola Akun ➔</a>
            </div>
          </div>

          <div className="date-card">
            <div className="day">{today.toLocaleDateString('id-ID', { weekday: 'long' })}</div>
            <div className="full-date">{today.getDate()} {today.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</div>
          </div>

          <div className="announcements-card">
            <h3>Pengumuman</h3>
            {announcementList.slice(0, 3).map((item, index) => (
              <div className="announcement-mini" key={index}>
                <div className="megaphone-mini">📢</div>
                <div>
                  <div className="announcement-title-mini"><p className='truncate'>{item.title}</p></div>
                  <div className="announcement-desc-mini"><p className='truncate'>{item.title}</p></div>
                </div>
              </div>
            ))}
            <div className='view-all-announcements-box'>
              <a href="/pengumuman" className="view-all-announcements">Lihat Semua Pengumuman</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Beranda;
