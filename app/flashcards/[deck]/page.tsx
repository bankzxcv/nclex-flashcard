'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Card from '@/app/components/ui/Card';
import FlashcardComponent from '@/app/components/flashcard/FlashcardComponent';
import { FlashcardData } from '@/app/types';

interface PageProps {
  params: Promise<{
    deck: string;
  }>;
}

export default function FlashcardDeckPage({ params }: PageProps) {
  const router = useRouter();
  const { deck: deckId } = use(params);
  const [deckData, setDeckData] = useState<FlashcardData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the deck data
    fetch(`/api/flashcards/${deckId}`)
      .then(res => res.json())
      .then(data => {
        setDeckData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading deck:', error);
        setLoading(false);
      });
  }, [deckId]);

  const shuffleCards = () => {
    if (deckData) {
      const shuffledCards = [...deckData.cards].sort(() => Math.random() - 0.5);
      setDeckData({
        ...deckData,
        cards: shuffledCards
      });
      setCurrentIndex(0);
      setShuffled(true);
    }
  };

  const nextCard = () => {
    if (deckData && currentIndex < deckData.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const resetDeck = () => {
    setCurrentIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextCard();
      } else if (e.key === 'ArrowLeft') {
        previousCard();
      } else if (e.key === 'r' || e.key === 'R') {
        resetDeck();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, deckData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading flashcards...</p>
        </div>
      </div>
    );
  }

  if (!deckData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Card className="p-12 text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Deck Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The flashcard deck you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push('/flashcards')}>
            Back to All Decks
          </Button>
        </Card>
      </div>
    );
  }

  const currentCard = deckData.cards[currentIndex];
  const progress = ((currentIndex + 1) / deckData.cards.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Deck Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {deckData.deck.title}
            </h1>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push('/flashcards')}
            >
              Exit
            </Button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {deckData.deck.description}
          </p>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Card {currentIndex + 1} of {deckData.cards.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-8">
          <FlashcardComponent card={currentCard} />
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            variant="outline"
            onClick={previousCard}
            disabled={currentIndex === 0}
            className="flex-1"
          >
            ← Previous
          </Button>
          <Button
            variant="outline"
            onClick={resetDeck}
            className="flex-1"
          >
            Reset
          </Button>
          <Button
            variant="outline"
            onClick={shuffleCards}
            className="flex-1"
          >
            {shuffled ? 'Shuffled' : 'Shuffle'}
          </Button>
          <Button
            variant="primary"
            onClick={nextCard}
            disabled={currentIndex === deckData.cards.length - 1}
            className="flex-1"
          >
            Next →
          </Button>
        </div>

        {/* Keyboard Shortcuts Info */}
        <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            <strong>Keyboard Shortcuts:</strong> ← Previous | → Next | R Reset | Click card to flip
          </p>
        </Card>

        {/* Completion Message */}
        {currentIndex === deckData.cards.length - 1 && (
          <Card className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 text-center">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
              Deck Complete! 🎉
            </h3>
            <p className="text-green-700 dark:text-green-300 mb-4">
              You've reviewed all {deckData.cards.length} cards in this deck.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={resetDeck}>
                Review Again
              </Button>
              <Button variant="outline" onClick={() => router.push('/flashcards')}>
                Choose Another Deck
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
