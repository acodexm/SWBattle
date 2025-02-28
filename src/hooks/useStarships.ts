import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState, useRef } from 'react';
import { swapiService, getRandomElement } from '../api/swapiService.ts';
import { Starship } from '../types';
import { useGame } from './useGame';

export function useStarships(service = swapiService(), getRandom = getRandomElement) {
  const { scores, updateScores } = useGame();
  const [cards, setCards] = useState<{ left: Starship; right: Starship }>();
  const initialMount = useRef(true);

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['list', 'starships'],
    queryFn: () => service.fetchStarships(),
  });

  const determineWinner = useCallback((left: Starship, right: Starship) => {
    const leftCrew = parseInt(left.crew) || 0;
    const rightCrew = parseInt(right.crew) || 0;
    return leftCrew > rightCrew ? 'left' : rightCrew > leftCrew ? 'right' : undefined;
  }, []);

  const nextBattle = useCallback(() => {
    if (!data) return;

    const left = getRandom(data);
    const right = getRandom(data);
    setCards({ left, right });

    const winner = determineWinner(left, right);
    updateScores(winner);
  }, [data, determineWinner, getRandom, updateScores]);

  useEffect(() => {
    if (data && initialMount.current) {
      initialMount.current = false;
      nextBattle();
    }
  }, [data, nextBattle]);

  return {
    cards,
    scores,
    isLoading: isFetching,
    nextBattle,
    isError,
    refetch,
  };
}
