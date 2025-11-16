// Flashcard Types
export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface FlashcardDeck {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  difficulty: 'easy' | 'medium' | 'hard';
  totalCards: number;
  tags: string[];
}

export interface FlashcardData {
  deck: FlashcardDeck;
  cards: Flashcard[];
}

// Study Guide Types
export interface StudyGuideFrontmatter {
  title: string;
  category: string;
  subcategory?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[];
  lastUpdated?: string;
}

export interface StudyGuide {
  slug: string;
  frontmatter: StudyGuideFrontmatter;
  content: string;
}

// NCLEX Category Types
export interface NCLEXCategory {
  id: string;
  title: string;
  description: string;
  percentage: string;
  subcategories?: NCLEXSubcategory[];
  color: string;
}

export interface NCLEXSubcategory {
  id: string;
  title: string;
  topics: string[];
}

// Progress Tracking Types
export interface StudyProgress {
  topicsCompleted: string[];
  flashcardsReviewed: Record<string, number>;
  lastStudied: Record<string, string>;
  totalStudyTime: number;
  streak: number;
}

export interface ConfidenceRating {
  topicId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  lastUpdated: string;
}

export interface UserProgress {
  studyProgress: StudyProgress;
  confidenceRatings: Record<string, ConfidenceRating>;
  customDecks: string[];
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Component Props Types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
