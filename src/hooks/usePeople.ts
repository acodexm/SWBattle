import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { swappiService, getRandomElement } from '../api';
import { Person } from '../types';
import { useGame } from './useGame';

export function usePeople(service = swappiService(), getRandom = getRandomElement) {
  const { scores, updateScores } = useGame();
  const [cards, setCards] = useState<{ left: Person; right: Person }>();
  const initialMount = useRef(true);

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ['list', 'people'],
    queryFn: () => service.fetchPeople(),
  });

  const determineWinner = useCallback((left: Person, right: Person) => {
    const leftMass = parseFloat(left.mass) || 0;
    const rightMass = parseFloat(right.mass) || 0;
    return leftMass > rightMass ? 'left' : rightMass > leftMass ? 'right' : undefined;
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
