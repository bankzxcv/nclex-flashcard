import Link from 'next/link';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getAllFlashcardDecks } from '../lib/markdown';

export default function FlashcardsPage() {
  const decks = getAllFlashcardDecks();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flashcard Decks
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master NCLEX concepts with interactive flashcards. Use active recall and spaced repetition to improve retention.
          </p>
        </div>

        {/* Flashcard Decks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decks.map((deckData) => {
            const deck = deckData.deck;
            const cardCount = deckData.cards?.length || deck.totalCards;

            return (
              <Card
                key={deck.id}
                className="p-6 hover:shadow-xl transition-all duration-200"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {deck.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {deck.description}
                  </p>
                </div>

                {/* Metadata */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {deck.category}
                    </span>
                  </div>
                  {deck.subcategory && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Subcategory:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {deck.subcategory}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Cards:</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {cardCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      deck.difficulty === 'easy'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : deck.difficulty === 'medium'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}>
                      {deck.difficulty}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {deck.tags.slice(0, 3).map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link href={`/flashcards/${deck.id}`}>
                  <Button className="w-full">
                    Start Studying
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {decks.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No flashcard decks available yet.
            </p>
            <Link href="/topics">
              <Button variant="outline">
                Browse Study Guides Instead
              </Button>
            </Link>
          </Card>
        )}

        {/* Study Tips */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Flashcard Study Tips
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-2">1.</span>
              <span><strong>Active Recall:</strong> Try to answer before flipping the card</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-2">2.</span>
              <span><strong>Spaced Repetition:</strong> Review difficult cards more frequently</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-2">3.</span>
              <span><strong>Consistency:</strong> Study a little bit every day for best results</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 dark:text-purple-400 mr-2">4.</span>
              <span><strong>Mix It Up:</strong> Shuffle cards to avoid memorizing order</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
