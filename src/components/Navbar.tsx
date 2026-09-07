import React, { useState, useEffect } from 'react';
import {
  LogoWheelIcon,
  AudioWaveIcon,
  AudioMuteIcon,
  BookmarkFlagIcon,
  HistoryClockIcon,
} from './Icons';
import { sound } from '../utils/audio';
import { getBookmarks, getSpinHistory, getSeenIds } from '../utils/storage';

interface NavbarProps {
  onOpenHistory: (tab?: 'bookmarks' | 'history') => void;
  onGoHome: () => void;
  poolCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenHistory,
  onGoHome,
  poolCount,
  totalCount,
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [historyCount, setHistoryCount] = useState(0);
  const [seenCount, setSeenCount] = useState(0);

  const updateCounts = () => {
    setBookmarkCount(getBookmarks().length);
    setHistoryCount(getSpinHistory().length);
    setSeenCount(getSeenIds().length);
  };

  useEffect(() => {
    updateCounts();
    const interval = setInterval(updateCounts, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playClick();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full max-w-full min-w-0 border-b border-devDark-700/80 bg-devDark-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            sound.playClick();
            onGoHome();
          }}
          className="flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-devCyan rounded-lg p-1"
          aria-label="Kembali ke beranda DevSpin"
        >
          <div className="w-9 h-9 rounded-xl bg-devDark-900 border border-devDark-700 flex items-center justify-center text-devCyan group-hover:border-devCyan transition-colors">
            <LogoWheelIcon size={18} />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white">
              DEV<span className="text-devCyan">SPIN</span>
            </span>
            <span className="hidden sm:block text-[11px] font-mono text-slate-400">
              Project Matcher
            </span>
          </div>
        </button>

        {/* Status Tracker */}
        <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-devDark-900 border border-devDark-750 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-devCyan">
            <span className="w-1.5 h-1.5 rounded-full bg-devCyan" />
            Pool aktif: {poolCount}/{totalCount}
          </span>
          <span className="text-devDark-700">|</span>
          <span className="text-slate-400">
            Dilihat: {seenCount}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Mute Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? 'Nyalakan efek suara' : 'Matikan efek suara'}
            className={`min-h-[44px] min-w-[44px] p-2 rounded-xl border transition-colors flex items-center justify-center ${
              isMuted
                ? 'bg-devDark-900 border-devDark-750 text-slate-400 hover:text-white'
                : 'bg-devDark-900 border-devCyan/50 text-devCyan'
            }`}
          >
            {isMuted ? <AudioMuteIcon size={18} /> : <AudioWaveIcon size={18} />}
          </button>

          {/* Bookmarks Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenHistory('bookmarks');
            }}
            aria-label="Buka ide tersimpan"
            className="min-h-[44px] px-3 py-2 rounded-xl bg-devDark-900 hover:bg-devDark-850 border border-devDark-750 hover:border-devDark-700 text-slate-200 transition-colors flex items-center gap-2 text-xs font-semibold"
          >
            <BookmarkFlagIcon size={16} className="text-devAmber" />
            <span className="hidden sm:inline">Tersimpan</span>
            {bookmarkCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-devDark-800 text-devAmber font-mono font-bold border border-devDark-700">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* History Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenHistory('history');
            }}
            aria-label="Buka riwayat spin"
            className="min-h-[44px] px-3 py-2 rounded-xl bg-devDark-900 hover:bg-devDark-850 border border-devDark-750 hover:border-devDark-700 text-slate-200 transition-colors flex items-center gap-2 text-xs font-semibold"
          >
            <HistoryClockIcon size={16} className="text-devCyan" />
            <span className="hidden sm:inline">Riwayat</span>
            {historyCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-devDark-800 text-devCyan font-mono font-bold border border-devDark-700">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
