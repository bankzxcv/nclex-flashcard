import { NextResponse } from 'next/server';
import { getFlashcardDeck } from '@/app/lib/markdown';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ deck: string }> }
) {
  const { deck } = await params;
  const deckData = getFlashcardDeck(deck);

  if (!deckData) {
    return NextResponse.json(
      { error: 'Deck not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(deckData);
}
