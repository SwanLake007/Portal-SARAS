export const portalApps = [
  { name: 'Classroom', desc: 'Materi dan tugas', icon: '🎓', redirect_url: 'https://moodle.portal-saras.com/auth/oidc/', isForAdmin: false },
  { name: 'OneCloud', desc: 'Storage', icon: '📧', redirect_url: 'https://nextcloud.portal-saras.com/apps/user_oidc/login/1', isForAdmin: false },
  { name: 'NexaPlay', desc: 'An IPTV Service', icon: '🎞', redirect_url: 'https://iptv.portal-saras.com/sso/OID/start/Keycloak', isForAdmin: false },
  { name: 'Chat', desc: 'A VoIP Service', icon: '🗯️', redirect_url: 'https://voip.portal-saras.com', isForAdmin: false },
  { name: 'Monitoring Panel', desc: 'Grafana', icon: '📊', redirect_url: 'https://grafana.portal-saras.com', isForAdmin: true },
  { name: 'Settings', desc: 'Pengaturan', icon: '⚙️', redirect_url: 'https://google.com', isForAdmin: true },
]

export const announcementList = [
  { title: 'Lembaga Pengelola Dana Abadi', description: 'Lembaga Pengelola Dana Abadi (LPDA)', badge: 'Lainnya' },
  { title: 'Peluang Hibah Nasional & Internasional', description: 'Peluang Hibah Nasional & Internasional', badge: 'Kegiatan' },
  { title: 'Peringatan waspada penipuan...', description: 'Peringatan waspada penipuan atas nama pejabat ITS', badge: 'Sosialisasi' },
  { title: 'Beasiswa Boeing', description: 'Beasiswa Boeing', badge: 'Kegiatan' },
  { title: 'panduan UTBK', description: 'Panduan Lengkap UTBK-SNBT 2025 di ITS', badge: 'Sosialisasi' },
  { title: 'Ibadah Perayaan Paskah Civitas', description: 'Ibadah Perayaan Paskah Civitas Akademika Kristen ITS 2025', badge: 'Kegiatan' },
  { title: 'Beasiswa ADARO', description: 'Beasiswa ADARO', badge: 'Kegiatan' },
  { title: 'Women in Technopreneurship', description: 'Program pendanaan produk inovasi menuju pasar', badge: 'Kegiatan' },
  { title: 'ISICO 2025', description: 'CALL FOR PAPERS AI Powered Business Transformation', badge: 'Kegiatan' },
]

export const dataSections = [
  {
    title: 'Informasi pribadi',
    subtitle: 'Data yang umumnya ditampilkan di semua web Portal',
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
