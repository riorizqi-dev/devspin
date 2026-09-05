import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  PlaySolidIcon,
  RotateReelIcon,
  GuidedTunerIcon,
  RandomDiceIcon,
  CheckmarkIcon,
  ClockMeterIcon,
} from './Icons';
import { type ProjectIdea, CATEGORY_LABELS, DIFFICULTY_CONFIG } from '../data/projectsData';
import { type QuizFilter, filterProjects, markIdAsSeen, addSpinHistory } from '../utils/storage';
import { sound } from '../utils/audio';

interface SpinWheelTickerProps {
  mode: 'guided' | 'random';
  filter: QuizFilter | null;
  onWinnerSelected: (project: ProjectIdea) => void;
  onOpenQuiz: () => void;
  onSwitchToRandom: () => void;
  onPoolExhausted: () => void;
}

const CARD_WIDTH = 260;
const CARD_GAP = 14;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const TOTAL_CARDS_IN_STRIP = 80;
const WINNER_INDEX = 58; // Center target card index
const SPIN_DURATION_SEC = 4.4; // 4.4s for thrilling roulette suspense

export const SpinWheelTicker: React.FC<SpinWheelTickerProps> = ({
  mode,
  filter,
  onWinnerSelected,
  onOpenQuiz,
  onSwitchToRandom,
  onPoolExhausted,
}) => {
  const [reelState, setReelState] = useState<'idle' | 'spinning' | 'revealed'>('idle');
  const [reelCards, setReelCards] = useState<ProjectIdea[]>([]);
  const [winnerCard, setWinnerCard] = useState<ProjectIdea | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTickCardRef = useRef<number>(-1);

  // Compute current pool
  const { available, totalMatching, seenCount } = filterProjects(filter, true);

  // Helper to build a randomized 80-card sequence
  const buildReelSequence = useCallback((pool: ProjectIdea[], targetWinner?: ProjectIdea): ProjectIdea[] => {
    if (pool.length === 0) return [];
    const cards: ProjectIdea[] = [];
    for (let i = 0; i < TOTAL_CARDS_IN_STRIP; i++) {
      if (i === WINNER_INDEX && targetWinner) {
        cards.push(targetWinner);
      } else {
        const item = pool[Math.floor(Math.random() * pool.length)];
        cards.push(item);
      }
    }
    return cards;
  }, []);

  // Initialize or reset reel on pool change
  useEffect(() => {
    if (available.length === 0) return;
    const cards = buildReelSequence(available);
    setReelCards(cards);
    setReelState('idle');
    setWinnerCard(null);

    // Reset track position
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = 'translateX(0px)';
    }
  }, [available.length, mode, filter, buildReelSequence]);

  // Clean up RAF on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const handleStartSpin = useCallback(() => {
    if (reelState === 'spinning') return;

    if (available.length === 0) {
      onPoolExhausted();
      return;
    }

    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // Pick winner from available pool
    const selectedWinner = available[Math.floor(Math.random() * available.length)];

    // Populate reel with sequence having selectedWinner at WINNER_INDEX
    const newCards = buildReelSequence(available, selectedWinner);
    setReelCards(newCards);
    setWinnerCard(selectedWinner);
    setReelState('spinning');

    sound.playWhoosh();

    const containerWidth = container.clientWidth;
    const centerPoint = containerWidth / 2;
    // Calculate exact pixel target so WINNER_INDEX center aligns with centerPoint needle
    const winnerCenter = WINNER_INDEX * CARD_STEP + CARD_WIDTH / 2;
    const targetOffset = centerPoint - winnerCenter;

    // 1. Instantly reset track to 0 without transition
    track.style.transition = 'none';
    track.style.transform = 'translateX(0px)';

    // 2. Force browser DOM reflow so transform(0) is applied before animating
    void track.offsetWidth;

    // 3. Launch high-speed CSS deceleration transition
    track.style.transition = `transform ${SPIN_DURATION_SEC}s cubic-bezier(0.06, 0.85, 0.18, 1)`;
    track.style.transform = `translateX(${targetOffset}px)`;

    // 4. Track card crossings to trigger realistic mechanical clicks
    const startTime = performance.now();
    const durationMs = SPIN_DURATION_SEC * 1000;
    lastTickCardRef.current = -1;

    const trackAudioTicks = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Approximation of easeOutQuart curve to match cubic-bezier
      const easedProgress = 1 - Math.pow(1 - progress, 3.8);
      const currentTranslate = targetOffset * easedProgress;

      // Card currently crossing center
      const currentCard = Math.floor(
        Math.abs(currentTranslate - centerPoint) / CARD_STEP
      );

      if (currentCard !== lastTickCardRef.current && currentCard >= 0) {
        lastTickCardRef.current = currentCard;
        // Pitch factor drops from high to low as reel slows down
        const pitchFactor = 1.35 - progress * 0.7;
        sound.playTick(pitchFactor);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(trackAudioTicks);
      }
    };

    animFrameRef.current = requestAnimationFrame(trackAudioTicks);

    // 5. Completion handler
    setTimeout(() => {
      setReelState('revealed');

      // Record in anti-repeat storage
      markIdAsSeen(selectedWinner.id);
      addSpinHistory(selectedWinner, mode);

      // Win celebration
      sound.playWin();
      confetti({
        particleCount: 80,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00e5ff', '#38bdf8', '#f59e0b', '#ffffff']
      });

      // Show modal after card flash anticipation
      setTimeout(() => {
        onWinnerSelected(selectedWinner);
      }, 1050);
    }, durationMs);
  }, [available, buildReelSequence, mode, onPoolExhausted, onWinnerSelected, reelState]);

  // Keyboard shortcut: Spacebar to trigger spin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && (e.target as HTMLElement).tagName !== 'INPUT') {
        e.preventDefault();
        handleStartSpin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleStartSpin]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Top Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-devDark-900 border border-devDark-750 mb-4 font-mono">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
              mode === 'guided'
                ? 'bg-devDark-800 text-termGreen border-devDark-700'
                : 'bg-devDark-800 text-slate-300 border-devDark-700'
            }`}
          >
            {mode === 'guided' ? <GuidedTunerIcon size={18} /> : <RandomDiceIcon size={18} />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {mode === 'guided' ? 'MODE_GUIDED' : 'MODE_RANDOM'}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-devDark-800 text-termGreen border border-devDark-700">
                {available.length} ide aktif
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {mode === 'guided'
                ? '> filter kuis diterapkan ke reel roulette'
                : '> seluruh 155 database ide dimuat ke reel'}
            </p>
          </div>
        </div>

        {/* Filter Badges or Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          {mode === 'guided' ? (
            <>
              {filter?.category && (
                <span className="text-xs px-2.5 py-1 rounded bg-devDark-800 text-termGreen border border-devDark-700">
                  cat:{filter.category}
                </span>
              )}
              {filter?.difficulty && (
                <span className="text-xs px-2.5 py-1 rounded bg-devDark-800 text-slate-300 border border-devDark-700">
                  diff:{filter.difficulty}
                </span>
              )}
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenQuiz();
                }}
                disabled={reelState === 'spinning'}
                className="min-h-[44px] px-3 py-1.5 rounded-lg bg-devDark-850 hover:bg-devDark-800 text-slate-300 hover:text-white border border-devDark-750 text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <GuidedTunerIcon size={14} />
                [ubah filter]
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onSwitchToRandom();
                }}
                disabled={reelState === 'spinning'}
                className="min-h-[44px] px-3 py-1.5 rounded-lg bg-devDark-850 hover:bg-devDark-800 text-termGreen border border-devDark-750 text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <RandomDiceIcon size={14} />
                [mode acak]
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenQuiz();
              }}
              disabled={reelState === 'spinning'}
              className="min-h-[44px] px-3.5 py-1.5 rounded-lg bg-devDark-850 hover:bg-devDark-800 text-termGreen border border-devDark-750 text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <GuidedTunerIcon size={14} />
              [filter kuis guided]
            </button>
          )}
        </div>
      </div>

      {/* Main Strip Ticker Display (Case Opening Roulette) */}
      <div className="relative rounded-3xl bg-devDark-900 border border-devDark-750 p-5 sm:p-7 overflow-hidden">
        {/* Terminal Strip Header */}
        <div className="flex items-center justify-between pb-3 border-b border-devDark-800 text-[11px] font-mono text-slate-400 mb-2">
          <span className="flex items-center gap-2 text-termGreen">
            <span className={`w-2 h-2 rounded-full ${reelState === 'spinning' ? 'bg-devRose animate-ping' : 'bg-termGreen animate-pulse'}`} />
            {reelState === 'idle' && 'GACHA_REEL_ACTIVE (CONVEYOR_DRIFT)'}
            {reelState === 'spinning' && 'DECELERATING_SPIN_ROULETTE...'}
            {reelState === 'revealed' && 'TARGET_LOCKED_ON_NEEDLE'}
          </span>
          <span className="text-slate-500 hidden sm:inline">
            [Spacebar atau klik untuk putar]
          </span>
        </div>

        {/* Center Needle Marker (Sharp red indicator, perfectly centered) */}
        <div className="absolute top-[52px] bottom-[90px] left-1/2 -translate-x-1/2 w-0.5 bg-devRose z-30 pointer-events-none">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[9px] border-t-devRose" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[9px] border-b-devRose" />
        </div>

        {/* Ticker Viewport with horizontal edge fades */}
        <div
          ref={containerRef}
          onClick={() => {
            if (reelState === 'idle') handleStartSpin();
          }}
          className={`relative w-full overflow-hidden ticker-mask py-4 select-none min-h-[235px] flex items-center ${
            reelState === 'idle' ? 'cursor-pointer' : ''
          }`}
          title={reelState === 'idle' ? 'Klik untuk putar gacha reel' : ''}
        >
          {/* Reel Track: Has .animate-reel-drift when idle, CSS transform when spinning */}
          <div
            ref={trackRef}
            className={`flex items-center ${reelState === 'idle' ? 'animate-reel-drift' : ''}`}
            style={{
              gap: `${CARD_GAP}px`,
              willChange: 'transform',
            }}
          >
            {reelCards.map((card, idx) => {
              const cat = CATEGORY_LABELS[card.category] || { label: card.category, color: '#00e5ff' };
              const diff = DIFFICULTY_CONFIG[card.difficulty] || { label: card.difficulty, badgeClass: '' };
              const isWinningCard = reelState === 'revealed' && idx === WINNER_INDEX && winnerCard?.id === card.id;

              return (
                <div
                  key={`${card.id}-${idx}`}
                  style={{ width: `${CARD_WIDTH}px` }}
                  className={`flex-shrink-0 h-[205px] p-4 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                    isWinningCard
                      ? 'bg-devDark-800 border-devCyan ring-2 ring-devCyan/50 scale-[1.03] z-20 shadow-[0_0_25px_rgba(0,229,255,0.35)]'
                      : 'bg-devDark-850 border-devDark-750 hover:border-devDark-700'
                  }`}
                >
                  {/* Top info */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-medium text-termGreen px-2 py-0.5 rounded bg-devDark-800 border border-devDark-700">
                        {cat.label}
                      </span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${diff.badgeClass}`}>
                        {diff.label}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-100 line-clamp-2 leading-snug mb-1 font-mono">
                      {card.title}
                    </h3>

                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom tech tags */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {card.stack.slice(0, 2).map((s, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-devDark-800 text-slate-300 border border-devDark-750"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between pt-1.5 border-t border-devDark-750">
                      <span className="flex items-center gap-1">
                        <ClockMeterIcon size={12} className="text-slate-400" />
                        {card.duration}
                      </span>
                      <span className="capitalize text-slate-400">{card.domain}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Spin Trigger Section: BRIGHT ELECTRIC CYAN BLUE BUTTON (MATCHING LOGO) */}
        <div className="mt-6 pt-4 border-t border-devDark-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleStartSpin}
            disabled={reelState === 'spinning' || available.length === 0}
            aria-label="Putar spin wheel gacha reel"
            style={{
              backgroundColor: reelState === 'spinning' ? '#101c2c' : '#00e5ff',
              color: reelState === 'spinning' ? '#00e5ff' : '#06090e',
            }}
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-mono font-extrabold text-sm tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer border border-[#00e5ff]/40 shadow-lg hover:brightness-110 active:scale-95 disabled:cursor-not-allowed min-h-[50px]"
          >
            {reelState === 'spinning' ? (
              <>
                <RotateReelIcon size={18} className="animate-spin" />
                <span>MEMUTAR GACHA REEL...</span>
              </>
            ) : (
              <>
                <PlaySolidIcon size={16} />
                <span>PUTAR SPIN REEL SEKARANG</span>
              </>
            )}
          </button>

          {available.length === 0 && (
            <div className="text-center sm:text-left text-xs text-devRose font-mono">
              Pool ide di kategori ini sudah habis. Klik "Ubah filter" atau reset riwayat.
            </div>
          )}
        </div>
      </div>

      {/* Pool Stats Indicator */}
      <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono px-2">
        <div className="flex items-center gap-2">
          <CheckmarkIcon size={14} className="text-termGreen" />
          <span>Anti-repeat: {seenCount} ide telah tercatat di histori lokal.</span>
        </div>
        <div>
          <span>Total database: {totalMatching} ide</span>
        </div>
      </div>
    </div>
  );
};
