import { CardSkeleton } from './Cards/CardSkeleton';
import { ScoreBoardSkeleton } from './ScoreBoard/ScoreBoardSkeleton';

interface BattleLoaderProps {
  title: string;
}

export function BattleLoader({ title }: BattleLoaderProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
      <ScoreBoardSkeleton />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
