import React, { useState, useEffect } from 'react';
import {
  CloseMarkIcon,
  BookmarkFlagIcon,
  HistoryClockIcon,
  TrashBinIcon,
  ExportCardIcon,
  SearchLensIcon,
  OpenExternalIcon,
  RotateReelIcon,
  ClockMeterIcon,
} from './Icons';
import { type ProjectIdea, CATEGORY_LABELS, DIFFICULTY_CONFIG } from '../data/projectsData';
import {
  getBookmarks,
  getSpinHistory,
  toggleBookmark,
  clearSpinHistory,
  resetSeenIds,
  type SpinHistoryItem,
} from '../utils/storage';
import { downloadCardImage } from '../utils/canvasShare';
import { sound } from '../utils/audio';

interface HistoryModalProps {
  isOpen: boolean;
  initialTab?: 'bookmarks' | 'history';
  onClose: () => void;
  onSelectProject: (project: ProjectIdea) => void;
  onPoolReset: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  initialTab = 'bookmarks',
  onClose,
  onSelectProject,
  onPoolReset,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'history'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<ProjectIdea[]>([]);
  const [historyItems, setHistoryItems] = useState<SpinHistoryItem[]>([]);

  const loadData = () => {
    setBookmarks(getBookmarks());
    setHistoryItems(getSpinHistory());
  };

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setSearchQuery('');
      loadData();
    }
  }, [isOpen, initialTab]);

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

  const handleToggleBookmark = (project: ProjectIdea) => {
    sound.playClick();
    toggleBookmark(project);
    loadData();
  };

  const handleClearHistory = () => {
    if (window.confirm('Hapus seluruh riwayat perolehan spin?')) {
      sound.playClick();
      clearSpinHistory();
      loadData();
    }
  };

  const handleResetAntiRepeat = () => {
    if (window.confirm('Reset pool anti-repeat? Semua ide akan dapat muncul kembali di spin.')) {
      sound.playClick();
      resetSeenIds();
      onPoolReset();
      loadData();
      alert('Pool anti-repeat berhasil di-reset.');
    }
  };

  const q = searchQuery.toLowerCase().trim();
  const filteredBookmarks = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(q) ||
    b.description.toLowerCase().includes(q) ||
    b.stack.some((s) => s.toLowerCase().includes(q)) ||
    b.category.toLowerCase().includes(q)
  );

  const filteredHistory = historyItems.filter((item) =>
    item.project.title.toLowerCase().includes(q) ||
    item.project.description.toLowerCase().includes(q) ||
    item.project.stack.some((s) => s.toLowerCase().includes(q)) ||
    item.project.category.toLowerCase().includes(q)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="history-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-3xl bg-devDark-900 border border-devDark-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-devDark-750 flex items-center justify-between bg-devDark-950/70">
          <div className="flex items-center gap-2">
            <h2 id="history-modal-title" className="text-base font-bold text-white">
              Koleksi dan riwayat idemu
            </h2>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Tutup riwayat"
            className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-slate-400 hover:text-white hover:bg-devDark-800 transition-colors flex items-center justify-center"
          >
            <CloseMarkIcon size={18} />
          </button>
        </div>

        {/* Tab Selector & Search */}
        <div className="p-4 sm:px-6 border-b border-devDark-750 bg-devDark-850/60 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="flex rounded-xl bg-devDark-900 p-1 border border-devDark-700">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('bookmarks');
              }}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'bookmarks'
                  ? 'bg-devDark-800 text-devAmber border border-devDark-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookmarkFlagIcon size={15} className="text-devAmber" />
              Tersimpan ({bookmarks.length})
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('history');
              }}
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-devDark-800 text-devCyan border border-devDark-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <HistoryClockIcon size={15} className="text-devCyan" />
              Riwayat spin ({historyItems.length})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 sm:max-w-xs">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchLensIcon size={15} />
            </div>
            <input
              type="text"
              placeholder="Cari judul, stack, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-devDark-900 border border-devDark-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-devCyan transition-colors min-h-[44px]"
            />
          </div>
        </div>

        {/* List Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {activeTab === 'bookmarks' && (
            <>
              {filteredBookmarks.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <BookmarkFlagIcon size={32} className="text-slate-600 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    {searchQuery ? 'Tidak ada ide tersimpan yang cocok' : 'Belum ada ide yang disimpan'}
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Klik tombol bookmark di kartu hasil spin untuk menyimpan ide favoritmu ke sini.
                  </p>
                </div>
              ) : (
                filteredBookmarks.map((project) => {
                  const cat = CATEGORY_LABELS[project.category] || { label: project.category, color: '#00e5ff' };
                  const diff = DIFFICULTY_CONFIG[project.difficulty] || { label: project.difficulty, badgeClass: '' };
                  return (
                    <div
                      key={project.id}
                      className="p-4 rounded-2xl bg-devDark-850 border border-devDark-750 hover:border-devDark-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-[10px] font-mono font-medium text-devCyan px-2 py-0.5 rounded bg-devDark-800 border border-devDark-700">
                            {cat.label}
                          </span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${diff.badgeClass}`}>
                            {diff.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <ClockMeterIcon size={12} className="text-slate-400" />
                            {project.duration}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                          {project.description}
                        </p>
                        <div className="flex gap-1.5 flex-wrap">
                          {project.stack.map((st, i) => (
                            <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-devDark-800 text-slate-300 border border-devDark-700">
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectProject(project);
                          }}
                          className="min-h-[44px] px-3 py-1.5 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-devCyan border border-devDark-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <OpenExternalIcon size={14} />
                          Buka
                        </button>
                        <button
                          onClick={() => downloadCardImage(project)}
                          aria-label="Download kartu gambar"
                          className="min-h-[44px] min-w-[44px] p-2 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-slate-300 hover:text-white border border-devDark-700 transition-colors flex items-center justify-center"
                        >
                          <ExportCardIcon size={15} />
                        </button>
                        <button
                          onClick={() => handleToggleBookmark(project)}
                          aria-label="Hapus dari tersimpan"
                          className="min-h-[44px] min-w-[44px] p-2 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-devAmber border border-devDark-700 transition-colors flex items-center justify-center"
                        >
                          <BookmarkFlagIcon size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </>
          )}

          {activeTab === 'history' && (
            <>
              {filteredHistory.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <HistoryClockIcon size={32} className="text-slate-600 mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-white mb-1">
                    {searchQuery ? 'Tidak ada riwayat yang cocok' : 'Belum ada riwayat spin'}
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Setiap kali kamu memutar wheel gacha, riwayatnya akan tercatat otomatis di sini.
                  </p>
                </div>
              ) : (
                filteredHistory.map((item) => {
                  const p = item.project;
                  const cat = CATEGORY_LABELS[p.category] || { label: p.category, color: '#00e5ff' };
                  const diff = DIFFICULTY_CONFIG[p.difficulty] || { label: p.difficulty, badgeClass: '' };
                  const dateStr = new Date(item.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  });

                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-devDark-850 border border-devDark-750 hover:border-devDark-700 transition-colors flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[10px] font-mono font-medium text-devCyan px-2 py-0.5 rounded bg-devDark-800 border border-devDark-700">
                            {cat.label}
                          </span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${diff.badgeClass}`}>
                            {diff.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {dateStr}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-white truncate">
                          {p.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectProject(p);
                          }}
                          className="min-h-[44px] px-3 py-1.5 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-devCyan border border-devDark-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <OpenExternalIcon size={14} />
                          Lihat
                        </button>
                        <button
                          onClick={() => handleToggleBookmark(p)}
                          aria-label="Simpan ide"
                          className="min-h-[44px] min-w-[44px] p-2 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-slate-300 border border-devDark-700 transition-colors flex items-center justify-center"
                        >
                          <BookmarkFlagIcon size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>

        {/* Footer with Reset Actions */}
        <div className="px-6 py-4 border-t border-devDark-750 bg-devDark-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleResetAntiRepeat}
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-300 hover:text-devCyan border border-devDark-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateReelIcon size={14} />
              Reset pool anti-repeat
            </button>

            {activeTab === 'history' && historyItems.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="min-h-[44px] px-3.5 py-2 rounded-xl bg-devDark-850 hover:bg-devDark-800 text-slate-400 hover:text-devRose border border-devDark-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <TrashBinIcon size={14} />
                Hapus riwayat
              </button>
            )}
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="min-h-[44px] px-5 py-2 rounded-xl bg-devDark-800 hover:bg-devDark-750 text-slate-200 text-xs font-semibold transition-colors border border-devDark-700"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
