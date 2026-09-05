import React, { useState, useEffect } from 'react';
import {
  CloseMarkIcon,
  BookmarkFlagIcon,
  ExportCardIcon,
  CopySheetIcon,
  RotateReelIcon,
  SpecCodeIcon,
  CheckmarkIcon,
  ClockMeterIcon,
} from './Icons';
import { type ProjectIdea, CATEGORY_LABELS, DIFFICULTY_CONFIG } from '../data/projectsData';
import { isProjectBookmarked, toggleBookmark } from '../utils/storage';
import { downloadCardImage } from '../utils/canvasShare';
import { sound } from '../utils/audio';

interface ResultModalProps {
  project: ProjectIdea | null;
  onClose: () => void;
  onSpinAgain: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  project,
  onClose,
  onSpinAgain,
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (project) {
      setBookmarked(isProjectBookmarked(project.id));
      setCopySuccess(false);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const cat = CATEGORY_LABELS[project.category] || { label: project.category, color: '#00e5ff' };
  const diff = DIFFICULTY_CONFIG[project.difficulty] || { label: project.difficulty, badgeClass: '' };

  const handleToggleSave = () => {
    sound.playClick();
    const isSaved = toggleBookmark(project);
    setBookmarked(isSaved);
  };

  const handleDownloadImage = async () => {
    sound.playClick();
    try {
      setIsDownloading(true);
      await downloadCardImage(project);
    } catch {
      // Fallback
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopySummary = async () => {
    sound.playClick();
    const text = `Ide Project DevSpin: ${project.title}\n\nKategori: ${cat.label} (${project.difficulty})\nEstimasi: ${project.duration}\nStack: ${project.stack.join(', ')}\n\nDeskripsi:\n${project.description}\n\nFitur Unggulan:\n${project.highlights}\n\nTemukan ide lainnya di devspin.app`;
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="result-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-2xl bg-devDark-900 border border-devDark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Solid Border Line */}
        <div className="h-1 w-full bg-devCyan" />

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-devDark-750 flex items-center justify-between bg-devDark-950/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-devCyan" />
            <span className="text-xs font-mono text-devCyan font-semibold">
              Hasil spin terkunci
            </span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Tutup jendela hasil"
            className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-slate-400 hover:text-white hover:bg-devDark-800 transition-colors flex items-center justify-center"
          >
            <CloseMarkIcon size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Category, Difficulty, and Duration Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-devCyan px-2.5 py-1 rounded-lg bg-devDark-800 border border-devDark-700 font-medium">
              {cat.label}
            </span>

            <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${diff.badgeClass}`}>
              Tingkat: {diff.label}
            </span>

            <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-devDark-800 text-slate-300 border border-devDark-700 flex items-center gap-1.5">
              <ClockMeterIcon size={13} className="text-slate-400" />
              {project.duration}
            </span>

            <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-devDark-800 text-slate-400 border border-devDark-700 capitalize">
              Domain: {project.domain}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 id="result-title" className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <div className="p-4 rounded-2xl bg-devDark-850 border border-devDark-750 text-sm text-slate-200 leading-relaxed">
            {project.description}
          </div>

          {/* Key Differentiator Highlight */}
          <div className="p-4 rounded-2xl bg-devDark-850 border border-devDark-700 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-devDark-800 text-devAmber border border-devDark-700 flex-shrink-0">
              <SpecCodeIcon size={18} />
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold text-devAmber uppercase tracking-wider mb-0.5">
                Fitur unggulan kunci
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                {project.highlights}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Rekomendasi tech stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-devDark-800 text-devCyan border border-devDark-700 text-xs font-mono font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="px-6 py-4 border-t border-devDark-750 bg-devDark-950/90 flex flex-wrap items-center justify-between gap-3">
          {/* Spin Lagi */}
          <button
            onClick={() => {
              sound.playClick();
              onSpinAgain();
            }}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-devCyan hover:bg-devCyan-hover text-black font-extrabold text-xs flex items-center gap-2 transition-colors active:scale-95"
          >
            <RotateReelIcon size={16} />
            Spin lagi
          </button>

          {/* Secondary Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Bookmark */}
            <button
              onClick={handleToggleSave}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-colors ${
                bookmarked
                  ? 'bg-devDark-800 text-devAmber border-devAmber/60'
                  : 'bg-devDark-850 hover:bg-devDark-800 text-slate-300 border-devDark-700'
              }`}
            >
              <BookmarkFlagIcon size={16} className={bookmarked ? 'text-devAmber' : ''} />
              {bookmarked ? 'Tersimpan' : 'Simpan ide'}
            </button>

            {/* Download Image Card */}
            <button
              onClick={handleDownloadImage}
              disabled={isDownloading}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-300 border border-devDark-700 text-xs font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              <ExportCardIcon size={16} className="text-devCyan" />
              {isDownloading ? 'Membuat...' : 'Download kartu'}
            </button>

            {/* Copy Summary */}
            <button
              onClick={handleCopySummary}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-300 border border-devDark-700 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              {copySuccess ? (
                <>
                  <CheckmarkIcon size={14} className="text-devEmerald" />
                  Tersalin
                </>
              ) : (
                <>
                  <CopySheetIcon size={16} />
                  Salin teks
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
