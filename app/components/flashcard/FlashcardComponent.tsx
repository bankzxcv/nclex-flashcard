'use client';

import { useState } from 'react';
import { Flashcard } from '@/app/types';

interface FlashcardProps {
  card: Flashcard;
}

export default function FlashcardComponent({ card }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-96 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of card (Question) */}
        <div
          className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-blue-500 p-8 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
            QUESTION
          </div>
          <div className="text-xl md:text-2xl text-center text-gray-900 dark:text-white font-medium">
            {card.question}
          </div>
          <div className="absolute bottom-6 text-sm text-gray-500 dark:text-gray-400">
            Click to flip
          </div>
        </div>

        {/* Back of card (Answer) */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-xl p-8 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-sm font-semibold text-white mb-4">
            ANSWER
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-xl md:text-2xl text-white font-semibold mb-6 text-center">
              {card.answer}
            </div>
            {card.explanation && (
              <div className="text-sm text-blue-50 bg-white/10 rounded-lg p-4">
                <p className="font-semibold mb-2">Explanation:</p>
                <p>{card.explanation}</p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {card.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/20 text-white rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
