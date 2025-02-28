interface ScoreBoardProps {
  leftScore: number;
  rightScore: number;
  isDraw?: boolean;
}

export function ScoreBoard({ leftScore, rightScore, isDraw }: ScoreBoardProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <div className="text-lg font-semibold text-blue-600">Player 1</div>
          <div className="text-3xl font-bold">{leftScore}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-400">VS</div>
          {isDraw && (
            <div className="mt-2 px-3 py-1 bg-yellow-500 text-white text-sm rounded-full">
              Draw!
            </div>
          )}
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-blue-600">Player 2</div>
          <div className="text-3xl font-bold">{rightScore}</div>
        </div>
      </div>
    </div>
  );
}
