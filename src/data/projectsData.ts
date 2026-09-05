// Auto-generated curated project ideas database for DevSpin
// Total ideas: 155 curated, unique, high-value developer projects

export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ai' | 'game' | 'backend' | 'tools';
  difficulty: 'pemula' | 'menengah' | 'mahir';
  duration: '< 1 hari' | '1 minggu' | '1 bulan+';
  stack: string[];
  domain: 'edukasi' | 'finance' | 'kesehatan' | 'hiburan' | 'produktivitas' | 'sosial';
  goal: ('portofolio' | 'belajar' | 'lomba' | 'iseng')[];
  tags: string[];
  highlights: string;
}

export const CATEGORY_LABELS: Record<string, { label: string; color: string; desc: string }> = {
  web: { label: 'Web Development', color: '#00e5ff', desc: 'Frontend, Fullstack, Web APIs' },
  mobile: { label: 'Mobile App', color: '#38bdf8', desc: 'React Native, Flutter, Offline-First' },
  ai: { label: 'AI & Machine Learning', color: '#a78bfa', desc: 'LLM, RAG, Vision, Intelligent Agents' },
  game: { label: 'Game Development', color: '#f59e0b', desc: '2D/3D Canvas, Phaser, Physics, Arcade' },
  backend: { label: 'Backend & DevOps', color: '#00e5ff', desc: 'Go, Rust, Microservices, Distributed Systems' },
  tools: { label: 'DevTools & Data', color: '#38bdf8', desc: 'CLI, Extensions, Utilities, Visualizers' }
};

export const DIFFICULTY_CONFIG: Record<string, { label: string; badgeClass: string; borderClass: string }> = {
  pemula: {
    label: 'Pemula',
    badgeClass: 'bg-devDark-800 text-termGreen border-termGreen/40',
    borderClass: 'border-termGreen/40'
  },
  menengah: {
    label: 'Menengah',
    badgeClass: 'bg-devDark-800 text-devAmber border-devAmber/40',
    borderClass: 'border-devAmber/40'
  },
  mahir: {
    label: 'Mahir',
    badgeClass: 'bg-devDark-800 text-devRose border-devRose/40',
    borderClass: 'border-devRose/40'
  }
};

