import { useCallback, useState } from 'react';

type Scores = {
  left: number;
  right: number;
  winner?: 'right' | 'left';
};

export function useGame() {
  const [scores, setScores] = useState<Scores>({ left: 0, right: 0 });

  const updateScores = useCallback((winner?: 'right' | 'left') => {
    if (winner) {
      setScores((prev) => ({
        ...prev,
        [winner]: prev[winner] + 1,
        winner,
      }));
    } else {
      setScores((prev) => ({ ...prev, winner }));
    }
  }, []);

  return { scores, updateScores } as const;
}
