# DevSpin

> "Bingung mau ngoding apa? Spin aja."

[![Live Demo](https://img.shields.io/badge/Live_Demo-devspin.vercel.app-00e5ff?style=for-the-badge&logo=vercel&logoColor=black)](https://devspin.vercel.app)
[![Tech Stack](https://img.shields.io/badge/React_19-TypeScript-blue?style=for-the-badge&logo=react)](https://devspin.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**Live Demo:** [https://devspin.vercel.app](https://devspin.vercel.app)

DevSpin adalah generator ide project programmer berbasis web dengan mekanisme interaktif horizontal roulette reel (gacha / case opening ala CS:GO & LuckyRoyale). Aplikasi ini dirancang untuk membantu developer pemula hingga menengah yang sering terjebak di fase kebingungan menentukan ide project portofolio atau side project.

---

## 🎯 Mengapa DevSpin?

Banyak programmer sering stuck mencari ide project dan berakhir membaca artikel generik "50 Ide Project" yang membosankan. DevSpin mengubah proses tersebut menjadi pengalaman gamified yang seru, cepat, dan terarah:

- **Bukan List Membosankan**: Memilih ide melalui horizontal reel roulette dengan deselerasi fisika nyata via RAF (requestAnimationFrame) berkecepatan tinggi yang melambat mulus.
- **Spesifikasi Mendalam (Bukan Cuma 1 Kalimat)**: Setiap ide dilengkapi deskripsi latar belakang komprehensif, arsitektur sistem & alur data, checklist 4 fitur utama, dan 3 tahap roadmap implementasi.
- **Anti-Repeat Engine**: Ide yang sudah didapat dicatat di LocalStorage dan tidak akan muncul kembali sampai seluruh pool ide habis.
- **Dua Pilihan Mode**: Mode Terpandu (Guided Match 5 langkah) atau Mode Acak (Instant Random Spin).
- **Audio Sintetis**: Efek suara detik mekanis ticker dinamis dan win fanfare menggunakan native Web Audio API (tanpa file audio eksternal).
- **Export Kartu Gambar**: Generate kartu rangkuman ide resolusi tinggi (1200x630 PNG) langsung di browser menggunakan HTML5 Canvas untuk dibagikan ke media sosial.

---

## ✨ Fitur Utama

### 1. Roulette Strip Reel Interaktif
- Animasi conveyor drift horizontal berkelanjutan saat idle.
- Saat tombol ditekan atau menekan tombol `Spacebar`, strip meluncur kencang dan melambat secara realistis menggunakan kurva easing `cubic-bezier(0.06, 0.85, 0.18, 1)`.
- Strip tersusun atas deretan kartu dinamis yang melewati jarum penunjuk tengah dengan feedback highlight pemenang dan konfeti.

### 2. Mode Pemilihan Ide
- **Mode Terpandu (Guided Match)**: Kuis 5 langkah untuk menyaring ide berdasarkan tingkat keahlian (pemula, menengah, mahir), tech track/kategori, tujuan project (portofolio, belajar stack baru, iseng/fun), ketersediaan waktu, dan preferensi domain.
- **Mode Acak (Random Spin)**: Spin instan tanpa filter dari seluruh database 155 ide project unik.

### 3. Database 155 Ide Terkurasi
Mencakup 6 kategori utama dengan tech stack modern, tingkat kesulitan, estimasi durasi pengerjaan, dan highlight fitur kunci:
- **Web Development**: Frontend, Fullstack, Web APIs (React, Next.js, Vue, Tailwind, Supabase)
- **Mobile App**: Cross-platform & Native (React Native, Flutter, Kotlin, Offline-First)
- **AI & Machine Learning**: LLM, RAG, Computer Vision, Agents, Embeddings
- **Game Development**: 2D/3D Canvas, Phaser, Godot, PixiJS, WebGL
- **Backend & DevOps**: Go, Rust, Node.js, Microservices, Docker, Redis, Kubernetes
- **DevTools & Data**: CLI utilities, VS Code extensions, data visualizers, formatters

### 4. Manajemen Histori & Bookmark
- Simpan ide favorit ke daftar bookmark lokal.
- Riwayat perolehan spin lengkap dengan filter pencarian dan badge status.
- Reset pool anti-repeat kapan saja jika ingin memulai kembali dari awal.

### 5. Export Kartu Gambar (Canvas Share)
- Menghasilkan kartu grafis 1200x630 PNG berkualitas tinggi lengkap dengan judul, deskripsi, badges, dan tech stack.
- Fitur salin ringkasan teks terformat ke clipboard.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4 (Obsidian dark arcade theme & Electric Cyan Blue `#00e5ff` accents)
- **Icons**: Custom line-art SVG technical icons (stroke 1.75px)
- **Audio**: Native Web Audio API Synthesizer (Zero asset download)
- **Graphic Export**: HTML5 2D Canvas API
- **Celebration Effects**: `canvas-confetti`

---

## 🚀 Memulai (Getting Started)

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18 ke atas
- npm, pnpm, atau yarn

### Instalasi & Menjalankan Lokal

```bash
# 1. Clone repositori
git clone https://github.com/riorizqi-dev/devspin.git

# 2. Masuk ke direktori project
cd devspin

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173` untuk mulai mencoba DevSpin.

### Build untuk Produksi

```bash
npm run build
```

Hasil build yang siap dideploy akan berada di folder `dist/`.

---

## ⌨️ Pintasan Keyboard

- `Spacebar`: Memutar roulette strip reel langsung dari halaman utama (selama kuis tidak aktif dan input teks tidak sedang difokuskan).

---

## 📄 Lisensi

Didistribusikan di bawah lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.
