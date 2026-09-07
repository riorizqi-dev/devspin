import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingHero } from './components/LandingHero';
import { QuizModal } from './components/QuizModal';
import { ResultModal } from './components/ResultModal';
import { HistoryModal } from './components/HistoryModal';
import { ExhaustedPoolModal } from './components/ExhaustedPoolModal';
import { PROJECT_IDEAS, type ProjectIdea } from './data/projectsData';
import { type QuizFilter, filterProjects, resetSeenIds, markIdAsSeen, addSpinHistory } from './utils/storage';
import { SpecCodeIcon } from './components/Icons';
import { sound } from './utils/audio';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  const [spinMode, setSpinMode] = useState<'guided' | 'random'>('random');
  const [activeFilter, setActiveFilter] = useState<QuizFilter | null>(null);

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [historyTab, setHistoryTab] = useState<'bookmarks' | 'history'>('bookmarks');
  const [resultProject, setResultProject] = useState<ProjectIdea | null>(null);
  const [isExhaustedModalOpen, setIsExhaustedModalOpen] = useState(false);
  const [, setRefreshKey] = useState(0);

  // Compute live pool stats
  const { available } = filterProjects(activeFilter, true);

  const handleStartGuided = () => {
    setIsQuizOpen(true);
  };

  const handleStartRandom = () => {
    setSpinMode('random');
    setActiveFilter(null);
    setRefreshKey((k) => k + 1);
  };

  const handleQuizComplete = (filter: QuizFilter, matchedProject?: ProjectIdea) => {
    setActiveFilter(filter);
    setSpinMode('guided');
    setIsQuizOpen(false);

    if (matchedProject) {
      // Directly reveal the matched project from Guided Match!
      markIdAsSeen(matchedProject.id);
      addSpinHistory(matchedProject, 'guided');
      setResultProject(matchedProject);
      sound.playWin();
      confetti({
        particleCount: 80,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#00e5ff', '#38bdf8', '#f59e0b', '#ffffff']
      });
    }

    setRefreshKey((k) => k + 1);
  };

  const handleOpenHistory = (tab: 'bookmarks' | 'history' = 'bookmarks') => {
    setHistoryTab(tab);
    setIsHistoryOpen(true);
  };

  const handleWinnerSelected = (project: ProjectIdea) => {
    setResultProject(project);
  };

  const handleSpinAgain = () => {
    setResultProject(null);
    setRefreshKey((k) => k + 1);
  };

  const handlePoolReset = () => {
    setRefreshKey((k) => k + 1);
  };

  const handleResetCurrentCategory = () => {
    resetSeenIds(activeFilter?.category);
    setIsExhaustedModalOpen(false);
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-devDark-950 text-slate-100 flex flex-col justify-between selection:bg-termGreen selection:text-black">
      {/* Top Terminal Navigation */}
      <Navbar
        onOpenHistory={handleOpenHistory}
        onGoHome={() => {
          setSpinMode('random');
          setActiveFilter(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        poolCount={available.length}
        totalCount={PROJECT_IDEAS.length}
      />

      {/* Main Single-Page Terminal Experience */}
      <main className="flex-1 flex flex-col justify-center">
        <LandingHero
          mode={spinMode}
          filter={activeFilter}
          onStartGuided={handleStartGuided}
          onStartRandom={handleStartRandom}
          onWinnerSelected={handleWinnerSelected}
          onPoolExhausted={() => setIsExhaustedModalOpen(true)}
        />
      </main>

      {/* Global Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onComplete={handleQuizComplete}
      />

      <ResultModal
        project={resultProject}
        onClose={() => setResultProject(null)}
        onSpinAgain={handleSpinAgain}
      />

      <HistoryModal
        isOpen={isHistoryOpen}
        initialTab={historyTab}
        onClose={() => setIsHistoryOpen(false)}
        onSelectProject={(p) => {
          setIsHistoryOpen(false);
          setResultProject(p);
        }}
        onPoolReset={handlePoolReset}
      />

      <ExhaustedPoolModal
        isOpen={isExhaustedModalOpen}
        categoryFilter={activeFilter?.category}
        onClose={() => setIsExhaustedModalOpen(false)}
        onResetCategory={handleResetCurrentCategory}
        onOpenQuiz={() => {
          setIsExhaustedModalOpen(false);
          setIsQuizOpen(true);
        }}
        onSwitchToRandom={() => {
          setIsExhaustedModalOpen(false);
          setSpinMode('random');
          setActiveFilter(null);
        }}
      />

      {/* Hacker Terminal Footer */}
      <footer className="border-t border-devDark-800 bg-devDark-950 py-7 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold text-termGreen">&gt; devspin</span>
            <span className="text-slate-600">/</span>
            <span>generator ide project programmer</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5 text-termGreen">
              <SpecCodeIcon size={13} className="text-termGreen" />
              155 ide terkurasi
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-300">anti-repeat local storage</span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-300">web audio synthesizer</span>
          </div>

          <div className="text-slate-500 text-[11px]">
            [system: ready] session: persistent
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
