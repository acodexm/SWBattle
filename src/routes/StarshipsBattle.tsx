import { ScoreBoard } from '../components/ScoreBoard/ScoreBoard.tsx';
import { useStarships } from '../hooks/useStarships';
import { BackButton } from '../components/BackButton.tsx';
import { StarshipCard } from '../components/Cards/StarshipCard.tsx';
import { BattleLoader } from '../components/BattleLoader.tsx';
import { ErrorState } from '../components/ErrorState.tsx';

export function StarshipsBattle() {
  const { scores, cards, isLoading, nextBattle, refetch, isError } = useStarships();
  if (isError) {
    return <ErrorState onRetry={refetch} />;
  }
  if (isLoading || !cards) {
    return <BattleLoader title="Starships Battle" />;
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-3xl font-bold text-center mb-8">Starships Battle</h1>
      <ScoreBoard
        leftScore={scores.left}
        rightScore={scores.right}
        isDraw={scores.winner === undefined}
      />

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <StarshipCard card={cards.left} isWinner={scores.winner === 'left'} />
        <StarshipCard card={cards.right} isWinner={scores.winner === 'right'} />
      </div>

      <div className="text-center">
        <button
          onClick={nextBattle}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Next Battle
        </button>
      </div>
    </div>
  );
}
