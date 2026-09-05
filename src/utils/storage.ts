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

// Pool filtering logic with Anti-Repeat
export const filterProjects = (
  filter: QuizFilter | null,
  excludeSeen: boolean = true
): { available: ProjectIdea[]; totalMatching: number; seenCount: number } => {
  const seenIds = new Set(getSeenIds());

  let matching = PROJECT_IDEAS;

  if (filter) {
    if (filter.category) {
      matching = matching.filter(p => p.category === filter.category);
    }
    if (filter.difficulty) {
      matching = matching.filter(p => p.difficulty === filter.difficulty);
    }
    if (filter.goal) {
      matching = matching.filter(p => p.goal.includes(filter.goal!));
    }
    if (filter.duration) {
      matching = matching.filter(p => p.duration === filter.duration);
    }
    if (filter.domain) {
      matching = matching.filter(p => p.domain === filter.domain);
    }
  }

  const totalMatching = matching.length;
  const available = excludeSeen
    ? matching.filter(p => !seenIds.has(p.id))
    : matching;
  const seenCount = totalMatching - available.length;

  return {
    available,
    totalMatching,
    seenCount
  };
};
