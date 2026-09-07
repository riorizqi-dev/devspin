import { PROJECT_IDEAS, type ProjectIdea } from '../data/projectsData';

export interface QuizFilter {
  difficulty?: 'pemula' | 'menengah' | 'mahir';
  category?: 'web' | 'mobile' | 'ai' | 'game' | 'backend' | 'tools';
  goal?: 'portofolio' | 'belajar' | 'lomba' | 'iseng';
  duration?: '< 1 hari' | '1 minggu' | '1 bulan+';
  domain?: 'edukasi' | 'finance' | 'kesehatan' | 'hiburan' | 'produktivitas' | 'sosial';
}

export interface SpinHistoryItem {
  id: string;
  project: ProjectIdea;
  timestamp: number;
  mode: 'guided' | 'random';
}

const STORAGE_KEYS = {
  SEEN: 'devspin_seen_ids',
  BOOKMARKS: 'devspin_bookmarks',
  HISTORY: 'devspin_history',
  AUDIO_MUTED: 'devspin_audio_muted',
};

// Safe LocalStorage helpers
export const getSeenIds = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SEEN);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const markIdAsSeen = (id: string): string[] => {
  const current = getSeenIds();
  if (!current.includes(id)) {
    const updated = [...current, id];
    try {
      localStorage.setItem(STORAGE_KEYS.SEEN, JSON.stringify(updated));
    } catch {
      // LocalStorage unavailable/quota
    }
    return updated;
  }
  return current;
};

export const resetSeenIds = (category?: string): string[] => {
  if (!category) {
    localStorage.removeItem(STORAGE_KEYS.SEEN);
    return [];
  }
  const current = getSeenIds();
  const categoryIds = new Set(
    PROJECT_IDEAS.filter(p => p.category === category).map(p => p.id)
  );
  const updated = current.filter(id => !categoryIds.has(id));
  try {
    localStorage.setItem(STORAGE_KEYS.SEEN, JSON.stringify(updated));
  } catch {
    // LocalStorage error
  }
  return updated;
};

// Bookmarks
export const getBookmarks = (): ProjectIdea[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleBookmark = (project: ProjectIdea): boolean => {
  const bookmarks = getBookmarks();
  const existsIndex = bookmarks.findIndex(b => b.id === project.id);
  let isBookmarked = false;
  let updated: ProjectIdea[];

  if (existsIndex >= 0) {
    updated = bookmarks.filter(b => b.id !== project.id);
    isBookmarked = false;
  } else {
    updated = [project, ...bookmarks];
    isBookmarked = true;
  }

  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  } catch {
    // LocalStorage error
  }
  return isBookmarked;
};

export const isProjectBookmarked = (id: string): boolean => {
  const bookmarks = getBookmarks();
  return bookmarks.some(b => b.id === id);
};

// History
export const getSpinHistory = (): SpinHistoryItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const addSpinHistory = (project: ProjectIdea, mode: 'guided' | 'random'): void => {
  const current = getSpinHistory();
  const newItem: SpinHistoryItem = {
    id: `${project.id}-${Date.now()}`,
    project,
    timestamp: Date.now(),
    mode
  };
  const updated = [newItem, ...current].slice(0, 100); // keep up to 100 recent spins
  try {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch {
    // LocalStorage error
  }
};

export const clearSpinHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch {
    // LocalStorage error
  }
};

// Audio Preferences
export const getAudioMutedPref = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUDIO_MUTED) === 'true';
  } catch {
    return false;
  }
};

export const setAudioMutedPref = (muted: boolean): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.AUDIO_MUTED, String(muted));
  } catch {
    // LocalStorage error
  }
};

// Calculate match score for a project against a QuizFilter
export const calculateMatchScore = (project: ProjectIdea, filter: QuizFilter): number => {
  let score = 0;

  // Primary: Category match (+10)
  if (filter.category) {
    if (project.category === filter.category) {
      score += 10;
    } else {
      return 0; // If user chose a specific category, only include that category
    }
  }

  // Difficulty match (+5 for exact, +2 for adjacent)
  if (filter.difficulty) {
    if (project.difficulty === filter.difficulty) {
      score += 5;
    } else if (
      (filter.difficulty === 'pemula' && project.difficulty === 'menengah') ||
      (filter.difficulty === 'menengah' && (project.difficulty === 'pemula' || project.difficulty === 'mahir')) ||
      (filter.difficulty === 'mahir' && project.difficulty === 'menengah')
    ) {
      score += 2;
    }
  }

  // Goal match (+3)
  if (filter.goal && project.goal.includes(filter.goal)) {
    score += 3;
  }

  // Duration match (+3)
  if (filter.duration && project.duration === filter.duration) {
    score += 3;
  }

  // Domain match (+3)
  if (filter.domain && project.domain === filter.domain) {
    score += 3;
  }

  return score;
};

// Find the single best matched project for Guided Match
export const findBestMatch = (filter: QuizFilter): ProjectIdea => {
  const seenIds = new Set(getSeenIds());

  // Pool from selected category (or all if none)
  const pool = filter.category
    ? PROJECT_IDEAS.filter(p => p.category === filter.category)
    : PROJECT_IDEAS;

  const scored = pool.map(p => ({
    project: p,
    score: calculateMatchScore(p, filter),
    seen: seenIds.has(p.id)
  }));

  // Sort: highest score first, unseen first
  scored.sort((a, b) => {
    if (a.seen !== b.seen) return a.seen ? 1 : -1;
    return b.score - a.score;
  });

  return scored[0]?.project || pool[0] || PROJECT_IDEAS[0];
};

// Pool filtering logic with Anti-Repeat and healthy pool size
export const filterProjects = (
  filter: QuizFilter | null,
  excludeSeen: boolean = true
): { available: ProjectIdea[]; totalMatching: number; seenCount: number } => {
  const seenIds = new Set(getSeenIds());

  if (!filter) {
    const totalMatching = PROJECT_IDEAS.length;
    const available = excludeSeen
      ? PROJECT_IDEAS.filter(p => !seenIds.has(p.id))
      : PROJECT_IDEAS;
    const seenCount = totalMatching - available.length;
    return { available, totalMatching, seenCount };
  }

  // Scoped to category if selected (25-30 ideas per category, never starved to 4!)
  let pool = filter.category
    ? PROJECT_IDEAS.filter(p => p.category === filter.category)
    : PROJECT_IDEAS;

  // Rank by match score descending so the closest matches appear first
  pool = [...pool].sort((a, b) => calculateMatchScore(b, filter) - calculateMatchScore(a, filter));

  const totalMatching = pool.length;
  const available = excludeSeen
    ? pool.filter(p => !seenIds.has(p.id))
    : pool;
  const seenCount = totalMatching - available.length;

  return {
    available,
    totalMatching,
    seenCount
  };
};
