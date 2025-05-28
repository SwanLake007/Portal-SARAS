// AccountPage.jsx
import { dataSections } from './constant/portal-const';
import { useUserInfoStore } from './store/useStore';
import SidebarComponent from './components/Sidebar';
import './Akun.css';

function Akun({ keyCloakClient }) {
  const { userInfo } = useUserInfoStore();

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
            <h2>{ `${userInfo?.given_name} ${userInfo?.family_name}` }</h2>
            <p className="role">{ userInfo?.realm_access.roles[0] }</p>
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
