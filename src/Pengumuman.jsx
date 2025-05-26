import SidebarComponent from './components/Sidebar';
import Modal from './components/Modal';
import { announcementList } from './constant/portal-const';
import './Pengumuman.css';
import { useState } from 'react';

function Pengumuman({ keyCloakClient }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedItem(null);
    }, 150);
  };

  return (
    <div className="portal-container">
      <SidebarComponent keyCloakClient={keyCloakClient}/>

      <main className="main-content">
        <div className="announcement-header">
          <h2>Pengumuman</h2>
          <div className="search-button">🔍</div>
        </div>

        <div className="announcement-grid">
          {announcementList.map((item, index) => (
            <div className="announcement-card hover:cursor-pointer" key={index} onClick={() => handleOpenModal(item)}>
              <div className="megaphone-icon">📢</div>
              <div className="announcement-title">{item.title}</div>
              <div className="announcement-description">{item.description}</div>
              <div className="announcement-badge">{item.badge}</div>

              <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                title={selectedItem?.title || 'Detail Item'}
              >
                <div className=' flex flex-col gap-3'>
                  <div className="announcement-description">{selectedItem?.description}</div>
                  <div className="announcement-badge">{selectedItem?.badge}</div>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Pengumuman;