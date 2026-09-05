import React, { useEffect } from 'react';
import {
  CloseMarkIcon,
  RotateReelIcon,
  GuidedTunerIcon,
  RandomDiceIcon,
  AntiRepeatIcon,
} from './Icons';
import { sound } from '../utils/audio';

interface ExhaustedPoolModalProps {
  isOpen: boolean;
  categoryFilter?: string;
  onClose: () => void;
  onResetCategory: () => void;
  onOpenQuiz: () => void;
  onSwitchToRandom: () => void;
}

export const ExhaustedPoolModal: React.FC<ExhaustedPoolModalProps> = ({
  isOpen,
  categoryFilter,
  onClose,
  onResetCategory,
  onOpenQuiz,
  onSwitchToRandom,
}) => {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exhausted-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-md bg-devDark-900 border border-devDark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Top Solid Border */}
        <div className="h-1 w-full bg-devAmber" />

        {/* Header with Close */}
        <div className="p-6 text-center relative">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Tutup jendela"
            className="absolute top-4 right-4 min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <CloseMarkIcon size={18} />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-devDark-800 text-devAmber border border-devDark-700 flex items-center justify-center mx-auto mb-4">
            <AntiRepeatIcon size={22} />
          </div>

          <h2 id="exhausted-modal-title" className="text-xl font-extrabold text-white mb-2">
            Semua ide telah dieksplorasi
          </h2>

          <p className="text-xs text-slate-300 leading-relaxed mb-6">
            Sistem anti-repeat mencatat kamu telah memutar seluruh ide project pada kriteria{' '}
            {categoryFilter ? (
              <span className="font-mono text-devCyan font-bold uppercase">
                [{categoryFilter}]
              </span>
            ) : (
              'filter aktif'
            )}
            . Silakan pilih langkah selanjutnya:
          </p>

          {/* Action options */}
          <div className="space-y-3">
            <button
              onClick={() => {
                sound.playClick();
                onResetCategory();
              }}
              className="w-full min-h-[48px] p-3 rounded-xl bg-devAmber hover:bg-devAmber-hover text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-colors active:scale-95"
            >
              <RotateReelIcon size={16} />
              Reset riwayat filter ini (mulai ulang)
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenQuiz();
              }}
              className="w-full min-h-[48px] p-3 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-devCyan border border-devDark-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <GuidedTunerIcon size={16} />
              Ganti filter kuis (pilih kategori lain)
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onSwitchToRandom();
              }}
              className="w-full min-h-[48px] p-3 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-300 border border-devDark-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <RandomDiceIcon size={16} />
              Beralih ke random spin (seluruh pool)
            </button>
          </div>
        </div>

        {/* Close footer */}
        <div className="px-6 py-3 border-t border-devDark-800 bg-devDark-950/80 flex justify-end">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="min-h-[44px] px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
