// AccountPage.jsx
import { useEffect, useState } from 'react';
import SidebarComponent from './components/Sidebar';
import './Akun.css';

const dataSections = [
  {
    title: 'Informasi pribadi',
    subtitle: 'Data yang umumnya ditampilkan di semua web myITS',
    items: [
      { icon: '🅰️', title: 'Nama', subtitle: 'Ubah nama lengkap dan nama panggilan' },
      { icon: '📅', title: 'Tanggal Lahir', subtitle: 'Melihat tanggal lahir' },
    ],
  },
  {
    title: 'Kontak',
    subtitle: 'Ubah email dan nomor ponsel',
    items: [
      { icon: '✉️', title: 'Email', subtitle: 'Perbarui dan verifikasi email' },
      { icon: '📞', title: 'Nomor Ponsel', subtitle: 'Perbarui dan verifikasi nomor telepon' },
    ],
  },
  {
    title: 'Lainnya',
    subtitle: 'Kata sandi dan preferensi tampilan',
    items: [
      { icon: '🔑', title: 'Kata Sandi', subtitle: 'Perbarui kata sandi' },
      { icon: '🔒', title: 'Multi-Factor Authentication', subtitle: 'Kelola multi-factor authentication Anda' },
      { icon: '⚙️', title: 'Pengaturan Web', subtitle: 'Sesuaikan preferensi tampilan' },
    ],
  },
];

function Akun({ keyCloakClient }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const info = await keyCloakClient.loadUserInfo();
        console.log(info)
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

      <main className="main-content">
        <h2 className="section-title">Akun</h2>
        <div className="profile-section">
          <div className="profile-pic">
            <div className="profile-icon">👨‍🎓</div>
          </div>
          <div className="account-info">
            <h2>{ `${userInfo.given_name} ${userInfo.family_name}` }</h2>
            <p className="role">{ userInfo.realm_access.roles[0] }</p>
          </div>
        </div>

        {dataSections.map((section, index) => (
          <section className="section" key={index}>
            <h3>{section.title}</h3>
            <p className="section-subtitle">{section.subtitle}</p>
            {section.items.map((item, idx) => (
              <div className="section-item" key={idx}>
                <div className="item-left">
                  <div className="item-icon">{item.icon}</div>
                  <div className="item-text">
                    <div className="item-title">{item.title}</div>
                    <div className="item-subtitle">{item.subtitle}</div>
                  </div>
                </div>
                <div className="item-arrow">›</div>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}

export default Akun;