export const PROJECT_IDEAS: ProjectIdea[] = [
  {
    "id": "web-01",
    "title": "Markdown Blog Engine with Live Canvas Preview",
    "description": "Platform blogging minimalis dengan editor split-pane dan parser markdown instan. Mendukung ekspor PDF, rendering diagram Mermaid, dan penyimpanan draft otomatis ke IndexedDB.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Tailwind CSS",
      "IndexedDB"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Markdown",
      "Editor",
      "Frontend"
    ],
    "highlights": "Rendering Mermaid langsung dan offline-first dengan IndexedDB."
  },
  {
    "id": "web-02",
    "title": "DevSnippet: Cloud Clipboard dengan Enkripsi Client-side",
    "description": "Aplikasi sharing cuplikan kode sementara ala Pastebin dengan password dan durasi self-destruct. Data dienkripsi menggunakan Web Crypto API di browser sebelum dikirim ke server.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Web Crypto API",
      "Redis",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Security",
      "Fullstack",
      "Encryption"
    ],
    "highlights": "Zero-knowledge server model menggunakan AES-GCM 256-bit."
  },
  {
    "id": "web-03",
    "title": "Kanban Board Interaktif dengan Optimistic UI",
    "description": "Aplikasi manajemen tugas drag and drop yang responsif dengan status board kustom. Dilengkapi undo-redo history dan sinkronisasi realtime multi-tab menggunakan BroadcastChannel API.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "dnd-kit",
      "Zustand",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Drag and Drop",
      "State Management"
    ],
    "highlights": "Dukungan keyboard shortcut penuh dan multi-tab sync tanpa server."
  },
  {
    "id": "web-04",
    "title": "SaaS Feedback Widget Generator",
    "description": "Layanan yang menghasilkan satu baris script embed untuk menampilkan modal feedback pengguna pada website klien. Menyediakan dashboard analitik sentimen dan rating secara visual.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "TypeScript",
      "Vanilla JS Widget",
      "Node.js",
      "PostgreSQL"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "SaaS",
      "Widget",
      "Analytics"
    ],
    "highlights": "Bundle script widget ringan di bawah 15KB tanpa external dependencies."
  },
  {
    "id": "web-05",
    "title": "Collaborative Whiteboard Realtime",
    "description": "Papan tulis kolaboratif berbasis web yang memungkinkan beberapa user menggambar sketsa dan diagram bersama. Menggunakan WebSocket dan WebRTC untuk latensi minimal.",
    "category": "web",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "React",
      "HTML5 Canvas",
      "WebRTC",
      "Socket.io"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Realtime",
      "Canvas",
      "Networking"
    ],
    "highlights": "Reconciliation CRDT untuk resolusi konflik sinkronisasi gambar."
  },
  {
    "id": "web-06",
    "title": "Personal Finance & Subscription Tracker",
    "description": "Dashboard pencatat pengeluaran rutin dan langganan digital dengan grafik proyeksi arus kas bulanan. Dilengkapi simulasi penghematan dan peringatan jatuh tempo via email.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Chart.js",
      "Prisma",
      "PostgreSQL"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Finance",
      "Dashboard",
      "Charts"
    ],
    "highlights": "Ekspor rekap keuangan bulanan ke format CSV dan PDF interaktif."
  },
  {
    "id": "web-07",
    "title": "Typing Speed Arena dengan Ghost Replay",
    "description": "Game tes kecepatan mengetik kode pemrograman dengan fitur replay rekaman ketikan pengguna sebelumnya (ghost mode). Menyediakan cuplikan sintaks dari 10 bahasa pemrograman populer.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "Typing",
      "Gamification",
      "Frontend"
    ],
    "highlights": "Algoritma penghitungan WPM dan akurasi per karakter yang presisi."
  },
  {
    "id": "web-08",
    "title": "E-Commerce Headless Storefront dengan Cart Persisten",
    "description": "Toko online modern dengan optimasi performa tinggi, filtering kategori dinamis, dan checkout simulasi. Menggunakan state machine untuk alur transaksi yang andal.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Stripe Mock"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio"
    ],
    "tags": [
      "E-Commerce",
      "State Machine",
      "UI/UX"
    ],
    "highlights": "Skor Lighthouse 100 dengan image optimization dan caching agresif."
  },
  {
    "id": "web-09",
    "title": "Interactive CSS Flexbox & Grid Playground",
    "description": "Alat visual edukasi untuk memahami flexbox dan CSS grid melalui manipulasi kontrol slider interaktif. Menghasilkan kode CSS siap salin beserta visualisasi box-model.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "CSS",
      "Educational",
      "Interactive"
    ],
    "highlights": "Animasi perpindahan layout saat properti CSS diubah secara langsung."
  },
  {
    "id": "web-10",
    "title": "Remote Work Timezone Planner",
    "description": "Visualizer zona waktu untuk tim remote global agar mudah mencari irisan jam kerja optimal. Dilengkapi integrasi kalender dan ekspor jadwal pertemuan ke Google Calendar.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "date-fns-tz",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "iseng",
      "belajar"
    ],
    "tags": [
      "Timezone",
      "Productivity",
      "Utility"
    ],
    "highlights": "Slider waktu sinkron yang menggeser jam seluruh kota secara simultan."
  },
  {
    "id": "web-11",
    "title": "Web Audio Synthesizer & Beat Maker",
    "description": "Synthesizer audio virtual di browser dengan keyboard piano interaktif, sequencer 16-step, dan kontrol osilator (sine, square, sawtooth). Semua suara dihasilkan lewat Web Audio API.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "Web Audio API",
      "Canvas",
      "CSS Modules"
    ],
    "domain": "hiburan",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Audio",
      "Web Audio API",
      "Creative"
    ],
    "highlights": "Visualisasi frekuensi audio real-time menggunakan Canvas oscilloscope."
  },
  {
    "id": "web-12",
    "title": "Resume & CV Builder dengan Live ATS Checker",
    "description": "Pembuat curriculum vitae interaktif dengan template modern yang dapat diekspor langsung ke PDF. Dilengkapi scoring keterbacaan ATS dan saran perbaikan kata kerja kunci.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "jspdf",
      "Tailwind CSS",
      "Zustand"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Career",
      "PDF Generation",
      "ATS"
    ],
    "highlights": "Preview 1:1 real-time dengan layout dinamis ramah mesin cetak."
  },
  {
    "id": "web-13",
    "title": "Komunitas Belajar: Flashcard Spaced Repetition Web App",
    "description": "Aplikasi kartu belajar berbasis algoritma SuperMemo SM-2 untuk mengingat konsep koding dan bahasa asing. Menyediakan statistik ingatan jangka panjang dan mode kuis cepat.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Supabase"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "SRS",
      "Learning",
      "Algorithm"
    ],
    "highlights": "Implementasi algoritma SM-2 untuk interval peninjauan optimal."
  },
  {
    "id": "web-14",
    "title": "Donation & Crowdfunding Transparent Portal",
    "description": "Portal galang dana sosial dengan visualisasi progress target, riwayat donatur, dan update penggunaan dana berkala. Menyediakan simulasi gateway pembayaran QRIS.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL"
    ],
    "domain": "sosial",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Crowdfunding",
      "Social Impact",
      "Fullstack"
    ],
    "highlights": "Audit log transparan untuk setiap transaksi pengeluaran dana kampanye."
  },
  {
    "id": "web-15",
    "title": "Web-Based Screen Recorder & GIF Exporter",
    "description": "Alat rekam layar browser tanpa instalasi software menggunakan MediaStream Recording API. Pengguna dapat memotong video dan mengonversinya langsung ke format GIF atau WebM.",
    "category": "web",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Vue.js",
      "MediaRecorder API",
      "ffmpeg.wasm",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Video",
      "WebAssembly",
      "Browser API"
    ],
    "highlights": "Transcoding video client-side menggunakan WebAssembly ffmpeg."
  },
  {
    "id": "web-16",
    "title": "Health Habit Tracker dengan Pixel Grid",
    "description": "Pelacak kebiasaan hidup sehat harian dengan tampilan kotak pixel ala GitHub contribution heatmap. Menyediakan analisis streak dan pengingat minum air.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Lucide Icons",
      "Tailwind CSS",
      "LocalStorage"
    ],
    "domain": "kesehatan",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Habit",
      "Health",
      "Heatmap"
    ],
    "highlights": "Heatmap tahunan bergaya visual konsisten dan ringkasan persentase bulanan."
  },
  {
    "id": "web-17",
    "title": "Recipe Finder & Meal Prep Nutrition Calculator",
    "description": "Pencari resep masakan berdasarkan sisa bahan yang ada di kulkas. Menghitung otomatis total kalori, makronutrisi, serta estimasi biaya belanja per porsi.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "Tailwind CSS",
      "Spoonacular API",
      "Chart.js"
    ],
    "domain": "kesehatan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Food",
      "Nutrition",
      "API Integration"
    ],
    "highlights": "Filter alergi dan kalkulator makro nutrisi otomatis per menu."
  },
  {
    "id": "web-18",
    "title": "Event RSVP & Ticketing Platform dengan QR Scanner",
    "description": "Sistem registrasi seminar dan workshop dengan e-tiket ber-QR Code unik. Panitia dapat memindai tiket peserta langsung melalui kamera browser.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "html5-qrcode",
      "Supabase",
      "Tailwind"
    ],
    "domain": "sosial",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Event",
      "QR Code",
      "Ticketing"
    ],
    "highlights": "Pemindai QR kamera responsif tanpa perlu instalasi aplikasi native."
  },
  {
    "id": "web-19",
    "title": "Virtual Classroom Quiz Platform Realtime",
    "description": "Platform kuis interaktif kelas mirip Kahoot dengan leaderboard realtime dan timer berdetik. Guru membuat kuis dan siswa masuk via PIN ruangan 6 digit.",
    "category": "web",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Next.js",
      "Socket.io",
      "Express",
      "Tailwind CSS"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Quiz",
      "WebSockets",
      "EdTech"
    ],
    "highlights": "Skor dinamis berdasarkan kecepatan menjawab dan streak benar."
  },
  {
    "id": "web-20",
    "title": "Open Source Contributor Showcase",
    "description": "Website direktori yang menampilkan profil developer, kontribusi GitHub terbaru, dan visualisasi dependensi proyek open source yang didukung.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "GitHub REST API",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Open Source",
      "GitHub API",
      "Portfolio"
    ],
    "highlights": "Pencarian repositori ramah pemula dengan filter label good-first-issue."
  },
  {
    "id": "web-21",
    "title": "Web-based SQL Query Visualizer & Playground",
    "description": "Lingkungan latihan SQL interaktif di browser berbasis sql.js (SQLite WebAssembly). Pengguna menulis query dan melihat relasi tabel serta eksekusi secara visual.",
    "category": "web",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "React",
      "sql.js",
      "Monaco Editor",
      "Tailwind CSS"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "SQL",
      "WebAssembly",
      "Developer Tools"
    ],
    "highlights": "Eksekusi SQLite 100% lokal di browser tanpa server database eksternal."
  },
  {
    "id": "web-22",
    "title": "Crypto Portfolio Tracker & Dollar-Cost-Averaging Simulator",
    "description": "Pelacak aset kripto dengan integrasi harga pasar real-time dan kalkulator simulasi investasi berkala (DCA). Menyediakan grafik alokasi risiko portofolio.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "CoinGecko API",
      "Recharts",
      "Tailwind"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Crypto",
      "Finance",
      "Charts"
    ],
    "highlights": "Simulasi historis keuntungan DCA hingga 3 tahun ke belakang."
  },
  {
    "id": "web-23",
    "title": "Interactive Code Diff & Review Viewer",
    "description": "Alat pembanding dua cuplikan kode dengan tampilan side-by-side dan inline diff. Mendukung highlight baris, komentar anotasi, dan copy patch format git.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "diff-match-patch",
      "PrismJS",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Diff",
      "Code Viewer",
      "Syntax"
    ],
    "highlights": "Algoritma pembanding karakter yang cepat dan minim konsumsi memori."
  },
  {
    "id": "web-24",
    "title": "Community Board Diskusi Anonim Terenkripsi",
    "description": "Forum diskusi komunitas dengan identitas anonim terverifikasi tanpa menyimpan data IP atau tracking cookie. Thread otomatis terhapus setelah 48 jam.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Redis Upstash",
      "Tailwind CSS"
    ],
    "domain": "sosial",
    "goal": [
      "iseng",
      "portofolio"
    ],
    "tags": [
      "Privacy",
      "Community",
      "Ephemeral"
    ],
    "highlights": "Sistem anti-spam menggunakan proof-of-work puzzle sederhana di browser."
  },
  {
    "id": "web-25",
    "title": "3D Product Customizer dengan Three.js",
    "description": "Halaman katalog produk e-commerce interaktif dengan model 3D yang dapat diputar 360 derajat. Pengguna dapat mengubah material, warna, dan pencahayaan secara langsung.",
    "category": "web",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "React",
      "Three.js",
      "@react-three/fiber",
      "Tailwind"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "3D",
      "WebGL",
      "Three.js"
    ],
    "highlights": "Dukungan upload file GLTF kustom dengan kalkulasi bayangan dinamis."
  },
  {
    "id": "web-26",
    "title": "Podcast Audio Player dengan Transkrip Auto-Scroll",
    "description": "Pemutar audio podcast yang menampilkan transkrip tersinkronisasi per detik. Mengklik kalimat pada transkrip akan melompatkan posisi audio secara instan.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "HTML5 Audio",
      "Tailwind CSS"
    ],
    "domain": "hiburan",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Audio",
      "Accessibility",
      "Media"
    ],
    "highlights": "Deteksi timeline audio presisi dan scrolling halus pada teks transkrip."
  },
  {
    "id": "web-27",
    "title": "API Mock Server & Schema Tester Online",
    "description": "Aplikasi web untuk membuat endpoint REST API tiruan secara instan dengan struktur JSON acak. Mendukung latency simulation dan custom response status code.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Faker.js",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "API",
      "Mocking",
      "DevTools"
    ],
    "highlights": "URL webhook unik untuk pengetesan request webhook tanpa konfigurasi."
  },
  {
    "id": "web-28",
    "title": "Patient Appointment & Doctor Consultation Booking",
    "description": "Sistem reservasi konsultasi klinik kesehatan dengan pemilihan jadwal dokter, input riwayat gejala, dan konfirmasi pengingat via WhatsApp simulasi.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "domain": "kesehatan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Health",
      "Booking",
      "Fullstack"
    ],
    "highlights": "Deteksi jadwal bentrok dokter secara otomatis dengan validasi interval."
  },
  {
    "id": "web-29",
    "title": "Web Performance & SEO Meta Inspector",
    "description": "Tool pemeriksa metadata OpenGraph, Twitter Card, rasio kontras warna, dan ukuran aset dari URL yang dimasukkan. Menghasilkan skor audit per kategori.",
    "category": "web",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Cheerio",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "SEO",
      "Audit",
      "Utility"
    ],
    "highlights": "Preview live kartu OpenGraph untuk tampilan media sosial populer."
  },
  {
    "id": "web-30",
    "title": "Interactive World Map Covid & Disaster Tracker",
    "description": "Peta bumi interaktif berbasis Leaflet atau Mapbox untuk memantau data penyebaran bencana atau bantuan kemanusiaan dengan filter wilayah dan timeline.",
    "category": "web",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "Leaflet",
      "OpenStreetMap",
      "Tailwind"
    ],
    "domain": "sosial",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "GIS",
      "Maps",
      "Data Visualization"
    ],
    "highlights": "Clustering marker peta yang cepat saat memuat ribuan data koordinat."
  },
  {
    "id": "mob-01",
    "title": "Offline-First Daily Expense Tracker",
    "description": "Aplikasi pencatat pengeluaran mobile dengan sinkronisasi otomatis saat online dan penyimpanan lokal WatermelonDB. Dilengkapi pemindaian struk foto menggunakan OCR.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React Native",
      "WatermelonDB",
      "Expo OCR"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Offline-First",
      "Mobile",
      "Finance"
    ],
    "highlights": "Kinerja database lokal berkecepatan 60fps dengan data ribuan baris."
  },
  {
    "id": "mob-02",
    "title": "FitPulse: Minimalist HIIT Workout Timer",
    "description": "Timer interval latihan kebugaran dengan panduan audio sintetis dan visual warna kontras tinggi. Pengguna dapat membuat variasi sirkuit olahraga sendiri.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Flutter",
      "Dart",
      "AudioPlayer"
    ],
    "domain": "kesehatan",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Fitness",
      "Timer",
      "Flutter"
    ],
    "highlights": "Layar tetap menyala (wake lock) dengan feedback getaran haptic."
  },
  {
    "id": "mob-03",
    "title": "Campus Food Sharing & Waste Reduction App",
    "description": "Aplikasi mahasiswa untuk membagikan sisa makanan layak konsumsi dari acara kampus ke rekan yang membutuhkan. Menggunakan radius geolokasi GPS.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React Native",
      "Firebase Firestore",
      "GeoFirestore"
    ],
    "domain": "sosial",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Social Impact",
      "GeoLocation",
      "Mobile"
    ],
    "highlights": "Notifikasi push instan ke pengguna terdekat saat ada makanan baru."
  },
  {
    "id": "mob-04",
    "title": "FocusTree: Pomodoro Timer dengan Gamifikasi Tanam Pohon",
    "description": "Aplikasi fokus belajar yang menumbuhkan pohon virtual setiap sesi 25 menit berhasil diselesaikan. Jika pengguna keluar aplikasi, pohon akan layu.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Flutter",
      "Shared Preferences",
      "Rive Animation"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "Gamification",
      "Pomodoro",
      "Mobile"
    ],
    "highlights": "Animasi pohon tumbuh halus menggunakan Rive runtime."
  },
  {
    "id": "mob-05",
    "title": "Smart Medication & Pill Reminder dengan Barcode Scanner",
    "description": "Pengingat minum obat berkala dengan jadwal dosis fleksibel. Mendukung pemindaian barcode kemasan obat untuk menyimpan nama dan instruksi otomatis.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React Native",
      "Expo Barcode Scanner",
      "Notifee"
    ],
    "domain": "kesehatan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Health",
      "Notifications",
      "Camera"
    ],
    "highlights": "Alarm darurat lokal yang tetap berbunyi saat ponsel dalam mode hening."
  },
  {
    "id": "mob-06",
    "title": "BookSwap: Marketplace Tukar Buku Antar Komunitas",
    "description": "Aplikasi barter buku fisik antar pecinta literasi dengan sistem matching wishlist dan chat in-app terenkripsi. Dilengkapi rating integritas pengirim.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Flutter",
      "Supabase",
      "Provider"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Community",
      "Books",
      "Marketplace"
    ],
    "highlights": "Pencocokan otomatis dua pengguna yang saling memiliki buku wishlist lawan."
  },
  {
    "id": "mob-07",
    "title": "Language Learning Flashcard dengan Speech Recognition",
    "description": "Aplikasi latihan pelafalan bahasa asing yang memverifikasi pengucapan kata pengguna secara langsung menggunakan mikrofon ponsel. Memberikan feedback intonasi.",
    "category": "mobile",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "React Native",
      "Voice API",
      "TensorFlow Lite"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Speech",
      "Machine Learning",
      "Mobile"
    ],
    "highlights": "Evaluasi pelafalan fonetik offline tanpa perlu koneksi internet."
  },
  {
    "id": "mob-08",
    "title": "Neighborhood Security Panic Button & Alert",
    "description": "Aplikasi keamanan lingkungan warga untuk mengirim sinyal SOS darurat ke petugas ronda malam beserta titik koordinat GPS dan rekaman audio 10 detik.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Flutter",
      "Firebase Cloud Messaging",
      "Location Service"
    ],
    "domain": "sosial",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Security",
      "Emergency",
      "Location"
    ],
    "highlights": "Pengiriman sinyal broadcast SOS dengan penekanan tombol kombinasi volume."
  },
  {
    "id": "mob-09",
    "title": "Plant Care Companion: Panduan Perawatan Tanaman Hias",
    "description": "Aplikasi pengingat jadwal siram, ganti tanah, dan pupuk untuk tanaman rumah. Dilengkapi kalender pemupukan dan catatan perkembangan foto pertumbuhan.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React Native",
      "AsyncStorage",
      "Expo ImagePicker"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Plants",
      "Photos",
      "Scheduler"
    ],
    "highlights": "Galeri perbandingan foto timelapse perkembangan tunas tanaman."
  },
  {
    "id": "mob-10",
    "title": "Peer-to-Peer Carpooling & Ride Sharing Kampus",
    "description": "Aplikasi tebengan motor atau mobil untuk sesama mahasiswa searah rute pulang. Mengurangi polusi dan menghemat biaya perjalanan bersama.",
    "category": "mobile",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Flutter",
      "Google Maps SDK",
      "Node.js Backend"
    ],
    "domain": "sosial",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Carpool",
      "Maps",
      "Routing"
    ],
    "highlights": "Kalkulasi pembagian ongkos bensin otomatis berdasarkan jarak tempuh."
  },
  {
    "id": "mob-11",
    "title": "Pocket Soundboard & Voice Pitch Modulator",
    "description": "Aplikasi sound effect mini dengan efek distorsi suara mikrofon lucu (robot, alien, helium) secara real-time untuk konten kreator.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React Native",
      "Expo AV",
      "React Navigation"
    ],
    "domain": "hiburan",
    "goal": [
      "iseng",
      "belajar"
    ],
    "tags": [
      "Audio",
      "Fun",
      "Microphone"
    ],
    "highlights": "Pengaturan pitch dan delay audio instan dengan latency rendah."
  },
  {
    "id": "mob-12",
    "title": "Personal Mood Journal dengan Analisis Sentimen Emoji",
    "description": "Buku harian mobile ber-PIN privasi dengan pelacak suasana hati harian. Menampilkan grafik korelasi aktivitas harian terhadap stabilitas emosi mingguan.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Flutter",
      "Hive Local DB",
      "Fl_chart"
    ],
    "domain": "kesehatan",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Journal",
      "Mental Health",
      "Charts"
    ],
    "highlights": "Enkripsi database lokal dengan otentikasi biometrik sidik jari."
  },
  {
    "id": "mob-13",
    "title": "Crowdsourced Public Transit Delay Tracker",
    "description": "Layanan pelaporan keterlambatan KRL atau TransJakarta secara swadaya dari pengguna di lapangan. Memberikan estimasi alternatif rute transportasi terdekat.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React Native",
      "Supabase Realtime",
      "Expo Maps"
    ],
    "domain": "sosial",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Transit",
      "Crowdsource",
      "Realtime"
    ],
    "highlights": "Sistem validasi laporan berbasis reputasi vote pengguna sekitar stasiun."
  },
  {
    "id": "mob-14",
    "title": "Augmented Reality Furniture Placer",
    "description": "Aplikasi pratinjau furnitur 3D di ruangan nyata menggunakan kamera ARCore atau ARKit. Membantu mengukur kecocokan dimensi lemari atau meja sebelum membeli.",
    "category": "mobile",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Flutter",
      "ARCore / ARKit Plugin",
      "Sceneform"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "AR",
      "3D",
      "Camera"
    ],
    "highlights": "Deteksi bidang lantai dan penempatan objek 3D dengan akurasi skala 1:1."
  },
  {
    "id": "mob-15",
    "title": "Split Bill Otomatis dengan OCR Struk Kasir",
    "description": "Aplikasi membagi tagihan restoran cukup dengan memotret struk pembayaran. Sistem mengekstrak item pesanan dan pengguna cukup men-tap nama pemesan.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React Native",
      "Google Cloud Vision",
      "Redux Toolkit"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "OCR",
      "Finance",
      "Split Bill"
    ],
    "highlights": "Kalkulasi otomatis pajak dan service fee proporsional per orang."
  },
  {
    "id": "mob-16",
    "title": "Kids Math Quiz Game dengan Suara Interaktif",
    "description": "Permainan edukasi matematika untuk anak usia dini dengan karakter kartun bergerak dan efek reward suara menyenangkan ketika berhasil menjawab.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Flutter",
      "AudioPlayers",
      "Simple State"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Math",
      "Kids",
      "Gamification"
    ],
    "highlights": "Mode tanpa batas waktu dengan tingkat kesulitan adaptif otomatis."
  },
  {
    "id": "mob-17",
    "title": "Offline Emergency First-Aid Pocket Handbook",
    "description": "Buku panduan P3K darurat beranimasi yang dapat diakses penuh tanpa internet. Menyediakan petunjuk langkah demi langkah CPR, luka bakar, dan patah tulang.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React Native",
      "Markdown Viewer",
      "Vector Icons"
    ],
    "domain": "kesehatan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Handbook",
      "Emergency",
      "Health"
    ],
    "highlights": "Pencarian cepat gejala dengan rekomendasi pertolongan pertama instan."
  },
  {
    "id": "mob-18",
    "title": "Developer Podcast & Tech News Digest App",
    "description": "Agregator berita teknologi dan episode podcast programming terbaru dari feed RSS terpercaya. Dilengkapi mode audio background dan download offline.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Flutter",
      "RSS Parser",
      "Just_audio"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "News",
      "Podcast",
      "RSS"
    ],
    "highlights": "Playback audio latar belakang dengan kontrol pada lockscreen sistem."
  },
  {
    "id": "mob-19",
    "title": "Mobile Code Snippet Vault & Syntax Highlighter",
    "description": "Aplikasi penyimpanan contekan kode favorit langsung di smartphone dengan pewarnaan sintaks rapi, pencarian tag kilat, dan backup ke gist GitHub.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React Native",
      "PrismJS Mobile",
      "AsyncStorage"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Code",
      "Snippets",
      "Developer"
    ],
    "highlights": "Salin kode dengan satu ketukan dan filter kategori bahasa pemrograman."
  },
  {
    "id": "mob-20",
    "title": "Local Volunteer Opportunity Matcher",
    "description": "Platform penghubung relawan sosial dengan yayasan amal terdekat yang membutuhkan bantuan tenaga. Menyediakan log jam kontribusi relawan.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Flutter",
      "Firebase",
      "Geolocator"
    ],
    "domain": "sosial",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Volunteer",
      "Social Impact",
      "Community"
    ],
    "highlights": "Sertifikat digital partisipasi yang otomatis digenerate setelah kegiatan."
  },
  {
    "id": "mob-21",
    "title": "Water Intake Reminder dengan Smart Animation",
    "description": "Pengingat minum air dengan animasi gelas terisi air secara interaktif. Menyesuaikan target kebutuhan cairan harian berdasarkan bobot tubuh dan cuaca.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React Native",
      "Reanimated 3",
      "Lottie"
    ],
    "domain": "kesehatan",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Animation",
      "Health",
      "Hydration"
    ],
    "highlights": "Animasi cairan fisika interaktif menggunakan react-native-reanimated."
  },
  {
    "id": "mob-22",
    "title": "Crypto Price Widget & Flash Alert App",
    "description": "Aplikasi notifikasi lonjakan harga koin kripto drastis dalam interval 5 menit. Menyediakan widget layar beranda (home screen widget) yang hemat baterai.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Flutter",
      "HomeWidget Plugin",
      "WebSocket"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Crypto",
      "Widget",
      "Background Task"
    ],
    "highlights": "Pembaruan widget layar beranda menggunakan background service native."
  },
  {
    "id": "mob-23",
    "title": "Offline GPS Trail & Hiking Trek Tracker",
    "description": "Perekam jalur pendakian gunung berbasis koordinat GPS tanpa sinyal seluler. Pengguna dapat menandai titik sumber air, pos istirahat, dan mengekspor file GPX.",
    "category": "mobile",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "React Native",
      "Mapbox Offline",
      "SQLite"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "GPS",
      "Hiking",
      "Offline Maps"
    ],
    "highlights": "Peta kontur offline terunduh dengan profil elevasi tanjakan rute."
  },
  {
    "id": "mob-24",
    "title": "Freelancer Invoice Maker & Client Tracker",
    "description": "Pembuat nota tagihan dan invoice profesional langsung dari ponsel. Mendukung tanda tangan digital, status pembayaran, dan kirim file PDF via WhatsApp.",
    "category": "mobile",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Flutter",
      "pdf package",
      "Printing Plugin"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Invoice",
      "Freelance",
      "PDF"
    ],
    "highlights": "Template invoice multi-mata uang dengan konversi pajak otomatis."
  },
  {
    "id": "mob-25",
    "title": "Virtual Board Game Companion: Dice, Timer & Scoreboard",
    "description": "Aplikasi pendamping main board game fisik dengan dadu digital berfisika 3D, jam catur turn-timer, dan papan skor kalkulator poin pemain otomatis.",
    "category": "mobile",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React Native",
      "Three.js Mobile",
      "Haptics"
    ],
    "domain": "hiburan",
    "goal": [
      "iseng",
      "belajar"
    ],
    "tags": [
      "Board Game",
      "Companion",
      "Dice"
    ],
    "highlights": "Fisika lemparan dadu realistis dengan deteksi getaran sensor ponsel."
  },
  {
    "id": "ai-01",
    "title": "Local RAG Documentation Assistant untuk Developer",
    "description": "Asisten tanya-jawab dokumen teknis berbasis Retrieval-Augmented Generation menggunakan model embedding lokal di browser atau server ringan. Menampilkan referensi halaman kutipan.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python",
      "FastAPI",
      "ChromaDB",
      "LangChain",
      "OpenAI / Ollama"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "RAG",
      "LLM",
      "Vector DB"
    ],
    "highlights": "Kutipan langsung nomor baris dan sumber file dokumen untuk verifikasi fakta."
  },
  {
    "id": "ai-02",
    "title": "AI Code Reviewer & Security Vulnerability Scanner",
    "description": "Bot penganalisis pull request yang mendeteksi celah keamanan OWASP, kebocoran API key, dan anti-pattern performa pada repositori kode secara otomatis.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js",
      "GitHub Octokit",
      "OpenAI API",
      "Docker"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Security",
      "GitHub Actions",
      "Code Review"
    ],
    "highlights": "Saran perbaikan kode dalam format Git diff siap commit."
  },
  {
    "id": "ai-03",
    "title": "AI Nutritionist: Food Calorie Estimator dari Foto Piring",
    "description": "Aplikasi pendeteksi porsi makanan dari unggahan foto kamera. Mengidentifikasi jenis lauk, estimasi gramatur, dan menghitung rincian kalori serta protein.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Python",
      "PyTorch / Vision Transformer",
      "FastAPI",
      "React"
    ],
    "domain": "kesehatan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Computer Vision",
      "Health",
      "Nutrition"
    ],
    "highlights": "Segmentasi multi-makanan dalam satu piring menggunakan model object detection."
  },
  {
    "id": "ai-04",
    "title": "Smart Podcast Audio Summarizer & Key Moments Marker",
    "description": "Alat pengubah rekaman audio menjadi transkrip teks dan ringkasan eksekutif poin penting dengan penanda menit rekaman (bullet highlights).",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python",
      "Whisper AI",
      "FastAPI",
      "Streamlit"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Audio AI",
      "Whisper",
      "Transcription"
    ],
    "highlights": "Transkripsi multi-bahasa cepat dengan deteksi pergantian pembicara."
  },
  {
    "id": "ai-05",
    "title": "AI SQL Query Generator dari Bahasa Manusia",
    "description": "Tool konversi instruksi natural language berbahasa Indonesia atau Inggris menjadi query SQL teroptimasi berdasarkan skema tabel database yang diunggah.",
    "category": "ai",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Next.js",
      "OpenAI API",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "SQL",
      "NLP",
      "Developer Tools"
    ],
    "highlights": "Validasi sintaks query dan penjelasan logika alur JOIN sebelum dieksekusi."
  },
  {
    "id": "ai-06",
    "title": "AI Interview Coach dengan Analisis Suara & Jawaban",
    "description": "Simulasi wawancara kerja teknis dengan pertanyaan adaptif sesuai role. Memberikan penilaian kualitas jawaban STAR method dan intonasi bicara.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Next.js",
      "Web Speech API",
      "FastAPI",
      "LangChain"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Interview",
      "LLM",
      "Career"
    ],
    "highlights": "Umpan balik komprehensif pada aspek kejernihan, kosakata, dan struktur."
  },
  {
    "id": "ai-07",
    "title": "Autonomous Web Research Agent",
    "description": "Agen mandiri yang menerima topik riset, mencari sumber di web, menyaring berita palsu, dan menyusun laporan sintesis berstruktur sitasi ilmiah.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Python",
      "Playwright",
      "LangGraph",
      "ChromaDB"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "AI Agent",
      "Scraping",
      "Research"
    ],
    "highlights": "Siklus reasoning multi-step dengan verifikasi silang antar website."
  },
  {
    "id": "ai-08",
    "title": "Real-time Sign Language Translator dengan MediaPipe",
    "description": "Penerjemah bahasa isyarat tangan ke teks secara langsung menggunakan webcam browser dengan MediaPipe Hand Tracking tanpa mengirim video ke server.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "JavaScript",
      "TensorFlow.js",
      "MediaPipe",
      "HTML5 Canvas"
    ],
    "domain": "sosial",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Accessibility",
      "Computer Vision",
      "TensorFlow.js"
    ],
    "highlights": "Pemrosesan 100% di sisi klien menjamin privasi kamera pengguna."
  },
  {
    "id": "ai-09",
    "title": "Customer Support Ticket Sentiment & Auto-Triage",
    "description": "Sistem klasifikasi otomatis keluhan pelanggan berdasarkan tingkat urgensi dan sentimen emosi. Mengarahkan tiket kritis langsung ke divisi prioritas.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python",
      "HuggingFace Transformers",
      "FastAPI",
      "PostgreSQL"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "NLP",
      "Classification",
      "SaaS"
    ],
    "highlights": "Ekstraksi otomatis entitas keluhan (order ID, jenis produk, masalah teknis)."
  },
  {
    "id": "ai-10",
    "title": "AI Regex Generator & Visual Tester",
    "description": "Generator regular expression dari deskripsi teks sederhana. Dilengkapi penjelas alur regex step-by-step dan kotak pengujian string contoh secara instan.",
    "category": "ai",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Regex",
      "Developer Tools",
      "Utility"
    ],
    "highlights": "Pewarnaan capture group interaktif pada teks hasil pengujian."
  },
  {
    "id": "ai-11",
    "title": "Personalized Daily News Briefing Voice Bot",
    "description": "Kurator berita harian personal yang mengompilasi artikel berita pilihan pengguna, membuat intisari singkat, dan membacakannya dalam format podcast audio.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python",
      "ElevenLabs API / Edge TTS",
      "BeautifulSoup",
      "FastAPI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "TTS",
      "News",
      "Audio"
    ],
    "highlights": "Intonasi suara narator natural dengan pembagian segmen topik yang rapi."
  },
  {
    "id": "ai-12",
    "title": "AI Story Generator Interaktif (Choose Your Own Adventure)",
    "description": "Permainan cerita naratif bercabang di mana setiap keputusan pembaca akan men-generate bab cerita berikutnya secara dinamis lengkap dengan ilustrasi pemandangan.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Stable Diffusion / DALL-E",
      "OpenAI API"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "Storytelling",
      "Generative AI",
      "Game"
    ],
    "highlights": "Konsistensi profil karakter dan inventaris item yang bertahan antar bab."
  },
  {
    "id": "ai-13",
    "title": "Financial Invoice Fraud & Anomaly Detector",
    "description": "Sistem deteksi anomali pada data transaksi keuangan perusahaan untuk menemukan duplikasi klaim, manipulasi angka, atau pola pengeluaran mencurigakan.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Python",
      "Scikit-Learn / Isolation Forest",
      "Pandas",
      "Streamlit"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Machine Learning",
      "Fraud Detection",
      "Finance"
    ],
    "highlights": "Skor risiko transaksi dengan visualisasi scatter plot anomali multidimensi."
  },
  {
    "id": "ai-14",
    "title": "AI Flashcard Generator dari File PDF / Slide Kuliah",
    "description": "Generator otomatis paket kartu hafalan tanya-jawab dan kuis pilihan ganda langsung dari materi slide kuliah atau ebook PDF yang diunggah.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "pdfjs-dist",
      "FastAPI",
      "OpenAI"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "EdTech",
      "Flashcards",
      "PDF"
    ],
    "highlights": "Ekspor kartu siap pakai ke format Anki (.apkg) dan CSV."
  },
  {
    "id": "ai-15",
    "title": "Medical Symptom Checker & Clinic Recommender",
    "description": "Asisten triage awal yang mengumpulkan keluhan gejala pengguna secara percakapan ramah dan memberikan saran pertolongan pertama serta spesialis medis yang sesuai.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "LangChain",
      "FastAPI",
      "Tailwind CSS"
    ],
    "domain": "kesehatan",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Health",
      "Triage",
      "Chatbot"
    ],
    "highlights": "Disclaimer medis ketat dan pencegahan rekomendasi resep obat keras."
  },
  {
    "id": "ai-16",
    "title": "AI Git Commit Message & Changelog Generator",
    "description": "CLI atau plugin VS Code yang membaca git diff staged files dan membuat pesan commit standar Conventional Commits yang deskriptif serta changelog markdown.",
    "category": "ai",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Node.js",
      "commander",
      "OpenAI API"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "CLI",
      "Git",
      "Developer Tools"
    ],
    "highlights": "Analisis perubahan logika kode tanpa mengunggah file credential terabaikan."
  },
  {
    "id": "ai-17",
    "title": "Emotion-Aware Music Playlist Generator",
    "description": "Generator daftar putar lagu Spotify yang menyesuaikan mood pengguna berdasarkan analisis teks keluh-kesah atau tangkapan ekspresi wajah webcam.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "Spotify Web API",
      "Face-api.js",
      "Tailwind"
    ],
    "domain": "hiburan",
    "goal": [
      "iseng",
      "portofolio"
    ],
    "tags": [
      "Music",
      "Spotify",
      "Emotion Detection"
    ],
    "highlights": "Kombinasi parameter tempo BPM dan valence musik yang pas dengan emosi."
  },
  {
    "id": "ai-18",
    "title": "Semantic Code Search Engine untuk Monorepo",
    "description": "Mesin pencari fungsi atau cuplikan kode berbasis makna konseptual alih-alih pencocokan string regex biasa pada basis kode besar monorepo.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Go / Python",
      "Qdrant",
      "tree-sitter",
      "Voyage AI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Search",
      "Vector Search",
      "Developer Tools"
    ],
    "highlights": "Parsing AST menggunakan tree-sitter untuk memisahkan fungsi dan class."
  },
  {
    "id": "ai-19",
    "title": "AI Plant Disease Classifier dari Foto Daun",
    "description": "Model klasifikasi penyakit tanaman pangan (tomat, jagung, padi) dari foto daun berbercak dengan rekomendasi penanganan pestisida organik.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python",
      "TensorFlow / Keras",
      "FastAPI",
      "React Native"
    ],
    "domain": "kesehatan",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "Agriculture",
      "Classification",
      "Mobile AI"
    ],
    "highlights": "Akurasi model 92% pada dataset PlantVillage dengan inferensi cepat."
  },
  {
    "id": "ai-20",
    "title": "Smart Recipe Generator dari Sisa Kulkas",
    "description": "Asisten masak yang meracik resep masakan kreatif berdasarkan daftar 3-5 bahan mentah yang masih tersisa di dapur, menghindari pemborosan bahan pangan.",
    "category": "ai",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Next.js",
      "OpenAI API",
      "Tailwind"
    ],
    "domain": "kesehatan",
    "goal": [
      "iseng",
      "belajar"
    ],
    "tags": [
      "Cooking",
      "Generative AI",
      "Food"
    ],
    "highlights": "Penyesuaian porsi dan opsi pengganti bumbu dapur yang tidak tersedia."
  },
  {
    "id": "ai-21",
    "title": "AI Resume Tailorer untuk Lowongan Pekerjaan",
    "description": "Alat pengoptimalan CV yang membandingkan teks resume dengan deskripsi lowongan kerja dan memberikan rekomendasi kata kunci relevan agar lolos screening.",
    "category": "ai",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "OpenAI API",
      "Tailwind CSS",
      "PDFParse"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Career",
      "Resume",
      "NLP"
    ],
    "highlights": "Skor keselarasan (match rate) per keterampilan teknis dan pengalaman."
  },
  {
    "id": "ai-22",
    "title": "Social Media Caption & Hook Generator Multi-Platform",
    "description": "Generator copywriting konten media sosial (LinkedIn, Twitter/X, Instagram) dengan sudut pandang menarik, variasi hook headline, dan hashtag relevan.",
    "category": "ai",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Tailwind CSS",
      "Groq / OpenAI API"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Copywriting",
      "Marketing",
      "Social Media"
    ],
    "highlights": "Pengaturan nada bicara: profesional, santai, provokatif, atau edukatif."
  },
  {
    "id": "ai-23",
    "title": "Autonomous Web Scraping & Schema Normalizer",
    "description": "Pipeline cerdas yang mengekstrak data katalog dari website HTML tidak terstruktur dan menormalkannya ke skema JSON baku tanpa konfigurasi selektor CSS manual.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Python",
      "Playwright",
      "Instructor / Pydantic",
      "FastAPI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Scraping",
      "Data Engineering",
      "LLM"
    ],
    "highlights": "Output JSON valid dengan validasi tipe data Pydantic yang terjamin."
  },
  {
    "id": "ai-24",
    "title": "AI Exam Proctor: Eye Tracking & Cheating Alert",
    "description": "Sistem pengawas ujian online yang memonitor arah pandangan mata dan keberadaan orang lain di frame kamera untuk menjaga integritas tes jarak jauh.",
    "category": "ai",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Python / JS",
      "GazeCloudAPI / MediaPipe",
      "WebRTC",
      "React"
    ],
    "domain": "edukasi",
    "goal": [
      "lomba",
      "portofolio"
    ],
    "tags": [
      "EdTech",
      "Proctoring",
      "Computer Vision"
    ],
    "highlights": "Log timestamp bukti kecurigaan dengan snapshot kamera otomatis."
  },
  {
    "id": "ai-25",
    "title": "Code Explanation & Mental Model Visualizer",
    "description": "Alat pengurai algoritma rumit yang mengubah kode pemrograman menjadi analogi cerita sederhana dan diagram alir visual untuk pemula belajar koding.",
    "category": "ai",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Mermaid.js",
      "OpenAI API",
      "Tailwind"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "EdTech",
      "Programming",
      "Visualization"
    ],
    "highlights": "Generasi diagram alir Mermaid instan yang menjelaskan variabel langkah per langkah."
  },
  {
    "id": "game-01",
    "title": "Pixel Rogue: 2D Dungeon Crawler Roguelike",
    "description": "Game penjelajahan labirin 2D prosedural dengan sistem permadeath, inventaris senjata acak, dan pertarungan turn-based melawan monster labirin.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Phaser 3",
      "TypeScript",
      "HTML5 Canvas"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Roguelike",
      "Procedural",
      "Phaser"
    ],
    "highlights": "Generasi labirin acak menggunakan algoritma Cellular Automata."
  },
  {
    "id": "game-02",
    "title": "Typing Defense: Tower Defense Berbasis Kecepatan Ketik",
    "description": "Game pertahanan benteng di mana musuh datang membawa kata-kata di atas kepalanya. Mengetik kata dengan cepat dan akurat akan menembakkan proyektil meriam.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "JavaScript",
      "HTML5 Canvas",
      "Web Audio API"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Typing Game",
      "Canvas",
      "Audio"
    ],
    "highlights": "Efek partikel ledakan dan combo multiplier untuk ketikan tanpa cela."
  },
  {
    "id": "game-03",
    "title": "Physics Sandbox: Ragdoll & Destruction Playground",
    "description": "Simulasi interaktif hukum gravitasi dan benturan objek fisik 2D. Pemain dapat membangun jembatan, menyusun domino, dan meledakkannya dengan bom virtual.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Matter.js",
      "React",
      "HTML5 Canvas",
      "Tailwind"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Physics",
      "Matter.js",
      "Sandbox"
    ],
    "highlights": "Kontrol interaktif gaya tarik gravitasi, massa objek, dan elastisitas benturan."
  },
  {
    "id": "game-04",
    "title": "Multiplayer Pong / Air Hockey Realtime dengan WebSocket",
    "description": "Game tenis meja virtual kompetitif dua pemain secara online dengan latensi minim dan prediksi pergerakan bola di sisi klien (client prediction).",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js",
      "Socket.io",
      "HTML5 Canvas",
      "TypeScript"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Multiplayer",
      "Networking",
      "Realtime"
    ],
    "highlights": "Interpolasi posisi mulus dan matchmaking lobi dengan kode room privat."
  },
  {
    "id": "game-05",
    "title": "EcoCity Builder: Simulator Tata Kota Ramah Lingkungan",
    "description": "Game strategi simulasi pembangunan kota pulau dengan keseimbangan antara pertumbuhan ekonomi industri, kebahagiaan warga, dan tingkat polusi karbon.",
    "category": "game",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Phaser 3",
      "React",
      "TypeScript"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "City Builder",
      "Simulation",
      "Strategy"
    ],
    "highlights": "Siklus ekonomi berantai di mana polusi tinggi memicu bencana banjir bandang."
  },
  {
    "id": "game-06",
    "title": "Retro 8-Bit Space Shooter Bullet Hell",
    "description": "Game aksi tembak pesawat luar angkasa dengan pola peluru musuh yang rapat dan dinamis. Menghadirkan musik latar chiptune retro dan upgrade senjata laser.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Vanilla JS",
      "Canvas API",
      "Web Audio Chiptune"
    ],
    "domain": "hiburan",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Arcade",
      "Retro",
      "Shooter"
    ],
    "highlights": "Performa 60fps konstan dengan sistem object pooling ratusan peluru."
  },
  {
    "id": "game-07",
    "title": "CodeRunner: Coding Puzzle Platformer",
    "description": "Game petualangan logika pemrograman di mana pemain mengendalikan robot melewati rintangan dengan menyusun balok perintah logika instruksi (maju, lompat, looping).",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Vue.js / React",
      "Phaser 3",
      "Tailwind CSS"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Puzzle",
      "Coding Game",
      "EdTech"
    ],
    "highlights": "Eksekusi alur perintah visual dengan visualisasi pointer eksekusi."
  },
  {
    "id": "game-08",
    "title": "Idle Stock Trader: Game Simulasi Pasar Saham Meme",
    "description": "Game incremental/clicker santai di mana pemain memulai modal dari uang saku, membeli saham perusahaan fiktif, membaca gosip berita, dan menjadi triliuner.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Tailwind CSS",
      "LocalStorage"
    ],
    "domain": "finance",
    "goal": [
      "iseng",
      "belajar"
    ],
    "tags": [
      "Idle Game",
      "Finance",
      "Clicker"
    ],
    "highlights": "Algoritma fluktuasi harga pasar acak dengan event berita dadakan."
  },
  {
    "id": "game-09",
    "title": "Isometric Room Decorator 3D",
    "description": "Aplikasi mini santai untuk menata kamar impian dengan furnitur bergaya isometrik 3D pastel. Pemain dapat mengambil foto screenshot dan membagikannya ke media sosial.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Three.js",
      "React Three Fiber",
      "Tailwind"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "3D",
      "Isometric",
      "Creative"
    ],
    "highlights": "Grid snapping presisi dan pengaturan palet warna perabotan kamar."
  },
  {
    "id": "game-10",
    "title": "Rhythm Beats: Web-based Tap Rhythm Game",
    "description": "Game irama musik di mana pemain menekan tuts keyboard mengikuti jatuhnya not balok sesuai ritme ketukan lagu. Mendukung impor file audio MP3 kustom.",
    "category": "game",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "React",
      "Web Audio API",
      "HTML5 Canvas"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Rhythm",
      "Music",
      "Precision"
    ],
    "highlights": "Deteksi beat onset otomatis dari file audio menggunakan FFT analyser."
  },
  {
    "id": "game-11",
    "title": "Escape Room Virtual: Teka-Teki Misteri Web",
    "description": "Game point-and-click interaktif bernuansa kamar terkunci. Pemain harus mencari kode tersembunyi di perabotan, memecahkan sandi morse, dan melarikan diri sebelum waktu habis.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Tailwind CSS",
      "Audio Web"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "Escape Room",
      "Mystery",
      "Interactive"
    ],
    "highlights": "Sistem inventaris item gabungan (kombinasi kunci dan obeng untuk membuka ventilasi)."
  },
  {
    "id": "game-12",
    "title": "Snake Game Klasik dengan Modus Portal Dimensi",
    "description": "Evolusi permainan ular legendaris di mana menabrak dinding portal biru akan memunculkan kepala ular dari portal oranye di sisi lain papan.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "HTML5 Canvas",
      "JavaScript",
      "CSS3"
    ],
    "domain": "hiburan",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Arcade",
      "Retro",
      "Canvas"
    ],
    "highlights": "Visual retro CRT monitor effect dengan scanlines shader CSS."
  },
  {
    "id": "game-13",
    "title": "Chess AI Engine Sederhana di Browser",
    "description": "Papan catur interaktif lengkap dengan aturan validasi langkah (en passant, castling) dan lawan bot komputer berbasis algoritma Minimax dengan Alpha-Beta Pruning.",
    "category": "game",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "TypeScript",
      "React",
      "Web Worker"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Chess",
      "AI",
      "Algorithms"
    ],
    "highlights": "Kalkulasi evaluasi posisi catur dijalankan di Web Worker tanpa lag UI."
  },
  {
    "id": "game-14",
    "title": "Flappy Bird Mod: Voice Pitch Controller",
    "description": "Klon game burung legendaris namun kendali lompatan tidak memakai klik mouse, melainkan frekuensi nada suara pemain (suara tinggi untuk terbang naik, suara rendah untuk turun).",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "JavaScript",
      "Web Audio API FFT",
      "HTML5 Canvas"
    ],
    "domain": "hiburan",
    "goal": [
      "iseng",
      "belajar"
    ],
    "tags": [
      "Voice Control",
      "Audio",
      "Creative"
    ],
    "highlights": "Analisis frekuensi mikrofon real-time tanpa pengiriman data audio ke server."
  },
  {
    "id": "game-15",
    "title": "Sudoku Generator & Auto-Solver dengan Animasi Backtracking",
    "description": "Game asah otak Sudoku dengan 4 level kesulitan dan fitur visualizer yang memperlihatkan bagaimana algoritma backtracking memecahkan teka-teki kotak.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Algorithms",
      "Puzzle",
      "Backtracking"
    ],
    "highlights": "Kecepatan animasi langkah pemecahan backtracking dapat diatur."
  },
  {
    "id": "game-16",
    "title": "Card Battle RPG Sederhana: Deck Building Arena",
    "description": "Game duel kartu turn-based di mana pemain memilih kartu serangan, pertahanan, atau sihir ramuan untuk mengalahkan bos monster dengan poin energi terbatas.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "Framer Motion",
      "Zustand",
      "Tailwind"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Card Game",
      "RPG",
      "Animation"
    ],
    "highlights": "Animasi perpindahan kartu halus dengan efek visual damage popup."
  },
  {
    "id": "game-17",
    "title": "Simulasi Ekosistem Hewan: Predator vs Prey Simulation",
    "description": "Visualisasi interaktif hukum seleksi alam di mana serigala berburu kelinci dan kelinci mencari rumput. Pengguna dapat mengubah tingkat reproduksi dan kecepatan gerak.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "p5.js / Canvas",
      "JavaScript",
      "HTML5"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Simulation",
      "Ecology",
      "Generative"
    ],
    "highlights": "Grafik fluktuasi populasi model Lotka-Volterra yang seimbang secara dinamis."
  },
  {
    "id": "game-18",
    "title": "Wordle Multiplayer Duel: Tebak Kata Beradu Cepat",
    "description": "Permainan tebak kata 5 huruf bahasa Indonesia dengan lawan main online secara bersamaan. Pemenang adalah yang berhasil menebak kata rahasia dengan percobaan lebih sedikit.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Socket.io",
      "Tailwind CSS"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "Wordle",
      "Multiplayer",
      "EdTech"
    ],
    "highlights": "Database kata baku KBBI lengkap dengan indikator papan lawan real-time."
  },
  {
    "id": "game-19",
    "title": "Maze Runner 3D Raycasting Engine (Ala Doom Klasik)",
    "description": "Game labirin 3D retro bergaya Wolfenstein 3D yang dibangun murni menggunakan matematika proyeksi raycasting 2.5D tanpa library 3D eksternal.",
    "category": "game",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "TypeScript",
      "HTML5 2D Canvas",
      "Math"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Raycasting",
      "Retro 3D",
      "Algorithms"
    ],
    "highlights": "Implementasi algoritma DDA (Digital Differential Analyzer) murni dari nol."
  },
  {
    "id": "game-20",
    "title": "Galactic Colony: Manajemen Logistik Koloni Mars",
    "description": "Game santai pengelolaan sumber daya oksigen, panel surya, dan pemukiman kubah astronot di planet Mars menghadapi badai debu periodik.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Phaser 3",
      "React",
      "Tailwind CSS"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Colony Sim",
      "Space",
      "Phaser"
    ],
    "highlights": "Sistem distribusi pipa oksigen jaringan grid yang menantang."
  },
  {
    "id": "game-21",
    "title": "Memory Match Card Game dengan Efek Sound Spatial",
    "description": "Game mencocokkan kartu bergambar kembar dengan tingkat kartu bertambah. Setiap kartu memiliki suara khas yang terdengar di earphone kiri atau kanan.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Web Audio Panner",
      "Tailwind CSS"
    ],
    "domain": "hiburan",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Memory",
      "Audio",
      "Casual"
    ],
    "highlights": "Integrasi Web Audio spatial panner 3D untuk latihan ketajaman telinga."
  },
  {
    "id": "game-22",
    "title": "Trivia Battle Royale: 50 Pemain Terakhir Bertahan",
    "description": "Kuis trivia online massal di mana satu jawaban salah langsung mengeliminasi pemain hingga hanya tersisa 1 juara bertahan di podium puncak.",
    "category": "game",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Node.js",
      "Redis PubSub",
      "React",
      "Tailwind"
    ],
    "domain": "sosial",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Battle Royale",
      "Trivia",
      "Realtime"
    ],
    "highlights": "Skalabilitas penanganan puluhan koneksi WebSocket serentak dengan Redis."
  },
  {
    "id": "game-23",
    "title": "Mini Golf 2D dengan Fisika Pantulan Dinding",
    "description": "Game golf santai dengan kontrol drag untuk menentukan sudut pukulan dan kekuatan ayunan stik. Hadapi rintangan pasir, tanjakan miring, dan kipas angin.",
    "category": "game",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "HTML5 Canvas",
      "Physics Vector Math",
      "JavaScript"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Golf",
      "Physics",
      "Arcade"
    ],
    "highlights": "Kalkulasi pantulan elastis dinding sudut menggunakan vektor dot-product."
  },
  {
    "id": "game-24",
    "title": "Game of Life Interaktif: Visualizer Seluler Conway",
    "description": "Simulator automaton seluler Conway's Game of Life dengan editor kanvas bebas. Dilengkapi katalog cetak biru pola legendaris seperti Glider dan Gosper Glider Gun.",
    "category": "game",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "HTML5 Canvas",
      "Tailwind CSS"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Conway",
      "Cellular Automata",
      "Math"
    ],
    "highlights": "Rendering 10.000 sel pada 60fps menggunakan typed array memori efisien."
  },
  {
    "id": "game-25",
    "title": "Drawing Guessing Party Game (Ala Skribbl.io)",
    "description": "Game tebak gambar bersama teman di ruang privat. Satu pemain menggambar petunjuk di kanvas secara real-time dan pemain lain berebut menebak di kolom chat.",
    "category": "game",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Next.js",
      "Socket.io",
      "HTML5 Canvas",
      "Tailwind"
    ],
    "domain": "sosial",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Drawing",
      "Multiplayer",
      "Social Game"
    ],
    "highlights": "Kompresi data goresan kuas vektor untuk pengiriman data jaringan yang ringan."
  },
  {
    "id": "back-01",
    "title": "Distributed Rate Limiter Microservice dengan Redis Token Bucket",
    "description": "Layanan middleware pembatas laju request independen berbasis algoritma token bucket dan sliding window log. Melindungi sistem dari lonjakan traffic DDOS.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go (Golang)",
      "Redis",
      "gRPC",
      "Docker"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Rate Limiter",
      "Go",
      "Redis",
      "Microservices"
    ],
    "highlights": "Waktu respons sub-milidetik (kurang dari 2ms) dengan script Lua atomik."
  },
  {
    "id": "back-02",
    "title": "Lightweight High-Throughput Message Queue dari Nol",
    "description": "Sistem antrean pesan in-memory terdistribusi ala Kafka sederhana dengan dukungan publish-subscribe topik, partisi data, dan penyimpanan log biner ke disk.",
    "category": "backend",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Rust / Go",
      "TCP Sockets",
      "File I/O"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Distributed Systems",
      "Message Queue",
      "Rust"
    ],
    "highlights": "Protokol biner kustom minim overhead serialisasi berbasis Zero-Copy."
  },
  {
    "id": "back-03",
    "title": "Serverless Webhook Delivery & Retry Engine",
    "description": "Layanan pengirim webhook tangguh dengan penjadwalan retry otomatis eksponensial (exponential backoff) dan monitoring status kesehatan endpoint klien.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js / TypeScript",
      "BullMQ",
      "PostgreSQL",
      "Redis"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Webhooks",
      "Queues",
      "Reliability"
    ],
    "highlights": "Proteksi signature HMAC SHA-256 untuk verifikasi keaslian payload."
  },
  {
    "id": "back-04",
    "title": "Real-time Multi-region Service Health Ping & Status Page",
    "description": "Sistem pemantau uptime API dan website dari berbagai node lokasi geografis. Menyediakan halaman status publik otomatis saat terjadi downtime.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go",
      "TimescaleDB",
      "React Frontend",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Monitoring",
      "DevOps",
      "Uptime"
    ],
    "highlights": "Kalkulasi SLA 99.9% otomatis dan notifikasi alert instan ke Telegram/Discord bot."
  },
  {
    "id": "back-05",
    "title": "Minimalist S3-Compatible Object Storage Gateway",
    "description": "Server penyimpanan file mandiri yang mengimplementasikan sebagian protokol Amazon S3 REST API (GET, PUT, DELETE bucket & object).",
    "category": "backend",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Go / Python",
      "Local Disk Storage",
      "HTTP REST"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Storage",
      "S3",
      "Go",
      "Cloud"
    ],
    "highlights": "Dukungan multipart chunked upload untuk file besar berukuran gigabyte."
  },
  {
    "id": "back-06",
    "title": "Self-Hosted Dynamic DNS (DDNS) Server",
    "description": "Layanan ringan untuk memperbarui DNS record subdomain home-server secara otomatis saat IP publik router internet rumah berganti.",
    "category": "backend",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Python",
      "FastAPI",
      "Cloudflare API",
      "Docker"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Networking",
      "DNS",
      "DevOps"
    ],
    "highlights": "Script klien satu baris curl dengan autentikasi bearer token aman."
  },
  {
    "id": "back-07",
    "title": "API Gateway dengan JWT Authentication & Reverse Proxy",
    "description": "Pintu gerbang tunggal untuk arsitektur microservices yang menangani verifikasi token JWT, translasi rute URL, dan load balancing round-robin antar service.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js / Go",
      "Docker",
      "JWT",
      "HTTP Proxy"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "API Gateway",
      "Reverse Proxy",
      "Security"
    ],
    "highlights": "Pencatatan metrik latensi request dan deteksi kegagalan instance otomatis."
  },
  {
    "id": "back-08",
    "title": "Cron Job & Background Task Scheduler Terpusat",
    "description": "Sistem penjadwalan tugas latar belakang terdistribusi dengan antarmuka dasbor visual untuk memonitor riwayat eksekusi, kegagalan log, dan durasi eksekusi tugas.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python",
      "Celery",
      "Redis",
      "FastAPI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Scheduler",
      "Cron",
      "DevOps"
    ],
    "highlights": "Dukungan ekspresi cron standar dengan penanganan timeout tugas otomatis."
  },
  {
    "id": "back-09",
    "title": "Kubernetes Cluster Auto-Scaler Simulator",
    "description": "Simulasi visual mekanisme horizontal pod autoscaling (HPA) saat terjadi lonjakan traffic sintetis. Menampilkan penambahan pod dan pendinginan kapasitas.",
    "category": "backend",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Go",
      "React",
      "WebSocket",
      "Tailwind"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Kubernetes",
      "Autoscaling",
      "DevOps"
    ],
    "highlights": "Metrik simulasi penggunaan CPU dan memori dinamis berbasis formula fisika."
  },
  {
    "id": "back-10",
    "title": "File Metadata Extractor & Virus Scanner Pipeline",
    "description": "Layanan pipeline pemrosesan upload file yang mengekstrak metadata gambar/dokumen, memindai tanda malware menggunakan ClamAV, dan membuat thumbnail.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js",
      "ClamAV",
      "Sharp",
      "Docker"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Security",
      "File Upload",
      "Pipeline"
    ],
    "highlights": "Isolasi sandbox aman untuk mencegah ancaman eksploitasi format file berbahaya."
  },
  {
    "id": "back-11",
    "title": "GeoIP Lookup & IP Intelligence REST API",
    "description": "Layanan penyedia informasi lokasi geografis, ASN provider, dan zona waktu dari alamat IP pengunjung menggunakan database lokal MaxMind GeoLite2.",
    "category": "backend",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Go",
      "MaxMind DB Reader",
      "Chi Router"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "GeoIP",
      "Networking",
      "Go"
    ],
    "highlights": "Latensi respons di bawah 500 mikrodetik berkat pemuatan data langsung ke RAM."
  },
  {
    "id": "back-12",
    "title": "Database Migration CLI Tool untuk Multi-DB",
    "description": "Aplikasi baris perintah independen untuk menjalankan file migrasi SQL versi maju (up) dan mundur (down) dengan dukungan PostgreSQL, MySQL, dan SQLite.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Rust / Go",
      "SQL Parser",
      "CLI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Database",
      "Migrations",
      "CLI"
    ],
    "highlights": "Pencatatan checksum hash file migrasi untuk mencegah modifikasi file lama."
  },
  {
    "id": "back-13",
    "title": "Log Ingestion & Full-Text Search Engine Sederhana",
    "description": "Server penerima streaming log aplikasi terpusat yang membangun indeks inverted index untuk pencarian teks cepat dan pemfilteran level log (INFO, WARN, ERROR).",
    "category": "backend",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Go / Rust",
      "Inverted Index",
      "HTTP API"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Search",
      "Logging",
      "DevOps"
    ],
    "highlights": "Kompresi blok data log berbasis gzip untuk menghemat kapasitas ruang disk."
  },
  {
    "id": "back-14",
    "title": "GraphQL to REST Dynamic Aggregator Gateway",
    "description": "Server proxy GraphQL yang menggabungkan respons dari 3 API REST pihak ketiga menjadi satu schema respons seragam untuk efisiensi frontend.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js",
      "Apollo Server",
      "DataLoader"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "GraphQL",
      "REST",
      "Optimization"
    ],
    "highlights": "Pencegahan masalah N+1 query problem menggunakan DataLoader batching."
  },
  {
    "id": "back-15",
    "title": "Single Sign-On (SSO) OAuth2 & OIDC Mock Provider",
    "description": "Server otentikasi identitas yang mengimplementasikan alur OAuth 2.0 Authorization Code Grant dengan PKCE untuk pengetesan login aplikasi klien lokal.",
    "category": "backend",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Go / TypeScript",
      "JWT",
      "SQLite"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "OAuth2",
      "Security",
      "Auth"
    ],
    "highlights": "Halaman persetujuan izin user consent dengan scope kustom."
  },
  {
    "id": "back-16",
    "title": "Automated Database Backup to Cloud Storage Bot",
    "description": "Script daemon Docker yang secara terjadwal mengekstrak backup database PostgreSQL, mengenkripsinya dengan GPG, dan mengunggahnya ke S3/Google Drive.",
    "category": "backend",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Bash / Python",
      "Docker",
      "GPG",
      "AWS S3 CLI"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Backup",
      "Docker",
      "Database",
      "DevOps"
    ],
    "highlights": "Pembersihan otomatis berkas backup lama yang berumur lebih dari 30 hari."
  },
  {
    "id": "back-17",
    "title": "Real-time Collaborative Cursor & Presence Server",
    "description": "Backend WebSocket hemat bandwidth untuk menyiarkan koordinat kursor mouse dan status online ribuan pengguna serentak di dokumen kolaboratif.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go / Elixir",
      "WebSockets",
      "Broadcast Channels"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "WebSocket",
      "Realtime",
      "Concurrency"
    ],
    "highlights": "Throttling paket data 60Hz per klien untuk menjaga efisiensi jaringan."
  },
  {
    "id": "back-18",
    "title": "URL Shortener Berkecepatan Tinggi dengan Analitik Geografis",
    "description": "Layanan pemendek URL dengan algoritma encoding Base62, caching Redis, dan perekaman asal negara klik, tipe perangkat, serta referer URL.",
    "category": "backend",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Go / Node.js",
      "Redis",
      "PostgreSQL"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "URL Shortener",
      "Redis",
      "Performance"
    ],
    "highlights": "Pengalihan 301 instan di bawah 5 milidetik memanfaatkan memory cache."
  },
  {
    "id": "back-19",
    "title": "Docker Container Health Monitoring Agent",
    "description": "Program daemon ringan yang mengawasi penggunaan memori, CPU, dan status restart container Docker di host server dan mengirim alert ke webhook Discord.",
    "category": "backend",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Go / Python",
      "Docker Engine Socket API"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Docker",
      "Monitoring",
      "DevOps"
    ],
    "highlights": "Membaca statistik performa langsung dari UNIX socket Docker daemon."
  },
  {
    "id": "back-20",
    "title": "Cryptographic Password Vault API dengan Zero-Knowledge Architecture",
    "description": "Backend brankas penyimpanan sandi di mana data akun hanya disimpan dalam bentuk enkripsi ciphertext yang hanya dapat didekripsi dengan master key milik pengguna.",
    "category": "backend",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Rust / Node.js",
      "Argon2id",
      "AES-256-GCM",
      "PostgreSQL"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Cryptography",
      "Security",
      "Backend"
    ],
    "highlights": "Perlindungan brute-force menggunakan hashing memory-hard Argon2id."
  },
  {
    "id": "back-21",
    "title": "Email Ingestion & Parsing Webhook Service",
    "description": "Server penerima email masuk via protokol SMTP yang mem-parsing konten HTML, lampiran attachment, dan meneruskannya sebagai payload JSON webhook ke aplikasi.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Node.js",
      "smtp-server",
      "mailparser",
      "FastAPI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Email",
      "SMTP",
      "Webhooks"
    ],
    "highlights": "Ekstraksi otomatis file invoice PDF dari lampiran email masuk."
  },
  {
    "id": "back-22",
    "title": "Static Site Generator (SSG) Sederhana Berbasis Markdown",
    "description": "Program generator situs web statis yang membaca folder berkas markdown artikel, memproses frontmatter metadata, dan menghasilkan file HTML siap hosting.",
    "category": "backend",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Go / Rust / Node.js",
      "Markdown Parser",
      "Templates"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "SSG",
      "Markdown",
      "Build Tool"
    ],
    "highlights": "Kompilasi ratusan halaman artikel blog dalam waktu kurang dari satu detik."
  },
  {
    "id": "back-23",
    "title": "Transactional Outbox Pattern Event Publisher",
    "description": "Implementasi pola arsitektur Transactional Outbox di database SQL untuk menjamin tidak ada event transaksi yang hilang saat dikirim ke message broker.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "PostgreSQL",
      "Go / TypeScript",
      "RabbitMQ / Kafka"
    ],
    "domain": "finance",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Microservices",
      "Design Patterns",
      "Architecture"
    ],
    "highlights": "Pemberian jaminan pengiriman pesan at-least-once tanpa distributed locking."
  },
  {
    "id": "back-24",
    "title": "HTTP Load Balancer dengan Algoritma Weighted Round-Robin",
    "description": "Server penyeimbang beban lalu lintas HTTP layer-7 yang mendistribusikan request ke beberapa server backend target berdasarkan bobot kapasitas masing-masing.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go",
      "net/http/httputil",
      "Concurrency"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Networking",
      "Load Balancer",
      "Go"
    ],
    "highlights": "Deteksi server backend yang down secara berkala (active health checks)."
  },
  {
    "id": "back-25",
    "title": "Secure Secret Management Daemon untuk Local Development",
    "description": "Alat manajemen variabel environment (.env) terenkripsi untuk tim developer. Mendukung sharing secret antar programmer tanpa menitipkan file .env mentah di git.",
    "category": "backend",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go",
      "Age Encryption",
      "CLI"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "DevOps",
      "Secrets",
      "Security"
    ],
    "highlights": "Enkripsi multi-penerima menggunakan kunci publik SSH masing-masing anggota tim."
  },
  {
    "id": "tool-01",
    "title": "Git TUI: Terminal User Interface untuk Git History",
    "description": "Aplikasi visualisasi riwayat commit git interaktif di dalam terminal. Pengguna dapat meninjau diff baris, squash commit, dan checkout branch dengan keyboard.",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go (Bubbletea)",
      "Git CLI / libgit2"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "TUI",
      "Git",
      "CLI",
      "Go"
    ],
    "highlights": "Navigasi keyboard super cepat terinspirasi dari vim keybindings."
  },
  {
    "id": "tool-02",
    "title": "JSON Schema to TypeScript / Zod Type Generator CLI",
    "description": "Alat baris perintah yang membaca file JSON contoh dan secara otomatis menghasilkan schema validasi Zod dan antarmuka TypeScript yang ketat.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "TypeScript",
      "Node.js",
      "Commander"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "CLI",
      "TypeScript",
      "Zod"
    ],
    "highlights": "Deteksi otomatis tipe union dan properti opsional dari kumpulan data sampel."
  },
  {
    "id": "tool-03",
    "title": "CSV to SQL & Data Quality Profiler Web Tool",
    "description": "Alat analisis dataset tabular berbasis web yang memindai file CSV, mendeteksi tipe data kolom, persentase nilai kosong (null), dan membuat skrip CREATE TABLE SQL.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "PapaParse",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Data",
      "CSV",
      "SQL"
    ],
    "highlights": "Pemrosesan file CSV puluhan megabyte langsung di browser tanpa upload server."
  },
  {
    "id": "tool-04",
    "title": "VS Code Extension: Dead Code & Unused Export Detector",
    "description": "Ekstensi editor kode untuk mendeteksi file komponen, variabel fungsi, atau export yang tidak pernah diimpor di bagian proyek manapun untuk pembersihan kode.",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "TypeScript",
      "VS Code Extension API",
      "AST Parser"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "VS Code",
      "AST",
      "Developer Tools"
    ],
    "highlights": "Analisis dependency graph instan dengan penandaan visual di sidebar editor."
  },
  {
    "id": "tool-05",
    "title": "Interactive Regex Railway Diagram Generator",
    "description": "Alat visualisasi ekspresi reguler yang mengubah sintaks regex rumit menjadi diagram rel kereta visual yang mudah dipahami alur percabangannya.",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "SVG",
      "Regex Parser",
      "Tailwind"
    ],
    "domain": "edukasi",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Regex",
      "SVG",
      "Data Visualization"
    ],
    "highlights": "Ekspor diagram visual ke format gambar vektor SVG resolusi tinggi."
  },
  {
    "id": "tool-06",
    "title": "Package.json Dependency Security & Bloat Audit CLI",
    "description": "Tool audit baris perintah yang memindai file package.json proyek Node.js untuk menemukan paket berukuran besar dan mencari alternatif paket yang lebih ramping.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Node.js",
      "Bundlephobia API",
      "npm Registry API"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "CLI",
      "Node.js",
      "Performance"
    ],
    "highlights": "Rekomendasi substitusi paket ringan (misal mengganti Moment.js dengan date-fns)."
  },
  {
    "id": "tool-07",
    "title": "Web-Based Color Palette Accessibility Contrast Matrix",
    "description": "Alat pembuat palet warna UI dengan pengujian rasio kontras silang antar warna otomatis untuk menjamin kepatuhan standar aksesibilitas WCAG AAA.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Culori / Color Math",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Accessibility",
      "Colors",
      "Design Systems"
    ],
    "highlights": "Matriks perbandingan semua kombinasi latar depan dan latar belakang dalam satu tabel."
  },
  {
    "id": "tool-08",
    "title": "Docker Compose to Kubernetes Manifest Translator",
    "description": "Aplikasi web konversi file docker-compose.yml menjadi kumpulan file deployment, service, dan configmap Kubernetes siap pakai (kubectl apply).",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "TypeScript",
      "YAML Parser",
      "React",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Kubernetes",
      "Docker",
      "DevOps"
    ],
    "highlights": "Validasi sintaks YAML real-time dengan editor Monaco terintegrasi."
  },
  {
    "id": "tool-09",
    "title": "Network Packet Sniffer & Traffic Visualizer Sederhana",
    "description": "Program penganalisis lalu lintas jaringan lokal sederhana yang menangkap header paket IP dan memvisualisasikan grafik protokol (HTTP, DNS, TCP) secara real-time.",
    "category": "tools",
    "difficulty": "mahir",
    "duration": "1 bulan+",
    "stack": [
      "Python (Scapy)",
      "FastAPI",
      "Chart.js",
      "React"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Networking",
      "Security",
      "Packet Sniffer"
    ],
    "highlights": "Peringatan otomatis saat terdeteksi pengiriman password teks polos via HTTP."
  },
  {
    "id": "tool-10",
    "title": "Mock API Endpoint with Dynamic JSON Generator Web App",
    "description": "Generator endpoint API dummy instan dengan dukungan query filter dan data tiruan nama orang Indonesia, alamat, dan nomor telepon lokal.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Next.js",
      "Faker-js",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "API",
      "Mock",
      "Developer Tools"
    ],
    "highlights": "Respons instan dengan custom delay header untuk simulasi koneksi lemot."
  },
  {
    "id": "tool-11",
    "title": "Interactive Database ERD to SQL Schema Designer",
    "description": "Kanvas visual untuk menggambar Entity Relationship Diagram (tabel dan relasi foreign key) yang langsung menghasilkan skrip SQL DDL yang valid.",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "React Flow",
      "Tailwind CSS",
      "Zustand"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "ERD",
      "Database",
      "React Flow"
    ],
    "highlights": "Konektor relasi satu-ke-banyak (1:N) visual dengan penataan garis otomatis."
  },
  {
    "id": "tool-12",
    "title": "Terminal Pomodoro & Break Enforcer CLI",
    "description": "Aplikasi pengatur waktu kerja Pomodoro di terminal dengan notifikasi desktop native dan pemblokir pengetikan terminal opsional saat jam istirahat tiba.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "Rust / Go",
      "Terminal ANSI",
      "Desktop Notifications"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "CLI",
      "Productivity",
      "Pomodoro"
    ],
    "highlights": "Integrasi riwayat pencatatan tugas harian ke file format markdown lokal."
  },
  {
    "id": "tool-13",
    "title": "Web-Based Audio Frequency Spectrogram Analyzer",
    "description": "Alat visualisasi spektrum frekuensi suara dari file musik atau mikrofon menggunakan Fast Fourier Transform (FFT) dengan pilihan tema warna visualizer.",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "HTML5 Canvas",
      "Web Audio API",
      "JavaScript"
    ],
    "domain": "hiburan",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Audio",
      "Canvas",
      "Math"
    ],
    "highlights": "Rendering waterfall spectrogram beresolusi tinggi 60 frame per detik."
  },
  {
    "id": "tool-14",
    "title": "Markdown to Clean HTML Slide Presentation Deck",
    "description": "Alat pengubah file dokumen markdown menjadi presentasi slide proyektor interaktif dengan navigasi tombol panah, animasi transisi, dan mode pembicara.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Tailwind CSS",
      "PrismJS"
    ],
    "domain": "edukasi",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Markdown",
      "Slides",
      "Presentation"
    ],
    "highlights": "Mode presenter dual-screen dengan catatan pembicara dan timer berdetik."
  },
  {
    "id": "tool-15",
    "title": "HTTP Benchmark & Stress Testing CLI",
    "description": "Tool baris perintah penguji ketahanan server web ala wrk atau hey. Mengirim ribuan request simultan dan merangkum grafik latensi persentil (p95, p99).",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Go (Goroutines)",
      "HTTP Client",
      "Terminal Charts"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "Benchmarking",
      "Go",
      "Concurrency",
      "DevOps"
    ],
    "highlights": "Perhitungan statistik latensi akurat tanpa bias jeda garbage collection."
  },
  {
    "id": "tool-16",
    "title": "Cron Expression Humanizer & Next Runs Visualizer",
    "description": "Alat penerjemah sintaks cron lima kolom menjadi kalimat bahasa manusia yang mudah dipahami serta menampilkan jadwal 10 waktu eksekusi berikutnya.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "cronstrue",
      "date-fns",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Cron",
      "Scheduler",
      "Utility"
    ],
    "highlights": "Editor interaktif per kolom menit, jam, hari dengan penjelasan langsung."
  },
  {
    "id": "tool-17",
    "title": "Image SVG Optimizer & Path Cleaner Web Tool",
    "description": "Tool kompresi file vektor SVG berbasis browser yang membuang metadata tak perlu, menyederhanakan titik koordinat kurva, dan mengurangi ukuran file.",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "React",
      "SVGO Web",
      "Monaco Editor",
      "Tailwind"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "SVG",
      "Optimization",
      "Design Tools"
    ],
    "highlights": "Perbandingan visual side-by-side sebelum dan sesudah kompresi tanpa degradasi mutu."
  },
  {
    "id": "tool-18",
    "title": "Environment Variable Sync CLI (.env Validator)",
    "description": "Aplikasi pemeriksa kelengkapan file .env lokal terhadap template .env.example untuk mencegah error deploy akibat variabel rahasia yang tertinggal.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "TypeScript",
      "Node.js",
      "Chalk"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "CLI",
      "DevOps",
      "Config"
    ],
    "highlights": "Validasi tipe nilai variabel (apakah URL valid, angka port, atau boolean)."
  },
  {
    "id": "tool-19",
    "title": "Interactive CSS Cubic-Bezier Curve Tuner",
    "description": "Alat pembuat kurva easing transisi CSS interaktif dengan titik kendali yang bisa ditarik mouse. Menyediakan demo animasi bola perbandingan kecepatan.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "SVG Math",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "CSS",
      "Animation",
      "Math"
    ],
    "highlights": "Visualisasi kurva akselerasi fisika dengan salin kode CSS one-click."
  },
  {
    "id": "tool-20",
    "title": "Git Repository Contributor Analytics Dashboard",
    "description": "Dashboard penganalisis git log yang menghitung kontribusi baris kode per programmer, jam kerja paling aktif, dan mendeteksi file paling sering diubah (churn rate).",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Python / Node.js",
      "Chart.js",
      "Git Log Parser",
      "React"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "lomba"
    ],
    "tags": [
      "Git",
      "Analytics",
      "Data Visualization"
    ],
    "highlights": "Deteksi risiko bus factor pada modul sistem yang hanya dipahami satu programmer."
  },
  {
    "id": "tool-21",
    "title": "Web-Based Base64, Hex, and Hash Encoder/Decoder",
    "description": "Alat serbaguna inspeksi data biner untuk developer: konversi teks ke Base64, Hexadecimal, SHA-256, MD5, serta kalkulator ukuran byte data.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Web Crypto API",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "iseng"
    ],
    "tags": [
      "Encoding",
      "Cryptography",
      "Utility"
    ],
    "highlights": "Dukungan drag and drop file biner lokal untuk hashing instan tanpa upload."
  },
  {
    "id": "tool-22",
    "title": "JWT Token Debugger & Expiry Calculator Offline",
    "description": "Pemeriksa payload JSON Web Token yang aman dan 100% offline di browser. Menampilkan tanggal kadaluarsa manusia dan status verifikasi signature.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "Tailwind CSS",
      "Web Crypto API"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "JWT",
      "Security",
      "Developer Tools"
    ],
    "highlights": "Privasi total: data token tidak pernah dikirimkan keluar dari browser pengguna."
  },
  {
    "id": "tool-23",
    "title": "Browser Extension: Clean Link & Tracking Parameter Remover",
    "description": "Ekstensi browser yang secara otomatis membersihkan parameter pelacak iklan (utm_source, fbclid, gclid) dari URL saat pengguna menyalin tautan web.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "JavaScript",
      "WebExtensions API",
      "CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "belajar",
      "portofolio"
    ],
    "tags": [
      "Extension",
      "Privacy",
      "Browser"
    ],
    "highlights": "Pembersihan URL otomatis saat menekan shortcut keyboard Ctrl+C pada address bar."
  },
  {
    "id": "tool-24",
    "title": "API Response Time Benchmarking & Compare Tool",
    "description": "Aplikasi web untuk menguji dan membandingkan kecepatan dua URL endpoint API secara berulang dengan statistik sebaran latensi kotak (box plot).",
    "category": "tools",
    "difficulty": "menengah",
    "duration": "1 minggu",
    "stack": [
      "Next.js",
      "Recharts",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "belajar"
    ],
    "tags": [
      "API",
      "Benchmarking",
      "Charts"
    ],
    "highlights": "Perbandingan deviasi standar latensi jaringan secara visual berdampingan."
  },
  {
    "id": "tool-25",
    "title": "DevSpin Custom Idea Pack Creator & Exporter",
    "description": "Alat pengelola paket ide kustom untuk DevSpin: buat daftar proyek komunitasmu sendiri, atur tag bobot, dan ekspor dalam format JSON standar.",
    "category": "tools",
    "difficulty": "pemula",
    "duration": "< 1 hari",
    "stack": [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "domain": "produktivitas",
    "goal": [
      "portofolio",
      "iseng"
    ],
    "tags": [
      "DevSpin",
      "JSON",
      "Community"
    ],
    "highlights": "Validasi struktur data ide otomatis dengan preview kartu spin langsung."
  }
];
