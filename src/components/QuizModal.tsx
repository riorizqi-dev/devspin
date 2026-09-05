import React, { useState, useEffect } from 'react';
import {
  CloseMarkIcon,
  ArrowNavLeftIcon,
  ArrowNavRightIcon,
  CheckmarkIcon,
  GuidedTunerIcon,
} from './Icons';
import { sound } from '../utils/audio';
import { type QuizFilter, filterProjects } from '../utils/storage';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (filter: QuizFilter) => void;
}

interface QuestionOption<T> {
  value: T;
  label: string;
  desc: string;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [step, setStep] = useState(1);
  const [filter, setFilter] = useState<QuizFilter>({});
  const totalSteps = 5;

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFilter({});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { available, totalMatching } = filterProjects(filter, true);

  const skillOptions: QuestionOption<QuizFilter['difficulty']>[] = [
    { value: 'pemula', label: 'Pemula (Beginner)', desc: 'Fondasi sintaks, manipulasi DOM, state dasar, dan utilitas sederhana.' },
    { value: 'menengah', label: 'Menengah (Intermediate)', desc: 'Integrasi REST API, autentikasi, database lokal, dan arsitektur rapi.' },
    { value: 'mahir', label: 'Mahir (Advanced)', desc: 'Distributed systems, WebAssembly, WebRTC, algoritma kompleks, dan optimasi performa.' },
  ];

  const categoryOptions: QuestionOption<QuizFilter['category']>[] = [
    { value: 'web', label: 'Web Development', desc: 'Frontend modern, Fullstack Next.js, dan aplikasi browser interaktif.' },
    { value: 'mobile', label: 'Mobile App', desc: 'React Native, Flutter, offline-first, dan interaksi sensor hardware.' },
    { value: 'ai', label: 'AI & Machine Learning', desc: 'LLM agents, RAG, Computer Vision, dan pemrosesan audio lokal.' },
    { value: 'game', label: 'Game Development', desc: 'Canvas 2D, Phaser, Three.js 3D, game loop, dan game teka-teki retro.' },
    { value: 'backend', label: 'Backend & DevOps', desc: 'Go, Rust, Microservices, queue message, caching, dan pipeline cloud.' },
    { value: 'tools', label: 'DevTools & Data', desc: 'CLI productivity, ekstensi editor, visualizer data, dan parser skema.' },
  ];

  const goalOptions: QuestionOption<QuizFilter['goal']>[] = [
    { value: 'portofolio', label: 'Portofolio lamaran kerja', desc: 'Project dengan polish tinggi, arsitektur bersih, dan demo yang memukau rekruter.' },
    { value: 'belajar', label: 'Eksplorasi & belajar baru', desc: 'Mencoba teknologi baru dan memperdalam konsep inti pemrograman.' },
    { value: 'lomba', label: 'Lomba / hackathon', desc: 'Ide unik berdaya guna tinggi dengan faktor wow dan nilai solusi nyata.' },
    { value: 'iseng', label: 'Santai / weekend fun', desc: 'Project ringan, menyenangkan, dan cepat selesai tanpa beban berlebih.' },
  ];

  const durationOptions: QuestionOption<QuizFilter['duration']>[] = [
    { value: '< 1 hari', label: '< 1 hari (sprint kilat)', desc: 'Selesai dalam satu atau dua kali duduk, fokus pada satu fitur kunci.' },
    { value: '1 minggu', label: '1 minggu (weekend project)', desc: 'Cukup waktu untuk mendesain antarmuka, menyambung database, dan deploy.' },
    { value: '1 bulan+', label: '1 bulan lebih (proyek matang)', desc: 'Proyek berskala penuh dengan testing, dokumentasi, dan integrasi lanjutan.' },
  ];

  const domainOptions: QuestionOption<QuizFilter['domain']>[] = [
    { value: 'produktivitas', label: 'Produktivitas & tools', desc: 'Alat kerja developer, pengatur waktu, note taking, dan otomatisasi alur.' },
    { value: 'edukasi', label: 'Edukasi & edtech', desc: 'Flashcard, platform kuis, visualizer konsep, dan pembelajaran interaktif.' },
    { value: 'finance', label: 'Finansial & fintech', desc: 'Pelacak pengeluaran, simulasi investasi, kalkulator harga, dan invoice.' },
    { value: 'kesehatan', label: 'Kesehatan & wellness', desc: 'Pengingat obat, asisten nutrisi, jurnal kebugaran, dan habit tracker.' },
    { value: 'sosial', label: 'Sosial & komunitas', desc: 'Platform relawan, berbagi makanan, forum anonim, dan donasi transparan.' },
    { value: 'hiburan', label: 'Hiburan & kreatif', desc: 'Game interaktif, synthesizer musik, dekorasi kanvas, dan player podcast.' },
  ];

