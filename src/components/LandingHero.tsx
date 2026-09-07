import React from 'react';
import {
  GuidedTunerIcon,
  RandomDiceIcon,
  AntiRepeatIcon,
  SpecCodeIcon,
  ExportCardIcon,
  ArrowNavRightIcon,
} from './Icons';
import { sound } from '../utils/audio';
import { SpinWheelTicker } from './SpinWheelTicker';
import type { ProjectIdea } from '../data/projectsData';
import type { QuizFilter } from '../utils/storage';

interface LandingHeroProps {
  mode: 'guided' | 'random';
  filter: QuizFilter | null;
  refreshKey?: number;
  autoSpinNonce?: number;
  onStartGuided: () => void;
  onStartRandom: () => void;
  onWinnerSelected: (project: ProjectIdea) => void;
  onPoolExhausted: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  mode,
  filter,
  refreshKey = 0,
  autoSpinNonce = 0,
  onStartGuided,
  onStartRandom,
  onWinnerSelected,
  onPoolExhausted,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4 sm:pt-6 pb-12 sm:pb-16 px-3.5 sm:px-6 min-w-0">
      {/* Terminal Hero Section */}
      <section className="w-full max-w-3xl mx-auto text-center pt-1 sm:pt-2 mb-6 sm:mb-8 min-w-0">
        {/* Terminal Prompt Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-devDark-900 border border-devDark-750 text-[11px] sm:text-xs font-mono text-devCyan mb-4 sm:mb-5">
          <span className="text-slate-500">&gt;</span>
          <span>devspin --system=online --ideas=155</span>
          <span className="w-1.5 h-3 bg-devCyan inline-block animate-cursor-blink" />
        </div>

        {/* H1 Heading (Solid Cyan Blue matching Logo) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-4">
          Bingung mau ngoding apa?{' '}
          <span className="text-devCyan font-mono block sm:inline">Spin aja.</span>
        </h1>

        <p className="text-xs sm:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto font-sans px-2">
          Generator ide project programmer dengan roulette reel kurva fisika deselerasi nyata dan filter anti-repeat.
        </p>

        {/* Mode Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
          {/* Mode Guided */}
          <button
            onClick={() => {
              sound.playClick();
              onStartGuided();
            }}
            className={`p-3.5 sm:p-4 rounded-xl border transition-colors flex items-start justify-between min-h-[48px] ${
              mode === 'guided'
                ? 'bg-devDark-850 border-devCyan text-white'
                : 'bg-devDark-900 border-devDark-750 hover:border-devDark-650 text-slate-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-devDark-800 text-devCyan flex items-center justify-center border border-devDark-700 flex-shrink-0 mt-0.5">
                <GuidedTunerIcon size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-sm text-white font-mono">
                    Mode terpandu
                  </h3>
                  {mode === 'guided' && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-devCyan/15 text-devCyan border border-devCyan/30">
                      aktif
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  Filter kuis 5 langkah sesuai skill, stack, dan domain.
                </p>
              </div>
            </div>
            <ArrowNavRightIcon size={15} className="text-slate-500 mt-2 flex-shrink-0" />
          </button>

          {/* Mode Random */}
          <button
            onClick={() => {
              sound.playClick();
              onStartRandom();
            }}
            className={`p-3.5 sm:p-4 rounded-xl border transition-colors flex items-start justify-between min-h-[48px] ${
              mode === 'random'
                ? 'bg-devDark-850 border-devCyan text-white'
                : 'bg-devDark-900 border-devDark-750 hover:border-devDark-650 text-slate-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-devDark-800 text-slate-300 flex items-center justify-center border border-devDark-700 flex-shrink-0 mt-0.5">
                <RandomDiceIcon size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-sm text-white font-mono">
                    Mode acak
                  </h3>
                  {mode === 'random' && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-devCyan/15 text-devCyan border border-devCyan/30">
                      aktif
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">
                  Spin instan tanpa kuis dari seluruh 155 database ide.
                </p>
              </div>
            </div>
            <ArrowNavRightIcon size={15} className="text-slate-500 mt-2 flex-shrink-0" />
          </button>
        </div>
      </section>

      {/* REAL CS:GO / GACHA CASE OPENING STRIP REEL */}
      <section className="w-full max-w-6xl mx-auto my-8 min-w-0">
        <h2 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center sm:text-left flex items-center gap-2">
          <span className="text-devCyan">&gt;</span>
          <span>Roulette strip gacha reel</span>
        </h2>

        {/* Real Live Spin Wheel Ticker with 4.4s Physical Deceleration */}
        <SpinWheelTicker
          mode={mode}
          filter={filter}
          refreshKey={refreshKey}
          autoSpinNonce={autoSpinNonce}
          onWinnerSelected={onWinnerSelected}
          onOpenQuiz={onStartGuided}
          onSwitchToRandom={onStartRandom}
          onPoolExhausted={onPoolExhausted}
        />
      </section>

      {/* Terminal Feature Cards */}
      <section className="w-full max-w-6xl mx-auto mt-14 pt-8 border-t border-devDark-800 min-w-0">
        <h2 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-6 text-center sm:text-left flex items-center gap-2">
          <span className="text-devCyan">&gt;</span>
          <span>Spesifikasi sistem devspin</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Card 1 */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-devDark-900 border border-devDark-750 text-left">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-devDark-800 text-devCyan border border-devDark-700">
                <AntiRepeatIcon size={18} />
              </div>
              <span className="text-[10px] font-mono text-slate-500">01_STORAGE</span>
            </div>
            <h3 className="font-bold text-sm text-white mb-1 font-mono">
              Anti-repeat engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Setiap ide yang keluar dicatat di LocalStorage. Sistem menjamin tidak ada ide duplikat sampai seluruh pool pada filter telah kamu lihat.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-devDark-900 border border-devDark-750 text-left">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-devDark-800 text-devCyan border border-devDark-700">
                <SpecCodeIcon size={18} />
              </div>
              <span className="text-[10px] font-mono text-slate-500">02_SPECS</span>
            </div>
            <h3 className="font-bold text-sm text-white mb-1 font-mono">
              Kurasi arsitektur nyata
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              155 ide mencakup Web, Mobile, AI/ML, Game, Backend, dan DevTools lengkap dengan tech stack modern dan fitur pembeda utama.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-devDark-900 border border-devDark-750 text-left">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-devDark-800 text-devCyan border border-devDark-700">
                <ExportCardIcon size={18} />
              </div>
              <span className="text-[10px] font-mono text-slate-500">03_OUTPUT</span>
            </div>
            <h3 className="font-bold text-sm text-white mb-1 font-mono">
              Ekspor kartu resolusi tinggi
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Hasil spin dapat langsung diunduh dalam format gambar PNG berpiksel tajam atau disalin ke clipboard untuk bahan portofolio dan tim.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
