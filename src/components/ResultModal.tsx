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
  BlueprintArchIcon,
  ListChecklistIcon,
  RoadmapMilestoneIcon,
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
    const featuresList = (project.features && project.features.length > 0)
      ? project.features.map(f => `- ${f}`).join('\n')
      : `- ${project.highlights}`;

    const stepsList = (project.steps && project.steps.length > 0)
      ? project.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')
      : '';

    const text = `Ide Project DevSpin: ${project.title}

Kategori: ${cat.label} (${diff.label})
Estimasi Pengerjaan: ${project.duration}
Domain: ${project.domain}
Tech Stack: ${project.stack.join(', ')}

Deskripsi & Latar Belakang:
${project.overview || project.description}

Arsitektur Sistem:
${project.architecture || project.description}

Fitur Utama yang Harus Dibangun:
${featuresList}
${stepsList ? `\nRoadmap Implementasi:\n${stepsList}\n` : ''}
Fitur Unggulan Kunci:
${project.highlights}

Temukan ratusan ide project lainnya di: https://devspin.app`;

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-2xl bg-devDark-900 border border-devDark-700 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92dvh]">
        {/* Top Solid Border Line */}
        <div className="h-1 w-full bg-devCyan" />

        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-devDark-750 flex items-center justify-between bg-devDark-950/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-devCyan flex-shrink-0" />
            <span className="text-xs font-mono text-devCyan font-semibold">
              Rekomendasi project terkunci
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
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          {/* Category, Difficulty, and Duration Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-xs font-mono text-devCyan px-2.5 py-1 rounded-lg bg-devDark-800 border border-devDark-700 font-medium">
              {cat.label}
            </span>

            <span className={`text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-lg border ${diff.badgeClass}`}>
              Tingkat: {diff.label}
            </span>

            <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-lg bg-devDark-800 text-slate-300 border border-devDark-700 flex items-center gap-1.5">
              <ClockMeterIcon size={13} className="text-slate-400" />
              {project.duration}
            </span>

            <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-lg bg-devDark-800 text-slate-400 border border-devDark-700 capitalize">
              Domain: {project.domain}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 id="result-title" className="text-xl sm:text-3xl font-extrabold text-white leading-tight font-mono break-words">
              {project.title}
            </h2>
          </div>

          {/* Detailed Overview & Background */}
          <div>
            <h3 className="text-xs font-mono font-bold text-devCyan uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>&gt;</span> Deskripsi & Latar Belakang Proyek
            </h3>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-devDark-850 border border-devDark-750 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              {project.overview || project.description}
            </div>
          </div>

          {/* Architecture & Data Flow */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono font-bold text-devAmber uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BlueprintArchIcon size={14} className="text-devAmber flex-shrink-0" />
                Arsitektur Sistem & Alur Kerja
              </h3>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-devDark-850 border border-devDark-700 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Key Deliverable Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-devCyan uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ListChecklistIcon size={14} className="text-devCyan flex-shrink-0" />
                Fitur Utama yang Harus Dibangun
              </h3>
              <div className="grid gap-2">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-devDark-850 border border-devDark-750 flex items-start gap-2.5 text-xs text-slate-200"
                  >
                    <div className="w-5 h-5 rounded bg-devDark-800 border border-devCyan/30 flex items-center justify-center text-devCyan flex-shrink-0 mt-0.5">
                      <CheckmarkIcon size={11} />
                    </div>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation Roadmap */}
          {project.steps && project.steps.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <RoadmapMilestoneIcon size={14} className="text-slate-400 flex-shrink-0" />
                Roadmap Implementasi Bertahap
              </h3>
              <div className="space-y-2">
                {project.steps.map((stepText, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 sm:p-3 rounded-xl bg-devDark-850 border border-devDark-750 flex items-start gap-2.5 sm:gap-3 text-xs text-slate-300"
                  >
                    <span className="px-2 py-0.5 rounded font-mono font-bold bg-devDark-800 text-devCyan border border-devDark-700 flex-shrink-0 text-[10px]">
                      0{sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{stepText}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Differentiator Highlight */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-devDark-850 border border-devDark-700 flex items-start gap-3">
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
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.stack.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-devDark-800 text-devCyan border border-devDark-700 text-[11px] sm:text-xs font-mono font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Buttons Footer (Mobile Responsive: Full-width primary + 3-col secondary) */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-devDark-750 bg-devDark-950/95 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
          {/* Spin Lagi */}
          <button
            onClick={() => {
              sound.playClick();
              onSpinAgain();
            }}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-devCyan hover:bg-devCyan-hover text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <RotateReelIcon size={16} />
            <span>Spin lagi ide lain</span>
          </button>

          {/* Secondary Actions: 3-column on mobile, flex on desktop */}
          <div className="grid grid-cols-3 sm:flex items-center gap-2 w-full sm:w-auto">
            {/* Bookmark */}
            <button
              onClick={handleToggleSave}
              className={`min-h-[44px] px-2 sm:px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-colors ${
                bookmarked
                  ? 'bg-devDark-800 text-devAmber border-devAmber/60'
                  : 'bg-devDark-850 hover:bg-devDark-800 text-slate-300 border-devDark-700'
              }`}
            >
              <BookmarkFlagIcon size={15} className={bookmarked ? 'text-devAmber' : ''} />
              <span>{bookmarked ? 'Disimpan' : 'Simpan'}</span>
            </button>

            {/* Download Image Card */}
            <button
              onClick={handleDownloadImage}
              disabled={isDownloading}
              className="min-h-[44px] px-2 sm:px-4 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-300 border border-devDark-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <ExportCardIcon size={15} className="text-devCyan" />
              <span>{isDownloading ? 'Proses...' : 'Kartu PNG'}</span>
            </button>

            {/* Copy Summary */}
            <button
              onClick={handleCopySummary}
              className="min-h-[44px] px-2 sm:px-4 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-300 border border-devDark-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              {copySuccess ? (
                <>
                  <CheckmarkIcon size={14} className="text-devEmerald" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <CopySheetIcon size={15} />
                  <span>Salin teks</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