  const handleNext = () => {
    sound.playClick();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete(filter);
    }
  };

  const handleBack = () => {
    sound.playClick();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinishEarly = () => {
    sound.playClick();
    onComplete(filter);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-2xl bg-devDark-900 border border-devDark-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-devDark-750 flex items-center justify-between bg-devDark-950/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-devDark-850 text-devCyan border border-devDark-750">
              <GuidedTunerIcon size={18} />
            </div>
            <div>
              <h2 id="quiz-modal-title" className="text-base font-bold text-white flex items-center gap-2">
                Kuis guided match
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-devDark-800 text-devCyan border border-devDark-700">
                  Langkah {step} dari {totalSteps}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Pilih preferensimu untuk menyempitkan strip spin gacha.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Tutup kuis"
            className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-slate-400 hover:text-white hover:bg-devDark-800 transition-colors flex items-center justify-center"
          >
            <CloseMarkIcon size={18} />
          </button>
        </div>

        {/* Progress Bar (Solid color, NO gradient) */}
        <div className="w-full bg-devDark-800 h-1">
          <div
            className="bg-devCyan h-1 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Match Count Indicator */}
        <div className="px-6 py-2 bg-devDark-850 border-b border-devDark-800 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">
            Ide yang cocok saat ini:
          </span>
          <span className="font-semibold text-devCyan">
            {available.length} ide siap spin ({totalMatching} total)
          </span>
        </div>

        {/* Question Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Tingkat pengalaman koding kamu
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Pilih kompleksitas arsitektur yang paling nyaman untuk kamu selesaikan saat ini.
              </p>
              <div className="space-y-3">
                {skillOptions.map((opt) => {
                  const isSelected = filter.difficulty === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFilter({ ...filter, difficulty: opt.value });
                      }}
                      className={`w-full p-4 rounded-xl text-left border transition-colors flex items-start justify-between min-h-[44px] ${
                        isSelected
                          ? 'bg-devDark-800 border-devCyan text-white'
                          : 'bg-devDark-850 border-devDark-750 hover:border-devDark-650 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white mb-0.5">{opt.label}</div>
                        <div className="text-xs text-slate-400">{opt.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                          isSelected ? 'border-devCyan bg-devCyan text-black' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <CheckmarkIcon size={12} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Pilih fokus kategori / tech track
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Bidang teknologi mana yang paling ingin kamu sentuh dalam proyek ini?
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {categoryOptions.map((opt) => {
                  const isSelected = filter.category === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFilter({ ...filter, category: opt.value });
                      }}
                      className={`p-3.5 rounded-xl text-left border transition-colors flex flex-col justify-between min-h-[44px] ${
                        isSelected
                          ? 'bg-devDark-800 border-devCyan text-white'
                          : 'bg-devDark-850 border-devDark-750 hover:border-devDark-650 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm text-white">{opt.label}</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-devCyan bg-devCyan text-black' : 'border-slate-600'
                          }`}
                        >
                          {isSelected && <CheckmarkIcon size={10} />}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400 leading-normal">{opt.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Tujuan utama pengerjaan project
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Apa motivasi terbesar kamu saat memutuskan untuk memulai koding sekarang?
              </p>
              <div className="space-y-3">
                {goalOptions.map((opt) => {
                  const isSelected = filter.goal === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFilter({ ...filter, goal: opt.value });
                      }}
                      className={`w-full p-4 rounded-xl text-left border transition-colors flex items-start justify-between min-h-[44px] ${
                        isSelected
                          ? 'bg-devDark-800 border-devAmber text-white'
                          : 'bg-devDark-850 border-devDark-750 hover:border-devDark-650 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white mb-0.5">{opt.label}</div>
                        <div className="text-xs text-slate-400">{opt.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                          isSelected ? 'border-devAmber bg-devAmber text-black' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <CheckmarkIcon size={12} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Estimasi waktu yang kamu sediakan
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Berapa banyak alokasi waktu yang ingin kamu luangkan untuk menyelesaikan proyek ini?
              </p>
              <div className="space-y-3">
                {durationOptions.map((opt) => {
                  const isSelected = filter.duration === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFilter({ ...filter, duration: opt.value });
                      }}
                      className={`w-full p-4 rounded-xl text-left border transition-colors flex items-start justify-between min-h-[44px] ${
                        isSelected
                          ? 'bg-devDark-800 border-devCyan text-white'
                          : 'bg-devDark-850 border-devDark-750 hover:border-devDark-650 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white mb-0.5">{opt.label}</div>
                        <div className="text-xs text-slate-400">{opt.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                          isSelected ? 'border-devCyan bg-devCyan text-black' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <CheckmarkIcon size={12} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Minat domain masalah
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Topik dunia nyata apa yang paling menarik bagi kamu untuk dipecahkan solusinya?
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {domainOptions.map((opt) => {
                  const isSelected = filter.domain === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setFilter({ ...filter, domain: opt.value });
                      }}
                      className={`p-3.5 rounded-xl text-left border transition-colors flex flex-col justify-between min-h-[44px] ${
                        isSelected
                          ? 'bg-devDark-800 border-devAmber text-white'
                          : 'bg-devDark-850 border-devDark-750 hover:border-devDark-650 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-white">{opt.label}</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-devAmber bg-devAmber text-black' : 'border-slate-600'
                          }`}
                        >
                          {isSelected && <CheckmarkIcon size={10} />}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-400 leading-normal">{opt.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-devDark-750 bg-devDark-950/80 flex items-center justify-between gap-3">
          <div>
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 border border-devDark-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <ArrowNavLeftIcon size={14} />
                Kembali
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="min-h-[44px] px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition-colors"
              >
                Batal
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {step < totalSteps && (
              <button
                type="button"
                onClick={handleFinishEarly}
                className="min-h-[44px] px-3.5 py-2 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-slate-300 text-xs font-semibold transition-colors border border-devDark-700"
              >
                Langsung spin
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="min-h-[44px] px-5 py-2 rounded-xl bg-devCyan hover:bg-devCyan-hover text-black font-bold text-xs flex items-center gap-2 transition-colors"
            >
              {step < totalSteps ? (
                <>
                  Lanjut
                  <ArrowNavRightIcon size={14} />
                </>
              ) : (
                'Kunci filter dan spin sekarang'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
