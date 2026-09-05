// Auto-generated curated project ideas database for DevSpin
// Total ideas: 155 curated, unique, high-value developer projects

export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  overview: string;
  architecture: string;
  features: string[];
  steps: string[];
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
    "highlights": "Rendering Mermaid langsung dan offline-first dengan IndexedDB.",
    "overview": "Markdown Blog Engine with Live Canvas Preview dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Tailwind CSS, IndexedDB untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan IndexedDB). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Rendering Mermaid langsung dan offline-first dengan IndexedDB.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Tailwind CSS, IndexedDB), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
  },
  {
    "id": "web-02",
    "title": "DevSnippet: Cloud Clipboard dengan Enkripsi Client-side",
    "description": "Platform sharing cuplikan kode dan teks sensitif sementara ala Pastebin dengan sistem keamanan zero-knowledge. Seluruh payload teks dienkripsi langsung di browser pengirim menggunakan Web Crypto API (AES-GCM 256-bit) sebelum dikirim ke server. Server hanya menyimpan ciphertext terenkripsi dan token TTL di Redis tanpa pernah mengetahui isi plaintext ataupun kunci enkripsinya.",
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
    "highlights": "Zero-knowledge server model menggunakan AES-GCM 256-bit.",
    "overview": "DevSnippet dirancang untuk developer dan tim IT yang membutuhkan cara aman untuk berbagi password sementara, token API, atau konfigurasi rahasia tanpa resiko bocor di log server. Dengan prinsip zero-knowledge, kunci enkripsi diturunkan di client dan disematkan sebagai hash fragment pada link URL (#key), sehingga kunci tersebut tidak pernah terkirim ke server dalam HTTP request.",
    "architecture": "Client-Side Encryption Pipeline: Input teks dikonversi ke Uint8Array, dienkripsi menggunakan AES-GCM 256-bit dengan initialization vector (IV) acak 12-byte dan salt yang diturunkan dari passphrase via PBKDF2 (100.000 iterasi). Ciphertext dikirim ke serverless endpoint dan disimpan di Redis dengan TTL otomatis (1x baca atau batas waktu 1 jam hingga 7 hari). Saat link dibuka, client membaca hash fragment URL, mengambil ciphertext dari Redis via API, dan mendekripsi konten langsung di RAM browser lokal.",
    "features": [
      "Enkripsi end-to-end client-side menggunakan Web Crypto API standar browser modern (AES-GCM 256-bit)",
      "Mekanisme self-destruct otomatis (burn after reading atau kedaluwarsa setelah TTL habis)",
      "Editor kode terintegrasi dengan syntax highlighting multi-bahasa dan deteksi otomatis",
      "Sistem anti-brute force dengan delay rate-limiting berbasis IP dan Upstash Redis"
    ],
    "steps": [
      "Tahap 1 (Setup & Storage): Inisialisasi Next.js App Router, Tailwind CSS, dan koneksi ke Upstash Redis untuk penyimpanan ciphertext ephemeral dengan TTL otomatis.",
      "Tahap 2 (Security & Crypto Engine): Buat module Web Crypto API di browser untuk enkripsi AES-GCM, penurunan kunci PBKDF2, dan parsing hash fragment URL tanpa mengirim secret key ke server.",
      "Tahap 3 (UI, Editor & Polish): Rancang editor kode dengan copy-to-clipboard instan, visualisasi timer self-destruct, modal share link satu klik, dan deploy ke Vercel."
    ]
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
    "highlights": "Dukungan keyboard shortcut penuh dan multi-tab sync tanpa server.",
    "overview": "Kanban Board Interaktif dengan Optimistic UI dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, dnd-kit, Zustand, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (dnd-kit dan Zustand dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan dnd-kit.",
      "Fitur utama: Dukungan keyboard shortcut penuh dan multi-tab sync tanpa server.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, dnd-kit, Zustand, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Bundle script widget ringan di bawah 15KB tanpa external dependencies.",
    "overview": "SaaS Feedback Widget Generator dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, Vanilla JS Widget, Node.js, PostgreSQL untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Vanilla JS Widget dan Node.js dan PostgreSQL). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Vanilla JS Widget.",
      "Fitur utama: Bundle script widget ringan di bawah 15KB tanpa external dependencies.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, Vanilla JS Widget, Node.js, PostgreSQL), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Reconciliation CRDT untuk resolusi konflik sinkronisasi gambar.",
    "overview": "Collaborative Whiteboard Realtime dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, HTML5 Canvas, WebRTC, Socket.io untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HTML5 Canvas dan WebRTC dan Socket.io). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HTML5 Canvas.",
      "Fitur utama: Reconciliation CRDT untuk resolusi konflik sinkronisasi gambar.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, HTML5 Canvas, WebRTC, Socket.io), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Ekspor rekap keuangan bulanan ke format CSV dan PDF interaktif.",
    "overview": "Personal Finance & Subscription Tracker dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Chart.js, Prisma, PostgreSQL untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Chart.js dan Prisma dan PostgreSQL). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Chart.js.",
      "Fitur utama: Ekspor rekap keuangan bulanan ke format CSV dan PDF interaktif.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Chart.js, Prisma, PostgreSQL), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Algoritma penghitungan WPM dan akurasi per karakter yang presisi.",
    "overview": "Typing Speed Arena dengan Ghost Replay dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, TypeScript, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TypeScript dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TypeScript.",
      "Fitur utama: Algoritma penghitungan WPM dan akurasi per karakter yang presisi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, TypeScript, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Skor Lighthouse 100 dengan image optimization dan caching agresif.",
    "overview": "E-Commerce Headless Storefront dengan Cart Persisten dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Tailwind CSS, Zustand, Stripe Mock untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan Zustand dan Stripe Mock). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Skor Lighthouse 100 dengan image optimization dan caching agresif.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Tailwind CSS, Zustand, Stripe Mock), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Animasi perpindahan layout saat properti CSS diubah secara langsung.",
    "overview": "Interactive CSS Flexbox & Grid Playground dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem HTML5, CSS3, JavaScript, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan HTML5 untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (CSS3 dan JavaScript dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis HTML5 yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan CSS3.",
      "Fitur utama: Animasi perpindahan layout saat properti CSS diubah secara langsung.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (HTML5, CSS3, JavaScript, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Slider waktu sinkron yang menggeser jam seluruh kota secara simultan.",
    "overview": "Remote Work Timezone Planner dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, date-fns-tz, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (date-fns-tz dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan date-fns-tz.",
      "Fitur utama: Slider waktu sinkron yang menggeser jam seluruh kota secara simultan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, date-fns-tz, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Visualisasi frekuensi audio real-time menggunakan Canvas oscilloscope.",
    "overview": "Web Audio Synthesizer & Beat Maker dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Web Audio API, Canvas, CSS Modules untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Audio API dan Canvas dan CSS Modules). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Audio API.",
      "Fitur utama: Visualisasi frekuensi audio real-time menggunakan Canvas oscilloscope.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Web Audio API, Canvas, CSS Modules), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Preview 1:1 real-time dengan layout dinamis ramah mesin cetak.",
    "overview": "Resume & CV Builder dengan Live ATS Checker dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, jspdf, Tailwind CSS, Zustand untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (jspdf dan Tailwind CSS dan Zustand). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan jspdf.",
      "Fitur utama: Preview 1:1 real-time dengan layout dinamis ramah mesin cetak.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, jspdf, Tailwind CSS, Zustand), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Implementasi algoritma SM-2 untuk interval peninjauan optimal.",
    "overview": "Komunitas Belajar: Flashcard Spaced Repetition Web App dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem SvelteKit, TypeScript, Tailwind CSS, Supabase untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan SvelteKit untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TypeScript dan Tailwind CSS dan Supabase). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis SvelteKit yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TypeScript.",
      "Fitur utama: Implementasi algoritma SM-2 untuk interval peninjauan optimal.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (SvelteKit, TypeScript, Tailwind CSS, Supabase), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Audit log transparan untuk setiap transaksi pengeluaran dana kampanye.",
    "overview": "Donation & Crowdfunding Transparent Portal dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Tailwind CSS, Prisma, PostgreSQL untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan Prisma dan PostgreSQL). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Audit log transparan untuk setiap transaksi pengeluaran dana kampanye.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Tailwind CSS, Prisma, PostgreSQL), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Transcoding video client-side menggunakan WebAssembly ffmpeg.",
    "overview": "Web-Based Screen Recorder & GIF Exporter dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Vue.js, MediaRecorder API, ffmpeg.wasm, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Vue.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (MediaRecorder API dan ffmpeg.wasm dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Vue.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan MediaRecorder API.",
      "Fitur utama: Transcoding video client-side menggunakan WebAssembly ffmpeg.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Vue.js, MediaRecorder API, ffmpeg.wasm, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Heatmap tahunan bergaya visual konsisten dan ringkasan persentase bulanan.",
    "overview": "Health Habit Tracker dengan Pixel Grid dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Lucide Icons, Tailwind CSS, LocalStorage untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Lucide Icons dan Tailwind CSS dan LocalStorage). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Lucide Icons.",
      "Fitur utama: Heatmap tahunan bergaya visual konsisten dan ringkasan persentase bulanan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Lucide Icons, Tailwind CSS, LocalStorage), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Filter alergi dan kalkulator makro nutrisi otomatis per menu.",
    "overview": "Recipe Finder & Meal Prep Nutrition Calculator dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Tailwind CSS, Spoonacular API, Chart.js untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan Spoonacular API dan Chart.js). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Filter alergi dan kalkulator makro nutrisi otomatis per menu.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Tailwind CSS, Spoonacular API, Chart.js), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pemindai QR kamera responsif tanpa perlu instalasi aplikasi native.",
    "overview": "Event RSVP & Ticketing Platform dengan QR Scanner dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, html5-qrcode, Supabase, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (html5-qrcode dan Supabase dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan html5-qrcode.",
      "Fitur utama: Pemindai QR kamera responsif tanpa perlu instalasi aplikasi native.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, html5-qrcode, Supabase, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Skor dinamis berdasarkan kecepatan menjawab dan streak benar.",
    "overview": "Virtual Classroom Quiz Platform Realtime dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Socket.io, Express, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Socket.io dan Express dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Socket.io.",
      "Fitur utama: Skor dinamis berdasarkan kecepatan menjawab dan streak benar.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Socket.io, Express, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pencarian repositori ramah pemula dengan filter label good-first-issue.",
    "overview": "Open Source Contributor Showcase dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, GitHub REST API, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (GitHub REST API dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan GitHub REST API.",
      "Fitur utama: Pencarian repositori ramah pemula dengan filter label good-first-issue.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, GitHub REST API, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Eksekusi SQLite 100% lokal di browser tanpa server database eksternal.",
    "overview": "Web-based SQL Query Visualizer & Playground dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, sql.js, Monaco Editor, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (sql.js dan Monaco Editor dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan sql.js.",
      "Fitur utama: Eksekusi SQLite 100% lokal di browser tanpa server database eksternal.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, sql.js, Monaco Editor, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Simulasi historis keuntungan DCA hingga 3 tahun ke belakang.",
    "overview": "Crypto Portfolio Tracker & Dollar-Cost-Averaging Simulator dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, CoinGecko API, Recharts, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (CoinGecko API dan Recharts dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan CoinGecko API.",
      "Fitur utama: Simulasi historis keuntungan DCA hingga 3 tahun ke belakang.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, CoinGecko API, Recharts, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Algoritma pembanding karakter yang cepat dan minim konsumsi memori.",
    "overview": "Interactive Code Diff & Review Viewer dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, diff-match-patch, PrismJS, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (diff-match-patch dan PrismJS dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan diff-match-patch.",
      "Fitur utama: Algoritma pembanding karakter yang cepat dan minim konsumsi memori.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, diff-match-patch, PrismJS, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Sistem anti-spam menggunakan proof-of-work puzzle sederhana di browser.",
    "overview": "Community Board Diskusi Anonim Terenkripsi dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Redis Upstash, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Redis Upstash dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Redis Upstash.",
      "Fitur utama: Sistem anti-spam menggunakan proof-of-work puzzle sederhana di browser.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Redis Upstash, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Dukungan upload file GLTF kustom dengan kalkulasi bayangan dinamis.",
    "overview": "3D Product Customizer dengan Three.js dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Three.js, @react-three/fiber, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Three.js dan @react-three/fiber dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Three.js.",
      "Fitur utama: Dukungan upload file GLTF kustom dengan kalkulasi bayangan dinamis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Three.js, @react-three/fiber, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi timeline audio presisi dan scrolling halus pada teks transkrip.",
    "overview": "Podcast Audio Player dengan Transkrip Auto-Scroll dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, HTML5 Audio, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HTML5 Audio dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HTML5 Audio.",
      "Fitur utama: Deteksi timeline audio presisi dan scrolling halus pada teks transkrip.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, HTML5 Audio, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "URL webhook unik untuk pengetesan request webhook tanpa konfigurasi.",
    "overview": "API Mock Server & Schema Tester Online dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Faker.js, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Faker.js dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Faker.js.",
      "Fitur utama: URL webhook unik untuk pengetesan request webhook tanpa konfigurasi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Faker.js, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi jadwal bentrok dokter secara otomatis dengan validasi interval.",
    "overview": "Patient Appointment & Doctor Consultation Booking dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Node.js, PostgreSQL, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Node.js dan PostgreSQL dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Node.js.",
      "Fitur utama: Deteksi jadwal bentrok dokter secara otomatis dengan validasi interval.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Node.js, PostgreSQL, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Preview live kartu OpenGraph untuk tampilan media sosial populer.",
    "overview": "Web Performance & SEO Meta Inspector dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Cheerio, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Cheerio dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Cheerio.",
      "Fitur utama: Preview live kartu OpenGraph untuk tampilan media sosial populer.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Cheerio, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Clustering marker peta yang cepat saat memuat ribuan data koordinat.",
    "overview": "Interactive World Map Covid & Disaster Tracker dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Leaflet, OpenStreetMap, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Leaflet dan OpenStreetMap dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Leaflet.",
      "Fitur utama: Clustering marker peta yang cepat saat memuat ribuan data koordinat.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Leaflet, OpenStreetMap, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kinerja database lokal berkecepatan 60fps dengan data ribuan baris.",
    "overview": "Offline-First Daily Expense Tracker dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, WatermelonDB, Expo OCR untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (WatermelonDB dan Expo OCR). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan WatermelonDB.",
      "Fitur utama: Kinerja database lokal berkecepatan 60fps dengan data ribuan baris.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, WatermelonDB, Expo OCR), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Layar tetap menyala (wake lock) dengan feedback getaran haptic.",
    "overview": "FitPulse: Minimalist HIIT Workout Timer dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Dart, AudioPlayer untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Dart dan AudioPlayer). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Dart.",
      "Fitur utama: Layar tetap menyala (wake lock) dengan feedback getaran haptic.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Dart, AudioPlayer), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Notifikasi push instan ke pengguna terdekat saat ada makanan baru.",
    "overview": "Campus Food Sharing & Waste Reduction App dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Firebase Firestore, GeoFirestore untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Firebase Firestore dan GeoFirestore). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Firebase Firestore.",
      "Fitur utama: Notifikasi push instan ke pengguna terdekat saat ada makanan baru.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Firebase Firestore, GeoFirestore), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Animasi pohon tumbuh halus menggunakan Rive runtime.",
    "overview": "FocusTree: Pomodoro Timer dengan Gamifikasi Tanam Pohon dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Shared Preferences, Rive Animation untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Shared Preferences dan Rive Animation). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Shared Preferences.",
      "Fitur utama: Animasi pohon tumbuh halus menggunakan Rive runtime.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Shared Preferences, Rive Animation), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Alarm darurat lokal yang tetap berbunyi saat ponsel dalam mode hening.",
    "overview": "Smart Medication & Pill Reminder dengan Barcode Scanner dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Expo Barcode Scanner, Notifee untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Expo Barcode Scanner dan Notifee). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Expo Barcode Scanner.",
      "Fitur utama: Alarm darurat lokal yang tetap berbunyi saat ponsel dalam mode hening.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Expo Barcode Scanner, Notifee), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pencocokan otomatis dua pengguna yang saling memiliki buku wishlist lawan.",
    "overview": "BookSwap: Marketplace Tukar Buku Antar Komunitas dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Supabase, Provider untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Supabase dan Provider). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Supabase.",
      "Fitur utama: Pencocokan otomatis dua pengguna yang saling memiliki buku wishlist lawan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Supabase, Provider), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Evaluasi pelafalan fonetik offline tanpa perlu koneksi internet.",
    "overview": "Language Learning Flashcard dengan Speech Recognition dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Voice API, TensorFlow Lite untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Voice API dan TensorFlow Lite). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Voice API.",
      "Fitur utama: Evaluasi pelafalan fonetik offline tanpa perlu koneksi internet.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Voice API, TensorFlow Lite), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pengiriman sinyal broadcast SOS dengan penekanan tombol kombinasi volume.",
    "overview": "Neighborhood Security Panic Button & Alert dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Firebase Cloud Messaging, Location Service untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Firebase Cloud Messaging dan Location Service). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Firebase Cloud Messaging.",
      "Fitur utama: Pengiriman sinyal broadcast SOS dengan penekanan tombol kombinasi volume.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Firebase Cloud Messaging, Location Service), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Galeri perbandingan foto timelapse perkembangan tunas tanaman.",
    "overview": "Plant Care Companion: Panduan Perawatan Tanaman Hias dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, AsyncStorage, Expo ImagePicker untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (AsyncStorage dan Expo ImagePicker). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan AsyncStorage.",
      "Fitur utama: Galeri perbandingan foto timelapse perkembangan tunas tanaman.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, AsyncStorage, Expo ImagePicker), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kalkulasi pembagian ongkos bensin otomatis berdasarkan jarak tempuh.",
    "overview": "Peer-to-Peer Carpooling & Ride Sharing Kampus dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Google Maps SDK, Node.js Backend untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Google Maps SDK dan Node.js Backend). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Google Maps SDK.",
      "Fitur utama: Kalkulasi pembagian ongkos bensin otomatis berdasarkan jarak tempuh.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Google Maps SDK, Node.js Backend), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pengaturan pitch dan delay audio instan dengan latency rendah.",
    "overview": "Pocket Soundboard & Voice Pitch Modulator dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Expo AV, React Navigation untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Expo AV dan React Navigation). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Expo AV.",
      "Fitur utama: Pengaturan pitch dan delay audio instan dengan latency rendah.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Expo AV, React Navigation), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Enkripsi database lokal dengan otentikasi biometrik sidik jari.",
    "overview": "Personal Mood Journal dengan Analisis Sentimen Emoji dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Hive Local DB, Fl_chart untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Hive Local DB dan Fl_chart). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Hive Local DB.",
      "Fitur utama: Enkripsi database lokal dengan otentikasi biometrik sidik jari.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Hive Local DB, Fl_chart), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Sistem validasi laporan berbasis reputasi vote pengguna sekitar stasiun.",
    "overview": "Crowdsourced Public Transit Delay Tracker dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Supabase Realtime, Expo Maps untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Supabase Realtime dan Expo Maps). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Supabase Realtime.",
      "Fitur utama: Sistem validasi laporan berbasis reputasi vote pengguna sekitar stasiun.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Supabase Realtime, Expo Maps), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi bidang lantai dan penempatan objek 3D dengan akurasi skala 1:1.",
    "overview": "Augmented Reality Furniture Placer dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, ARCore / ARKit Plugin, Sceneform untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (ARCore / ARKit Plugin dan Sceneform). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan ARCore / ARKit Plugin.",
      "Fitur utama: Deteksi bidang lantai dan penempatan objek 3D dengan akurasi skala 1:1.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, ARCore / ARKit Plugin, Sceneform), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kalkulasi otomatis pajak dan service fee proporsional per orang.",
    "overview": "Split Bill Otomatis dengan OCR Struk Kasir dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Google Cloud Vision, Redux Toolkit untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Google Cloud Vision dan Redux Toolkit). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Google Cloud Vision.",
      "Fitur utama: Kalkulasi otomatis pajak dan service fee proporsional per orang.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Google Cloud Vision, Redux Toolkit), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Mode tanpa batas waktu dengan tingkat kesulitan adaptif otomatis.",
    "overview": "Kids Math Quiz Game dengan Suara Interaktif dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, AudioPlayers, Simple State untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (AudioPlayers dan Simple State). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan AudioPlayers.",
      "Fitur utama: Mode tanpa batas waktu dengan tingkat kesulitan adaptif otomatis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, AudioPlayers, Simple State), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pencarian cepat gejala dengan rekomendasi pertolongan pertama instan.",
    "overview": "Offline Emergency First-Aid Pocket Handbook dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Markdown Viewer, Vector Icons untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Markdown Viewer dan Vector Icons). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Markdown Viewer.",
      "Fitur utama: Pencarian cepat gejala dengan rekomendasi pertolongan pertama instan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Markdown Viewer, Vector Icons), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Playback audio latar belakang dengan kontrol pada lockscreen sistem.",
    "overview": "Developer Podcast & Tech News Digest App dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, RSS Parser, Just_audio untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (RSS Parser dan Just_audio). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan RSS Parser.",
      "Fitur utama: Playback audio latar belakang dengan kontrol pada lockscreen sistem.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, RSS Parser, Just_audio), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Salin kode dengan satu ketukan dan filter kategori bahasa pemrograman.",
    "overview": "Mobile Code Snippet Vault & Syntax Highlighter dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, PrismJS Mobile, AsyncStorage untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (PrismJS Mobile dan AsyncStorage). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan PrismJS Mobile.",
      "Fitur utama: Salin kode dengan satu ketukan dan filter kategori bahasa pemrograman.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, PrismJS Mobile, AsyncStorage), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Sertifikat digital partisipasi yang otomatis digenerate setelah kegiatan.",
    "overview": "Local Volunteer Opportunity Matcher dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, Firebase, Geolocator untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Firebase dan Geolocator). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Firebase.",
      "Fitur utama: Sertifikat digital partisipasi yang otomatis digenerate setelah kegiatan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, Firebase, Geolocator), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Animasi cairan fisika interaktif menggunakan react-native-reanimated.",
    "overview": "Water Intake Reminder dengan Smart Animation dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Reanimated 3, Lottie untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Reanimated 3 dan Lottie). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Reanimated 3.",
      "Fitur utama: Animasi cairan fisika interaktif menggunakan react-native-reanimated.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Reanimated 3, Lottie), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pembaruan widget layar beranda menggunakan background service native.",
    "overview": "Crypto Price Widget & Flash Alert App dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, HomeWidget Plugin, WebSocket untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HomeWidget Plugin dan WebSocket). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HomeWidget Plugin.",
      "Fitur utama: Pembaruan widget layar beranda menggunakan background service native.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, HomeWidget Plugin, WebSocket), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Peta kontur offline terunduh dengan profil elevasi tanjakan rute.",
    "overview": "Offline GPS Trail & Hiking Trek Tracker dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Mapbox Offline, SQLite untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Mapbox Offline dan SQLite). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Mapbox Offline.",
      "Fitur utama: Peta kontur offline terunduh dengan profil elevasi tanjakan rute.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Mapbox Offline, SQLite), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Template invoice multi-mata uang dengan konversi pajak otomatis.",
    "overview": "Freelancer Invoice Maker & Client Tracker dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Flutter, pdf package, Printing Plugin untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Flutter untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (pdf package dan Printing Plugin). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Flutter yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan pdf package.",
      "Fitur utama: Template invoice multi-mata uang dengan konversi pajak otomatis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Flutter, pdf package, Printing Plugin), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Fisika lemparan dadu realistis dengan deteksi getaran sensor ponsel.",
    "overview": "Virtual Board Game Companion: Dice, Timer & Scoreboard dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React Native, Three.js Mobile, Haptics untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React Native untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Three.js Mobile dan Haptics). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React Native yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Three.js Mobile.",
      "Fitur utama: Fisika lemparan dadu realistis dengan deteksi getaran sensor ponsel.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React Native, Three.js Mobile, Haptics), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kutipan langsung nomor baris dan sumber file dokumen untuk verifikasi fakta.",
    "overview": "Local RAG Documentation Assistant untuk Developer dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, FastAPI, ChromaDB, LangChain, OpenAI / Ollama untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (FastAPI dan ChromaDB dan LangChain dan OpenAI / Ollama). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan FastAPI.",
      "Fitur utama: Kutipan langsung nomor baris dan sumber file dokumen untuk verifikasi fakta.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, FastAPI, ChromaDB, LangChain, OpenAI / Ollama), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Saran perbaikan kode dalam format Git diff siap commit.",
    "overview": "AI Code Reviewer & Security Vulnerability Scanner dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, GitHub Octokit, OpenAI API, Docker untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (GitHub Octokit dan OpenAI API dan Docker). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan GitHub Octokit.",
      "Fitur utama: Saran perbaikan kode dalam format Git diff siap commit.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, GitHub Octokit, OpenAI API, Docker), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Segmentasi multi-makanan dalam satu piring menggunakan model object detection.",
    "overview": "AI Nutritionist: Food Calorie Estimator dari Foto Piring dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, PyTorch / Vision Transformer, FastAPI, React untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (PyTorch / Vision Transformer dan FastAPI dan React). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan PyTorch / Vision Transformer.",
      "Fitur utama: Segmentasi multi-makanan dalam satu piring menggunakan model object detection.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, PyTorch / Vision Transformer, FastAPI, React), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Transkripsi multi-bahasa cepat dengan deteksi pergantian pembicara.",
    "overview": "Smart Podcast Audio Summarizer & Key Moments Marker dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, Whisper AI, FastAPI, Streamlit untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Whisper AI dan FastAPI dan Streamlit). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Whisper AI.",
      "Fitur utama: Transkripsi multi-bahasa cepat dengan deteksi pergantian pembicara.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, Whisper AI, FastAPI, Streamlit), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Validasi sintaks query dan penjelasan logika alur JOIN sebelum dieksekusi.",
    "overview": "AI SQL Query Generator dari Bahasa Manusia dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Next.js, OpenAI API, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Next.js dan OpenAI API dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Next.js.",
      "Fitur utama: Validasi sintaks query dan penjelasan logika alur JOIN sebelum dieksekusi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Next.js, OpenAI API, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Umpan balik komprehensif pada aspek kejernihan, kosakata, dan struktur.",
    "overview": "AI Interview Coach dengan Analisis Suara & Jawaban dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Web Speech API, FastAPI, LangChain untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Speech API dan FastAPI dan LangChain). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Speech API.",
      "Fitur utama: Umpan balik komprehensif pada aspek kejernihan, kosakata, dan struktur.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Web Speech API, FastAPI, LangChain), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Siklus reasoning multi-step dengan verifikasi silang antar website.",
    "overview": "Autonomous Web Research Agent dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, Playwright, LangGraph, ChromaDB untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Playwright dan LangGraph dan ChromaDB). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Playwright.",
      "Fitur utama: Siklus reasoning multi-step dengan verifikasi silang antar website.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, Playwright, LangGraph, ChromaDB), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pemrosesan 100% di sisi klien menjamin privasi kamera pengguna.",
    "overview": "Real-time Sign Language Translator dengan MediaPipe dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem JavaScript, TensorFlow.js, MediaPipe, HTML5 Canvas untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan JavaScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TensorFlow.js dan MediaPipe dan HTML5 Canvas). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis JavaScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TensorFlow.js.",
      "Fitur utama: Pemrosesan 100% di sisi klien menjamin privasi kamera pengguna.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (JavaScript, TensorFlow.js, MediaPipe, HTML5 Canvas), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Ekstraksi otomatis entitas keluhan (order ID, jenis produk, masalah teknis).",
    "overview": "Customer Support Ticket Sentiment & Auto-Triage dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, HuggingFace Transformers, FastAPI, PostgreSQL untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HuggingFace Transformers dan FastAPI dan PostgreSQL). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HuggingFace Transformers.",
      "Fitur utama: Ekstraksi otomatis entitas keluhan (order ID, jenis produk, masalah teknis).",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, HuggingFace Transformers, FastAPI, PostgreSQL), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pewarnaan capture group interaktif pada teks hasil pengujian.",
    "overview": "AI Regex Generator & Visual Tester dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, TypeScript, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TypeScript dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TypeScript.",
      "Fitur utama: Pewarnaan capture group interaktif pada teks hasil pengujian.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, TypeScript, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Intonasi suara narator natural dengan pembagian segmen topik yang rapi.",
    "overview": "Personalized Daily News Briefing Voice Bot dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, ElevenLabs API / Edge TTS, BeautifulSoup, FastAPI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (ElevenLabs API / Edge TTS dan BeautifulSoup dan FastAPI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan ElevenLabs API / Edge TTS.",
      "Fitur utama: Intonasi suara narator natural dengan pembagian segmen topik yang rapi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, ElevenLabs API / Edge TTS, BeautifulSoup, FastAPI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Konsistensi profil karakter dan inventaris item yang bertahan antar bab.",
    "overview": "AI Story Generator Interaktif (Choose Your Own Adventure) dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Stable Diffusion / DALL-E, OpenAI API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Stable Diffusion / DALL-E dan OpenAI API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Stable Diffusion / DALL-E.",
      "Fitur utama: Konsistensi profil karakter dan inventaris item yang bertahan antar bab.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Stable Diffusion / DALL-E, OpenAI API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Skor risiko transaksi dengan visualisasi scatter plot anomali multidimensi.",
    "overview": "Financial Invoice Fraud & Anomaly Detector dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, Scikit-Learn / Isolation Forest, Pandas, Streamlit untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Scikit-Learn / Isolation Forest dan Pandas dan Streamlit). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Scikit-Learn / Isolation Forest.",
      "Fitur utama: Skor risiko transaksi dengan visualisasi scatter plot anomali multidimensi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, Scikit-Learn / Isolation Forest, Pandas, Streamlit), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Ekspor kartu siap pakai ke format Anki (.apkg) dan CSV.",
    "overview": "AI Flashcard Generator dari File PDF / Slide Kuliah dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, pdfjs-dist, FastAPI, OpenAI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (pdfjs-dist dan FastAPI dan OpenAI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan pdfjs-dist.",
      "Fitur utama: Ekspor kartu siap pakai ke format Anki (.apkg) dan CSV.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, pdfjs-dist, FastAPI, OpenAI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Disclaimer medis ketat dan pencegahan rekomendasi resep obat keras.",
    "overview": "Medical Symptom Checker & Clinic Recommender dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, LangChain, FastAPI, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (LangChain dan FastAPI dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan LangChain.",
      "Fitur utama: Disclaimer medis ketat dan pencegahan rekomendasi resep obat keras.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, LangChain, FastAPI, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Analisis perubahan logika kode tanpa mengunggah file credential terabaikan.",
    "overview": "AI Git Commit Message & Changelog Generator dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, commander, OpenAI API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (commander dan OpenAI API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan commander.",
      "Fitur utama: Analisis perubahan logika kode tanpa mengunggah file credential terabaikan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, commander, OpenAI API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kombinasi parameter tempo BPM dan valence musik yang pas dengan emosi.",
    "overview": "Emotion-Aware Music Playlist Generator dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Spotify Web API, Face-api.js, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Spotify Web API dan Face-api.js dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Spotify Web API.",
      "Fitur utama: Kombinasi parameter tempo BPM dan valence musik yang pas dengan emosi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Spotify Web API, Face-api.js, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Parsing AST menggunakan tree-sitter untuk memisahkan fungsi dan class.",
    "overview": "Semantic Code Search Engine untuk Monorepo dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Python, Qdrant, tree-sitter, Voyage AI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Qdrant dan tree-sitter dan Voyage AI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Qdrant.",
      "Fitur utama: Parsing AST menggunakan tree-sitter untuk memisahkan fungsi dan class.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Python, Qdrant, tree-sitter, Voyage AI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Akurasi model 92% pada dataset PlantVillage dengan inferensi cepat.",
    "overview": "AI Plant Disease Classifier dari Foto Daun dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, TensorFlow / Keras, FastAPI, React Native untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TensorFlow / Keras dan FastAPI dan React Native). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TensorFlow / Keras.",
      "Fitur utama: Akurasi model 92% pada dataset PlantVillage dengan inferensi cepat.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, TensorFlow / Keras, FastAPI, React Native), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Penyesuaian porsi dan opsi pengganti bumbu dapur yang tidak tersedia.",
    "overview": "Smart Recipe Generator dari Sisa Kulkas dirancang untuk menjawab kebutuhan di sektor Kesehatan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Next.js, OpenAI API, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Next.js dan OpenAI API dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Next.js.",
      "Fitur utama: Penyesuaian porsi dan opsi pengganti bumbu dapur yang tidak tersedia.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Next.js, OpenAI API, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Skor keselarasan (match rate) per keterampilan teknis dan pengalaman.",
    "overview": "AI Resume Tailorer untuk Lowongan Pekerjaan dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, OpenAI API, Tailwind CSS, PDFParse untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (OpenAI API dan Tailwind CSS dan PDFParse). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan OpenAI API.",
      "Fitur utama: Skor keselarasan (match rate) per keterampilan teknis dan pengalaman.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, OpenAI API, Tailwind CSS, PDFParse), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pengaturan nada bicara: profesional, santai, provokatif, atau edukatif.",
    "overview": "Social Media Caption & Hook Generator Multi-Platform dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Tailwind CSS, Groq / OpenAI API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan Groq / OpenAI API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Pengaturan nada bicara: profesional, santai, provokatif, atau edukatif.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Tailwind CSS, Groq / OpenAI API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Output JSON valid dengan validasi tipe data Pydantic yang terjamin.",
    "overview": "Autonomous Web Scraping & Schema Normalizer dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, Playwright, Instructor / Pydantic, FastAPI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Playwright dan Instructor / Pydantic dan FastAPI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Playwright.",
      "Fitur utama: Output JSON valid dengan validasi tipe data Pydantic yang terjamin.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, Playwright, Instructor / Pydantic, FastAPI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Log timestamp bukti kecurigaan dengan snapshot kamera otomatis.",
    "overview": "AI Exam Proctor: Eye Tracking & Cheating Alert dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python / JS, GazeCloudAPI / MediaPipe, WebRTC, React untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python / JS untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (GazeCloudAPI / MediaPipe dan WebRTC dan React). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python / JS yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan GazeCloudAPI / MediaPipe.",
      "Fitur utama: Log timestamp bukti kecurigaan dengan snapshot kamera otomatis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python / JS, GazeCloudAPI / MediaPipe, WebRTC, React), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Generasi diagram alir Mermaid instan yang menjelaskan variabel langkah per langkah.",
    "overview": "Code Explanation & Mental Model Visualizer dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Mermaid.js, OpenAI API, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Mermaid.js dan OpenAI API dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Mermaid.js.",
      "Fitur utama: Generasi diagram alir Mermaid instan yang menjelaskan variabel langkah per langkah.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Mermaid.js, OpenAI API, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Generasi labirin acak menggunakan algoritma Cellular Automata.",
    "overview": "Pixel Rogue: 2D Dungeon Crawler Roguelike dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Phaser 3, TypeScript, HTML5 Canvas untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Phaser 3 untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TypeScript dan HTML5 Canvas). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Phaser 3 yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TypeScript.",
      "Fitur utama: Generasi labirin acak menggunakan algoritma Cellular Automata.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Phaser 3, TypeScript, HTML5 Canvas), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Efek partikel ledakan dan combo multiplier untuk ketikan tanpa cela.",
    "overview": "Typing Defense: Tower Defense Berbasis Kecepatan Ketik dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem JavaScript, HTML5 Canvas, Web Audio API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan JavaScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HTML5 Canvas dan Web Audio API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis JavaScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HTML5 Canvas.",
      "Fitur utama: Efek partikel ledakan dan combo multiplier untuk ketikan tanpa cela.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (JavaScript, HTML5 Canvas, Web Audio API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kontrol interaktif gaya tarik gravitasi, massa objek, dan elastisitas benturan.",
    "overview": "Physics Sandbox: Ragdoll & Destruction Playground dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Matter.js, React, HTML5 Canvas, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Matter.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React dan HTML5 Canvas dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Matter.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React.",
      "Fitur utama: Kontrol interaktif gaya tarik gravitasi, massa objek, dan elastisitas benturan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Matter.js, React, HTML5 Canvas, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Interpolasi posisi mulus dan matchmaking lobi dengan kode room privat.",
    "overview": "Multiplayer Pong / Air Hockey Realtime dengan WebSocket dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, Socket.io, HTML5 Canvas, TypeScript untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Socket.io dan HTML5 Canvas dan TypeScript). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Socket.io.",
      "Fitur utama: Interpolasi posisi mulus dan matchmaking lobi dengan kode room privat.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, Socket.io, HTML5 Canvas, TypeScript), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Siklus ekonomi berantai di mana polusi tinggi memicu bencana banjir bandang.",
    "overview": "EcoCity Builder: Simulator Tata Kota Ramah Lingkungan dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Phaser 3, React, TypeScript untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Phaser 3 untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React dan TypeScript). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Phaser 3 yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React.",
      "Fitur utama: Siklus ekonomi berantai di mana polusi tinggi memicu bencana banjir bandang.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Phaser 3, React, TypeScript), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Performa 60fps konstan dengan sistem object pooling ratusan peluru.",
    "overview": "Retro 8-Bit Space Shooter Bullet Hell dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Vanilla JS, Canvas API, Web Audio Chiptune untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Vanilla JS untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Canvas API dan Web Audio Chiptune). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Vanilla JS yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Canvas API.",
      "Fitur utama: Performa 60fps konstan dengan sistem object pooling ratusan peluru.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Vanilla JS, Canvas API, Web Audio Chiptune), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Eksekusi alur perintah visual dengan visualisasi pointer eksekusi.",
    "overview": "CodeRunner: Coding Puzzle Platformer dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Vue.js / React, Phaser 3, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Vue.js / React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Phaser 3 dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Vue.js / React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Phaser 3.",
      "Fitur utama: Eksekusi alur perintah visual dengan visualisasi pointer eksekusi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Vue.js / React, Phaser 3, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Algoritma fluktuasi harga pasar acak dengan event berita dadakan.",
    "overview": "Idle Stock Trader: Game Simulasi Pasar Saham Meme dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Tailwind CSS, LocalStorage untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan LocalStorage). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Algoritma fluktuasi harga pasar acak dengan event berita dadakan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Tailwind CSS, LocalStorage), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Grid snapping presisi dan pengaturan palet warna perabotan kamar.",
    "overview": "Isometric Room Decorator 3D dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Three.js, React Three Fiber, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Three.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React Three Fiber dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Three.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React Three Fiber.",
      "Fitur utama: Grid snapping presisi dan pengaturan palet warna perabotan kamar.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Three.js, React Three Fiber, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi beat onset otomatis dari file audio menggunakan FFT analyser.",
    "overview": "Rhythm Beats: Web-based Tap Rhythm Game dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Web Audio API, HTML5 Canvas untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Audio API dan HTML5 Canvas). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Audio API.",
      "Fitur utama: Deteksi beat onset otomatis dari file audio menggunakan FFT analyser.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Web Audio API, HTML5 Canvas), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Sistem inventaris item gabungan (kombinasi kunci dan obeng untuk membuka ventilasi).",
    "overview": "Escape Room Virtual: Teka-Teki Misteri Web dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Tailwind CSS, Audio Web untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan Audio Web). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Sistem inventaris item gabungan (kombinasi kunci dan obeng untuk membuka ventilasi).",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Tailwind CSS, Audio Web), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Visual retro CRT monitor effect dengan scanlines shader CSS.",
    "overview": "Snake Game Klasik dengan Modus Portal Dimensi dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem HTML5 Canvas, JavaScript, CSS3 untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan HTML5 Canvas untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (JavaScript dan CSS3). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis HTML5 Canvas yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan JavaScript.",
      "Fitur utama: Visual retro CRT monitor effect dengan scanlines shader CSS.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (HTML5 Canvas, JavaScript, CSS3), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kalkulasi evaluasi posisi catur dijalankan di Web Worker tanpa lag UI.",
    "overview": "Chess AI Engine Sederhana di Browser dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, React, Web Worker untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React dan Web Worker). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React.",
      "Fitur utama: Kalkulasi evaluasi posisi catur dijalankan di Web Worker tanpa lag UI.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, React, Web Worker), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Analisis frekuensi mikrofon real-time tanpa pengiriman data audio ke server.",
    "overview": "Flappy Bird Mod: Voice Pitch Controller dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem JavaScript, Web Audio API FFT, HTML5 Canvas untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan JavaScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Audio API FFT dan HTML5 Canvas). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis JavaScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Audio API FFT.",
      "Fitur utama: Analisis frekuensi mikrofon real-time tanpa pengiriman data audio ke server.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (JavaScript, Web Audio API FFT, HTML5 Canvas), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kecepatan animasi langkah pemecahan backtracking dapat diatur.",
    "overview": "Sudoku Generator & Auto-Solver dengan Animasi Backtracking dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, TypeScript, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TypeScript dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TypeScript.",
      "Fitur utama: Kecepatan animasi langkah pemecahan backtracking dapat diatur.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, TypeScript, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Animasi perpindahan kartu halus dengan efek visual damage popup.",
    "overview": "Card Battle RPG Sederhana: Deck Building Arena dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Framer Motion, Zustand, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Framer Motion dan Zustand dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Framer Motion.",
      "Fitur utama: Animasi perpindahan kartu halus dengan efek visual damage popup.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Framer Motion, Zustand, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Grafik fluktuasi populasi model Lotka-Volterra yang seimbang secara dinamis.",
    "overview": "Simulasi Ekosistem Hewan: Predator vs Prey Simulation dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem p5.js / Canvas, JavaScript, HTML5 untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan p5.js / Canvas untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (JavaScript dan HTML5). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis p5.js / Canvas yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan JavaScript.",
      "Fitur utama: Grafik fluktuasi populasi model Lotka-Volterra yang seimbang secara dinamis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (p5.js / Canvas, JavaScript, HTML5), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Database kata baku KBBI lengkap dengan indikator papan lawan real-time.",
    "overview": "Wordle Multiplayer Duel: Tebak Kata Beradu Cepat dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Socket.io, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Socket.io dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Socket.io.",
      "Fitur utama: Database kata baku KBBI lengkap dengan indikator papan lawan real-time.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Socket.io, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Implementasi algoritma DDA (Digital Differential Analyzer) murni dari nol.",
    "overview": "Maze Runner 3D Raycasting Engine (Ala Doom Klasik) dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, HTML5 2D Canvas, Math untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HTML5 2D Canvas dan Math). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HTML5 2D Canvas.",
      "Fitur utama: Implementasi algoritma DDA (Digital Differential Analyzer) murni dari nol.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, HTML5 2D Canvas, Math), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Sistem distribusi pipa oksigen jaringan grid yang menantang.",
    "overview": "Galactic Colony: Manajemen Logistik Koloni Mars dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Phaser 3, React, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Phaser 3 untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Phaser 3 yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React.",
      "Fitur utama: Sistem distribusi pipa oksigen jaringan grid yang menantang.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Phaser 3, React, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Integrasi Web Audio spatial panner 3D untuk latihan ketajaman telinga.",
    "overview": "Memory Match Card Game dengan Efek Sound Spatial dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Web Audio Panner, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Audio Panner dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Audio Panner.",
      "Fitur utama: Integrasi Web Audio spatial panner 3D untuk latihan ketajaman telinga.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Web Audio Panner, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Skalabilitas penanganan puluhan koneksi WebSocket serentak dengan Redis.",
    "overview": "Trivia Battle Royale: 50 Pemain Terakhir Bertahan dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, Redis PubSub, React, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Redis PubSub dan React dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Redis PubSub.",
      "Fitur utama: Skalabilitas penanganan puluhan koneksi WebSocket serentak dengan Redis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, Redis PubSub, React, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kalkulasi pantulan elastis dinding sudut menggunakan vektor dot-product.",
    "overview": "Mini Golf 2D dengan Fisika Pantulan Dinding dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem HTML5 Canvas, Physics Vector Math, JavaScript untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan HTML5 Canvas untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Physics Vector Math dan JavaScript). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis HTML5 Canvas yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Physics Vector Math.",
      "Fitur utama: Kalkulasi pantulan elastis dinding sudut menggunakan vektor dot-product.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (HTML5 Canvas, Physics Vector Math, JavaScript), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Rendering 10.000 sel pada 60fps menggunakan typed array memori efisien.",
    "overview": "Game of Life Interaktif: Visualizer Seluler Conway dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, HTML5 Canvas, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HTML5 Canvas dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HTML5 Canvas.",
      "Fitur utama: Rendering 10.000 sel pada 60fps menggunakan typed array memori efisien.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, HTML5 Canvas, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kompresi data goresan kuas vektor untuk pengiriman data jaringan yang ringan.",
    "overview": "Drawing Guessing Party Game (Ala Skribbl.io) dirancang untuk menjawab kebutuhan di sektor Sosial dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Socket.io, HTML5 Canvas, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Socket.io dan HTML5 Canvas dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Socket.io.",
      "Fitur utama: Kompresi data goresan kuas vektor untuk pengiriman data jaringan yang ringan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Socket.io, HTML5 Canvas, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Waktu respons sub-milidetik (kurang dari 2ms) dengan script Lua atomik.",
    "overview": "Distributed Rate Limiter Microservice dengan Redis Token Bucket dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go (Golang), Redis, gRPC, Docker untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go (Golang) untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Redis dan gRPC dan Docker). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go (Golang) yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Redis.",
      "Fitur utama: Waktu respons sub-milidetik (kurang dari 2ms) dengan script Lua atomik.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go (Golang), Redis, gRPC, Docker), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Protokol biner kustom minim overhead serialisasi berbasis Zero-Copy.",
    "overview": "Lightweight High-Throughput Message Queue dari Nol dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Rust / Go, TCP Sockets, File I/O untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Rust / Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TCP Sockets dan File I/O). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Rust / Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TCP Sockets.",
      "Fitur utama: Protokol biner kustom minim overhead serialisasi berbasis Zero-Copy.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Rust / Go, TCP Sockets, File I/O), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Proteksi signature HMAC SHA-256 untuk verifikasi keaslian payload.",
    "overview": "Serverless Webhook Delivery & Retry Engine dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js / TypeScript, BullMQ, PostgreSQL, Redis untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js / TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (BullMQ dan PostgreSQL dan Redis). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js / TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan BullMQ.",
      "Fitur utama: Proteksi signature HMAC SHA-256 untuk verifikasi keaslian payload.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js / TypeScript, BullMQ, PostgreSQL, Redis), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kalkulasi SLA 99.9% otomatis dan notifikasi alert instan ke Telegram/Discord bot.",
    "overview": "Real-time Multi-region Service Health Ping & Status Page dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go, TimescaleDB, React Frontend, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TimescaleDB dan React Frontend dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TimescaleDB.",
      "Fitur utama: Kalkulasi SLA 99.9% otomatis dan notifikasi alert instan ke Telegram/Discord bot.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go, TimescaleDB, React Frontend, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Dukungan multipart chunked upload untuk file besar berukuran gigabyte.",
    "overview": "Minimalist S3-Compatible Object Storage Gateway dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Python, Local Disk Storage, HTTP REST untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Local Disk Storage dan HTTP REST). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Local Disk Storage.",
      "Fitur utama: Dukungan multipart chunked upload untuk file besar berukuran gigabyte.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Python, Local Disk Storage, HTTP REST), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Script klien satu baris curl dengan autentikasi bearer token aman.",
    "overview": "Self-Hosted Dynamic DNS (DDNS) Server dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, FastAPI, Cloudflare API, Docker untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (FastAPI dan Cloudflare API dan Docker). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan FastAPI.",
      "Fitur utama: Script klien satu baris curl dengan autentikasi bearer token aman.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, FastAPI, Cloudflare API, Docker), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pencatatan metrik latensi request dan deteksi kegagalan instance otomatis.",
    "overview": "API Gateway dengan JWT Authentication & Reverse Proxy dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js / Go, Docker, JWT, HTTP Proxy untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js / Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Docker dan JWT dan HTTP Proxy). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js / Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Docker.",
      "Fitur utama: Pencatatan metrik latensi request dan deteksi kegagalan instance otomatis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js / Go, Docker, JWT, HTTP Proxy), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Dukungan ekspresi cron standar dengan penanganan timeout tugas otomatis.",
    "overview": "Cron Job & Background Task Scheduler Terpusat dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python, Celery, Redis, FastAPI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Celery dan Redis dan FastAPI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Celery.",
      "Fitur utama: Dukungan ekspresi cron standar dengan penanganan timeout tugas otomatis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python, Celery, Redis, FastAPI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Metrik simulasi penggunaan CPU dan memori dinamis berbasis formula fisika.",
    "overview": "Kubernetes Cluster Auto-Scaler Simulator dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go, React, WebSocket, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React dan WebSocket dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React.",
      "Fitur utama: Metrik simulasi penggunaan CPU dan memori dinamis berbasis formula fisika.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go, React, WebSocket, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Isolasi sandbox aman untuk mencegah ancaman eksploitasi format file berbahaya.",
    "overview": "File Metadata Extractor & Virus Scanner Pipeline dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, ClamAV, Sharp, Docker untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (ClamAV dan Sharp dan Docker). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan ClamAV.",
      "Fitur utama: Isolasi sandbox aman untuk mencegah ancaman eksploitasi format file berbahaya.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, ClamAV, Sharp, Docker), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Latensi respons di bawah 500 mikrodetik berkat pemuatan data langsung ke RAM.",
    "overview": "GeoIP Lookup & IP Intelligence REST API dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go, MaxMind DB Reader, Chi Router untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (MaxMind DB Reader dan Chi Router). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan MaxMind DB Reader.",
      "Fitur utama: Latensi respons di bawah 500 mikrodetik berkat pemuatan data langsung ke RAM.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go, MaxMind DB Reader, Chi Router), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pencatatan checksum hash file migrasi untuk mencegah modifikasi file lama.",
    "overview": "Database Migration CLI Tool untuk Multi-DB dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Rust / Go, SQL Parser, CLI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Rust / Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (SQL Parser dan CLI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Rust / Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan SQL Parser.",
      "Fitur utama: Pencatatan checksum hash file migrasi untuk mencegah modifikasi file lama.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Rust / Go, SQL Parser, CLI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kompresi blok data log berbasis gzip untuk menghemat kapasitas ruang disk.",
    "overview": "Log Ingestion & Full-Text Search Engine Sederhana dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Rust, Inverted Index, HTTP API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Rust untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Inverted Index dan HTTP API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Rust yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Inverted Index.",
      "Fitur utama: Kompresi blok data log berbasis gzip untuk menghemat kapasitas ruang disk.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Rust, Inverted Index, HTTP API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pencegahan masalah N+1 query problem menggunakan DataLoader batching.",
    "overview": "GraphQL to REST Dynamic Aggregator Gateway dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, Apollo Server, DataLoader untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Apollo Server dan DataLoader). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Apollo Server.",
      "Fitur utama: Pencegahan masalah N+1 query problem menggunakan DataLoader batching.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, Apollo Server, DataLoader), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Halaman persetujuan izin user consent dengan scope kustom.",
    "overview": "Single Sign-On (SSO) OAuth2 & OIDC Mock Provider dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / TypeScript, JWT, SQLite untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (JWT dan SQLite). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan JWT.",
      "Fitur utama: Halaman persetujuan izin user consent dengan scope kustom.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / TypeScript, JWT, SQLite), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pembersihan otomatis berkas backup lama yang berumur lebih dari 30 hari.",
    "overview": "Automated Database Backup to Cloud Storage Bot dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Bash / Python, Docker, GPG, AWS S3 CLI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Bash / Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Docker dan GPG dan AWS S3 CLI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Bash / Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Docker.",
      "Fitur utama: Pembersihan otomatis berkas backup lama yang berumur lebih dari 30 hari.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Bash / Python, Docker, GPG, AWS S3 CLI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Throttling paket data 60Hz per klien untuk menjaga efisiensi jaringan.",
    "overview": "Real-time Collaborative Cursor & Presence Server dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Elixir, WebSockets, Broadcast Channels untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Elixir untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (WebSockets dan Broadcast Channels). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Elixir yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan WebSockets.",
      "Fitur utama: Throttling paket data 60Hz per klien untuk menjaga efisiensi jaringan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Elixir, WebSockets, Broadcast Channels), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pengalihan 301 instan di bawah 5 milidetik memanfaatkan memory cache.",
    "overview": "URL Shortener Berkecepatan Tinggi dengan Analitik Geografis dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Node.js, Redis, PostgreSQL untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Redis dan PostgreSQL). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Redis.",
      "Fitur utama: Pengalihan 301 instan di bawah 5 milidetik memanfaatkan memory cache.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Node.js, Redis, PostgreSQL), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Membaca statistik performa langsung dari UNIX socket Docker daemon.",
    "overview": "Docker Container Health Monitoring Agent dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Python, Docker Engine Socket API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Python untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Docker Engine Socket API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Python yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Docker Engine Socket API.",
      "Fitur utama: Membaca statistik performa langsung dari UNIX socket Docker daemon.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Python, Docker Engine Socket API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Perlindungan brute-force menggunakan hashing memory-hard Argon2id.",
    "overview": "Cryptographic Password Vault API dengan Zero-Knowledge Architecture dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Rust / Node.js, Argon2id, AES-256-GCM, PostgreSQL untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Rust / Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Argon2id dan AES-256-GCM dan PostgreSQL). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Rust / Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Argon2id.",
      "Fitur utama: Perlindungan brute-force menggunakan hashing memory-hard Argon2id.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Rust / Node.js, Argon2id, AES-256-GCM, PostgreSQL), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Ekstraksi otomatis file invoice PDF dari lampiran email masuk.",
    "overview": "Email Ingestion & Parsing Webhook Service dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, smtp-server, mailparser, FastAPI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (smtp-server dan mailparser dan FastAPI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan smtp-server.",
      "Fitur utama: Ekstraksi otomatis file invoice PDF dari lampiran email masuk.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, smtp-server, mailparser, FastAPI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Kompilasi ratusan halaman artikel blog dalam waktu kurang dari satu detik.",
    "overview": "Static Site Generator (SSG) Sederhana Berbasis Markdown dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go / Rust / Node.js, Markdown Parser, Templates untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go / Rust / Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Markdown Parser dan Templates). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go / Rust / Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Markdown Parser.",
      "Fitur utama: Kompilasi ratusan halaman artikel blog dalam waktu kurang dari satu detik.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go / Rust / Node.js, Markdown Parser, Templates), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pemberian jaminan pengiriman pesan at-least-once tanpa distributed locking.",
    "overview": "Transactional Outbox Pattern Event Publisher dirancang untuk menjawab kebutuhan di sektor Finance dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem PostgreSQL, Go / TypeScript, RabbitMQ / Kafka untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan PostgreSQL untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Go / TypeScript dan RabbitMQ / Kafka). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis PostgreSQL yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Go / TypeScript.",
      "Fitur utama: Pemberian jaminan pengiriman pesan at-least-once tanpa distributed locking.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (PostgreSQL, Go / TypeScript, RabbitMQ / Kafka), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi server backend yang down secara berkala (active health checks).",
    "overview": "HTTP Load Balancer dengan Algoritma Weighted Round-Robin dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go, net/http/httputil, Concurrency untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (net/http/httputil dan Concurrency). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan net/http/httputil.",
      "Fitur utama: Deteksi server backend yang down secara berkala (active health checks).",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go, net/http/httputil, Concurrency), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Enkripsi multi-penerima menggunakan kunci publik SSH masing-masing anggota tim.",
    "overview": "Secure Secret Management Daemon untuk Local Development dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go, Age Encryption, CLI untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Age Encryption dan CLI). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Age Encryption.",
      "Fitur utama: Enkripsi multi-penerima menggunakan kunci publik SSH masing-masing anggota tim.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go, Age Encryption, CLI), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Navigasi keyboard super cepat terinspirasi dari vim keybindings.",
    "overview": "Git TUI: Terminal User Interface untuk Git History dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go (Bubbletea), Git CLI / libgit2 untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go (Bubbletea) untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Git CLI / libgit2). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go (Bubbletea) yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Git CLI / libgit2.",
      "Fitur utama: Navigasi keyboard super cepat terinspirasi dari vim keybindings.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go (Bubbletea), Git CLI / libgit2), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi otomatis tipe union dan properti opsional dari kumpulan data sampel.",
    "overview": "JSON Schema to TypeScript / Zod Type Generator CLI dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, Node.js, Commander untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Node.js dan Commander). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Node.js.",
      "Fitur utama: Deteksi otomatis tipe union dan properti opsional dari kumpulan data sampel.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, Node.js, Commander), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pemrosesan file CSV puluhan megabyte langsung di browser tanpa upload server.",
    "overview": "CSV to SQL & Data Quality Profiler Web Tool dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, PapaParse, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (PapaParse dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan PapaParse.",
      "Fitur utama: Pemrosesan file CSV puluhan megabyte langsung di browser tanpa upload server.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, PapaParse, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Analisis dependency graph instan dengan penandaan visual di sidebar editor.",
    "overview": "VS Code Extension: Dead Code & Unused Export Detector dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, VS Code Extension API, AST Parser untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (VS Code Extension API dan AST Parser). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan VS Code Extension API.",
      "Fitur utama: Analisis dependency graph instan dengan penandaan visual di sidebar editor.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, VS Code Extension API, AST Parser), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Ekspor diagram visual ke format gambar vektor SVG resolusi tinggi.",
    "overview": "Interactive Regex Railway Diagram Generator dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, SVG, Regex Parser, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (SVG dan Regex Parser dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan SVG.",
      "Fitur utama: Ekspor diagram visual ke format gambar vektor SVG resolusi tinggi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, SVG, Regex Parser, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Rekomendasi substitusi paket ringan (misal mengganti Moment.js dengan date-fns).",
    "overview": "Package.json Dependency Security & Bloat Audit CLI dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Node.js, Bundlephobia API, npm Registry API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Bundlephobia API dan npm Registry API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Bundlephobia API.",
      "Fitur utama: Rekomendasi substitusi paket ringan (misal mengganti Moment.js dengan date-fns).",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Node.js, Bundlephobia API, npm Registry API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Matriks perbandingan semua kombinasi latar depan dan latar belakang dalam satu tabel.",
    "overview": "Web-Based Color Palette Accessibility Contrast Matrix dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Culori / Color Math, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Culori / Color Math dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Culori / Color Math.",
      "Fitur utama: Matriks perbandingan semua kombinasi latar depan dan latar belakang dalam satu tabel.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Culori / Color Math, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Validasi sintaks YAML real-time dengan editor Monaco terintegrasi.",
    "overview": "Docker Compose to Kubernetes Manifest Translator dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, YAML Parser, React, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (YAML Parser dan React dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan YAML Parser.",
      "Fitur utama: Validasi sintaks YAML real-time dengan editor Monaco terintegrasi.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, YAML Parser, React, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Peringatan otomatis saat terdeteksi pengiriman password teks polos via HTTP.",
    "overview": "Network Packet Sniffer & Traffic Visualizer Sederhana dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python (Scapy), FastAPI, Chart.js, React untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat mahir dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python (Scapy) untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (FastAPI dan Chart.js dan React). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python (Scapy) yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan FastAPI.",
      "Fitur utama: Peringatan otomatis saat terdeteksi pengiriman password teks polos via HTTP.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python (Scapy), FastAPI, Chart.js, React), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Respons instan dengan custom delay header untuk simulasi koneksi lemot.",
    "overview": "Mock API Endpoint with Dynamic JSON Generator Web App dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Faker-js, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Faker-js dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Faker-js.",
      "Fitur utama: Respons instan dengan custom delay header untuk simulasi koneksi lemot.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Faker-js, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Konektor relasi satu-ke-banyak (1:N) visual dengan penataan garis otomatis.",
    "overview": "Interactive Database ERD to SQL Schema Designer dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, React Flow, Tailwind CSS, Zustand untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (React Flow dan Tailwind CSS dan Zustand). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan React Flow.",
      "Fitur utama: Konektor relasi satu-ke-banyak (1:N) visual dengan penataan garis otomatis.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, React Flow, Tailwind CSS, Zustand), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Integrasi riwayat pencatatan tugas harian ke file format markdown lokal.",
    "overview": "Terminal Pomodoro & Break Enforcer CLI dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Rust / Go, Terminal ANSI, Desktop Notifications untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Rust / Go untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Terminal ANSI dan Desktop Notifications). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Rust / Go yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Terminal ANSI.",
      "Fitur utama: Integrasi riwayat pencatatan tugas harian ke file format markdown lokal.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Rust / Go, Terminal ANSI, Desktop Notifications), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Rendering waterfall spectrogram beresolusi tinggi 60 frame per detik.",
    "overview": "Web-Based Audio Frequency Spectrogram Analyzer dirancang untuk menjawab kebutuhan di sektor Hiburan dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem HTML5 Canvas, Web Audio API, JavaScript untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan HTML5 Canvas untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Audio API dan JavaScript). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis HTML5 Canvas yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Audio API.",
      "Fitur utama: Rendering waterfall spectrogram beresolusi tinggi 60 frame per detik.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (HTML5 Canvas, Web Audio API, JavaScript), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Mode presenter dual-screen dengan catatan pembicara dan timer berdetik.",
    "overview": "Markdown to Clean HTML Slide Presentation Deck dirancang untuk menjawab kebutuhan di sektor Edukasi dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Tailwind CSS, PrismJS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan PrismJS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Mode presenter dual-screen dengan catatan pembicara dan timer berdetik.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Tailwind CSS, PrismJS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Perhitungan statistik latensi akurat tanpa bias jeda garbage collection.",
    "overview": "HTTP Benchmark & Stress Testing CLI dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Go (Goroutines), HTTP Client, Terminal Charts untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Go (Goroutines) untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (HTTP Client dan Terminal Charts). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Go (Goroutines) yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan HTTP Client.",
      "Fitur utama: Perhitungan statistik latensi akurat tanpa bias jeda garbage collection.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Go (Goroutines), HTTP Client, Terminal Charts), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Editor interaktif per kolom menit, jam, hari dengan penjelasan langsung.",
    "overview": "Cron Expression Humanizer & Next Runs Visualizer dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, cronstrue, date-fns, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (cronstrue dan date-fns dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan cronstrue.",
      "Fitur utama: Editor interaktif per kolom menit, jam, hari dengan penjelasan langsung.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, cronstrue, date-fns, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Perbandingan visual side-by-side sebelum dan sesudah kompresi tanpa degradasi mutu.",
    "overview": "Image SVG Optimizer & Path Cleaner Web Tool dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, SVGO Web, Monaco Editor, Tailwind untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (SVGO Web dan Monaco Editor dan Tailwind). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan SVGO Web.",
      "Fitur utama: Perbandingan visual side-by-side sebelum dan sesudah kompresi tanpa degradasi mutu.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, SVGO Web, Monaco Editor, Tailwind), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Validasi tipe nilai variabel (apakah URL valid, angka port, atau boolean).",
    "overview": "Environment Variable Sync CLI (.env Validator) dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem TypeScript, Node.js, Chalk untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan TypeScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Node.js dan Chalk). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis TypeScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Node.js.",
      "Fitur utama: Validasi tipe nilai variabel (apakah URL valid, angka port, atau boolean).",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (TypeScript, Node.js, Chalk), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Visualisasi kurva akselerasi fisika dengan salin kode CSS one-click.",
    "overview": "Interactive CSS Cubic-Bezier Curve Tuner dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, SVG Math, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (SVG Math dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan SVG Math.",
      "Fitur utama: Visualisasi kurva akselerasi fisika dengan salin kode CSS one-click.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, SVG Math, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Deteksi risiko bus factor pada modul sistem yang hanya dipahami satu programmer.",
    "overview": "Git Repository Contributor Analytics Dashboard dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Python / Node.js, Chart.js, Git Log Parser, React untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Python / Node.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Chart.js dan Git Log Parser dan React). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Python / Node.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Chart.js.",
      "Fitur utama: Deteksi risiko bus factor pada modul sistem yang hanya dipahami satu programmer.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Python / Node.js, Chart.js, Git Log Parser, React), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Dukungan drag and drop file biner lokal untuk hashing instan tanpa upload.",
    "overview": "Web-Based Base64, Hex, and Hash Encoder/Decoder dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Web Crypto API, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Web Crypto API dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Web Crypto API.",
      "Fitur utama: Dukungan drag and drop file biner lokal untuk hashing instan tanpa upload.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Web Crypto API, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Privasi total: data token tidak pernah dikirimkan keluar dari browser pengguna.",
    "overview": "JWT Token Debugger & Expiry Calculator Offline dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, Tailwind CSS, Web Crypto API untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Tailwind CSS dan Web Crypto API). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Tailwind CSS.",
      "Fitur utama: Privasi total: data token tidak pernah dikirimkan keluar dari browser pengguna.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, Tailwind CSS, Web Crypto API), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Pembersihan URL otomatis saat menekan shortcut keyboard Ctrl+C pada address bar.",
    "overview": "Browser Extension: Clean Link & Tracking Parameter Remover dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem JavaScript, WebExtensions API, CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan JavaScript untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (WebExtensions API dan CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis JavaScript yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan WebExtensions API.",
      "Fitur utama: Pembersihan URL otomatis saat menekan shortcut keyboard Ctrl+C pada address bar.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (JavaScript, WebExtensions API, CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Perbandingan deviasi standar latensi jaringan secara visual berdampingan.",
    "overview": "API Response Time Benchmarking & Compare Tool dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem Next.js, Recharts, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat menengah dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan Next.js untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (Recharts dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis Next.js yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan Recharts.",
      "Fitur utama: Perbandingan deviasi standar latensi jaringan secara visual berdampingan.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (Next.js, Recharts, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
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
    "highlights": "Validasi struktur data ide otomatis dengan preview kartu spin langsung.",
    "overview": "DevSpin Custom Idea Pack Creator & Exporter dirancang untuk menjawab kebutuhan di sektor Produktivitas dengan arsitektur modern dan performa tinggi. Proyek ini memadukan ekosistem React, TypeScript, Tailwind CSS untuk menghasilkan solusi tangguh dan efisien. Pengembang dapat mengasah kemampuan teknis tingkat pemula dalam mengelola alur data, rendering responsif, serta penanganan edge-case di level produksi.",
    "architecture": "Alur Arsitektur Sistem: Frontend dibangun menggunakan React untuk mengelola interaksi antarmuka yang reaktif dan state lokal. Komunikasi data menggunakan protokol efisien yang menghubungkan antarmuka dengan layer persistence (TypeScript dan Tailwind CSS). Arsitektur memisahkan logika bisnis, store, dan presentasi agar mudah diuji dan dikembangkan secara berkelanjutan.",
    "features": [
      "Antarmuka interaktif dan responsif berbasis React yang optimal di berbagai ukuran layar.",
      "Pengelolaan alur data dan state yang efisien memanfaatkan TypeScript.",
      "Fitur utama: Validasi struktur data ide otomatis dengan preview kartu spin langsung.",
      "Validasi input ketat, penanganan error terpusat, dan umpan balik visual instan bagi pengguna."
    ],
    "steps": [
      "Tahap 1 (Fondasi & Setup): Inisialisasi struktur repositori, konfigurasi tooling (React, TypeScript, Tailwind CSS), dan perancangan skema data serta mockup antarmuka.",
      "Tahap 2 (Core Logic & Fitur Inti): Implementasi logika bisnis utama, integrasi pipeline data/API, dan validasi fungsionalitas secara menyeluruh.",
      "Tahap 3 (Polishing, Keamanan & Deploy): Optimasi performa render, penambahan feedback animasi mikro, audit aksesibilitas, dan publikasi ke platform hosting."
    ]
  }
];
