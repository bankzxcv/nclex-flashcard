import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { StudyGuide, StudyGuideFrontmatter } from '@/app/types';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all study guide files from a specific directory
 */
export function getStudyGuideFiles(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  return files.filter(file => file.endsWith('.md'));
}

/**
 * Get a single study guide by category and slug
 */
export function getStudyGuide(category: string, slug: string): StudyGuide | null {
  try {
    const fullPath = path.join(contentDirectory, 'study-guides', category, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract title from first H1 heading if no frontmatter
    let title = data.title || '';
    if (!title) {
      const h1Match = content.match(/^#\s+(.+)$/m);
      if (h1Match) {
        title = h1Match[1];
      } else {
        // Fallback to formatted slug
        title = slug.split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
    }

    // Infer category from path
    const categoryName = category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    const frontmatter: StudyGuideFrontmatter = {
      title,
      category: data.category || categoryName,
      subcategory: data.subcategory,
      difficulty: data.difficulty,
      tags: data.tags,
      lastUpdated: data.lastUpdated
    };

    return {
      slug: `${category}/${slug}`,
      frontmatter,
      content
    };
  } catch (error) {
    console.error(`Error reading study guide: ${category}/${slug}`, error);
    return null;
  }
}

/**
 * Get all study guides from all categories
 */
export function getAllStudyGuides(): StudyGuide[] {
  const guides: StudyGuide[] = [];
  const studyGuidesPath = path.join(contentDirectory, 'study-guides');

  if (!fs.existsSync(studyGuidesPath)) {
    return guides;
  }

  const categories = fs.readdirSync(studyGuidesPath).filter(item => {
    const itemPath = path.join(studyGuidesPath, item);
    return fs.statSync(itemPath).isDirectory();
  });

  categories.forEach(category => {
    const files = getStudyGuideFiles(`study-guides/${category}`);
    files.forEach(file => {
      const slug = file.replace('.md', '');
      const guide = getStudyGuide(category, slug);
      if (guide) {
        guides.push(guide);
      }
    });
  });

  return guides;
}

/**
 * Get flashcard deck data
 */
export function getFlashcardDeck(deckId: string) {
  try {
    const fullPath = path.join(contentDirectory, 'flashcards', `${deckId}.json`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading flashcard deck: ${deckId}`, error);
    return null;
  }
}

/**
 * Get all available flashcard decks
 */
export function getAllFlashcardDecks() {
  const flashcardsPath = path.join(contentDirectory, 'flashcards');

  if (!fs.existsSync(flashcardsPath)) {
    return [];
  }

  const files = fs.readdirSync(flashcardsPath).filter(file => file.endsWith('.json'));

  return files.map(file => {
    const deckId = file.replace('.json', '');
    return getFlashcardDeck(deckId);
  }).filter(deck => deck !== null);
}
