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
const WINNER_INDEX = 50; // Center target card index

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
  const idleFrameRef = useRef<number | null>(null);
  const currentXRef = useRef<number>(0);

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
    currentXRef.current = 0;
    if (trackRef.current) {
      trackRef.current.style.transform = 'translate3d(0px, 0, 0)';
    }
  }, [available.length, mode, filter, buildReelSequence]);

  // Ambient idle drift loop using RAF
  useEffect(() => {
    if (reelState !== 'idle') return;

    let lastTime = performance.now();
    const idleDrift = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      currentXRef.current -= 45 * dt;

      // Wrap if drifted past 12 cards
      const wrapLimit = -(12 * CARD_STEP);
      if (currentXRef.current <= wrapLimit) {
        currentXRef.current = 0;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      }

      idleFrameRef.current = requestAnimationFrame(idleDrift);
    };

    idleFrameRef.current = requestAnimationFrame(idleDrift);
    return () => {
      if (idleFrameRef.current) {
        cancelAnimationFrame(idleFrameRef.current);
      }
    };
  }, [reelState]);

  // Clean up RAF on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      if (idleFrameRef.current) {
        cancelAnimationFrame(idleFrameRef.current);
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

    // 1. Cancel any active animation loops
    if (idleFrameRef.current) {
      cancelAnimationFrame(idleFrameRef.current);
      idleFrameRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    // 2. Pick winner from available pool
    const selectedWinner = available[Math.floor(Math.random() * available.length)];

    // 3. Populate reel sequence with selectedWinner placed at WINNER_INDEX
    const newCards = buildReelSequence(available, selectedWinner);
    setReelCards(newCards);
    setWinnerCard(selectedWinner);
    setReelState('spinning');

    sound.playWhoosh();

    const startX = currentXRef.current;
    const containerWidth = container.clientWidth;
    const centerPoint = containerWidth / 2;
    const winnerCenter = WINNER_INDEX * CARD_STEP + CARD_WIDTH / 2;
    const targetOffset = centerPoint - winnerCenter;
    const totalDistance = targetOffset - startX;

    // 4. Launch immediate RAF physics deceleration
    const startTime = performance.now();
    const durationMs = 4200;
    const tickSet = new Set<number>();

    const spinStep = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Smooth CS:GO roulette ease-out: 1 - (1 - progress)^3
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentPos = startX + totalDistance * eased;
      currentXRef.current = currentPos;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${currentPos}px, 0, 0)`;
      }

      // Audio tick on each card passing center needle
      const centerCard = Math.floor(Math.abs(currentPos - centerPoint) / CARD_STEP);
      if (!tickSet.has(centerCard) && centerCard >= 0) {
        tickSet.add(centerCard);
        const pitch = 1.35 - progress * 0.65;
        sound.playTick(pitch);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(spinStep);
      } else {
        // Perfect stop on winner card
        currentXRef.current = targetOffset;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${targetOffset}px, 0, 0)`;
        }
        setReelState('revealed');

        markIdAsSeen(selectedWinner.id);
        addSpinHistory(selectedWinner, mode);

        sound.playWin();
        confetti({
          particleCount: 80,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#00e5ff', '#38bdf8', '#f59e0b', '#ffffff']
        });

        // Show result modal after highlight anticipation
        setTimeout(() => {
          onWinnerSelected(selectedWinner);
        }, 1000);
      }
    };

    animFrameRef.current = requestAnimationFrame(spinStep);
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
    <div className="w-full max-w-6xl mx-auto min-w-0">
      {/* Top Controller Bar */}
      <div className="w-full min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-devDark-900 border border-devDark-750 mb-4 font-mono">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0 ${
              mode === 'guided'
                ? 'bg-devDark-800 text-devCyan border-devDark-700'
                : 'bg-devDark-800 text-slate-300 border-devDark-700'
            }`}
          >
            {mode === 'guided' ? <GuidedTunerIcon size={18} /> : <RandomDiceIcon size={18} />}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {mode === 'guided' ? 'MODE_GUIDED' : 'MODE_RANDOM'}
              </span>
              <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-devDark-800 text-devCyan border border-devDark-700">
                {available.length} ide aktif
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400">
              {mode === 'guided'
                ? '> filter kuis diterapkan ke pool'
                : '> seluruh 155 database ide dimuat'}
            </p>
          </div>
        </div>

        {/* Filter Badges or Switcher */}
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-devDark-800">
          {mode === 'guided' ? (
            <>
              {filter?.category && (
                <span className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded bg-devDark-800 text-devCyan border border-devDark-700">
                  cat:{filter.category}
                </span>
              )}
              {filter?.difficulty && (
                <span className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded bg-devDark-800 text-slate-300 border border-devDark-700">
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
                <span>[kuis ulang]</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onSwitchToRandom();
                }}
                disabled={reelState === 'spinning'}
                className="min-h-[44px] px-3 py-1.5 rounded-lg bg-devDark-850 hover:bg-devDark-800 text-devCyan border border-devDark-750 text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <RandomDiceIcon size={14} />
                <span>[mode acak]</span>
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
              className="w-full sm:w-auto min-h-[44px] px-4 py-2 rounded-lg bg-devDark-800 hover:bg-devDark-750 text-devCyan border border-devDark-700 hover:border-devCyan/50 text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50 font-mono font-semibold"
            >
              <GuidedTunerIcon size={14} />
              <span>[buka kuis guided match]</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Strip Ticker Display (Case Opening Roulette) */}
      <div className="relative w-full max-w-full min-w-0 rounded-2xl sm:rounded-3xl bg-devDark-900 border border-devDark-750 p-3 sm:p-6 overflow-hidden">
        {/* Terminal Strip Header */}
        <div className="flex items-center justify-between pb-3 border-b border-devDark-800 text-[10px] sm:text-[11px] font-mono text-slate-400 mb-1">
          <span className="flex items-center gap-2 text-devCyan truncate">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${reelState === 'spinning' ? 'bg-devRose animate-ping' : 'bg-devCyan animate-pulse'}`} />
            <span className="truncate">
              {reelState === 'idle' && 'GACHA_REEL_ACTIVE (CONVEYOR_DRIFT)'}
              {reelState === 'spinning' && 'DECELERATING_SPIN_ROULETTE...'}
              {reelState === 'revealed' && 'TARGET_LOCKED_ON_NEEDLE'}
            </span>
          </span>
          <span className="text-slate-500 hidden sm:inline flex-shrink-0">
            [Spacebar atau klik untuk putar]
          </span>
        </div>

        {/* Ticker Viewport Container with localized Needle Marker */}
        <div className="relative w-full max-w-full min-w-0 overflow-hidden py-3 select-none">
          {/* Center Needle Marker (Scoped precisely to card height, never protruding) */}
          <div className="absolute top-1 bottom-1 left-1/2 -translate-x-1/2 w-0.5 bg-devRose z-30 pointer-events-none">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-devRose" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-devRose" />
          </div>

          <div
            ref={containerRef}
            onClick={() => {
              if (reelState === 'idle') handleStartSpin();
            }}
            className={`w-full max-w-full min-w-0 overflow-hidden ticker-mask flex items-center min-h-[215px] ${
              reelState === 'idle' ? 'cursor-pointer' : ''
            }`}
            title={reelState === 'idle' ? 'Klik untuk putar gacha reel' : ''}
          >
            {/* Reel Track: Position controlled by smooth RAF physics engine */}
            <div
              ref={trackRef}
              className="flex items-center"
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
                    className={`flex-shrink-0 h-[200px] p-3.5 sm:p-4 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                      isWinningCard
                        ? 'bg-devDark-800 border-devCyan ring-2 ring-devCyan/50 scale-[1.02] z-20 shadow-[0_0_25px_rgba(0,229,255,0.35)]'
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
        </div>

        {/* Spin Trigger Section: BRIGHT ELECTRIC CYAN BLUE BUTTON */}
        <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-devDark-800 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleStartSpin}
            disabled={reelState === 'spinning' || available.length === 0}
            aria-label="Putar spin wheel gacha reel"
            style={{
              backgroundColor: reelState === 'spinning' ? '#101c2c' : '#00e5ff',
              color: reelState === 'spinning' ? '#00e5ff' : '#06090e',
            }}
            className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl font-mono font-extrabold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all cursor-pointer border border-[#00e5ff]/40 shadow-lg hover:brightness-110 active:scale-95 disabled:cursor-not-allowed min-h-[48px]"
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
              Pool ide di kategori ini sudah habis. Klik "Kuis ulang" atau reset riwayat.
            </div>
          )}
        </div>
      </div>

      {/* Pool Stats Indicator */}
      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4 text-[11px] sm:text-xs text-slate-400 font-mono px-2">
        <div className="flex items-center gap-2">
          <CheckmarkIcon size={14} className="text-termGreen flex-shrink-0" />
          <span>Anti-repeat: {seenCount} ide telah tercatat di histori lokal.</span>
        </div>
        <div>
          <span>Total database: {totalMatching} ide</span>
        </div>
      </div>
    </div>
  );
};
