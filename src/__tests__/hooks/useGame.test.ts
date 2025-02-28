import { mountHook } from '../testRender';
import { describe, expect, it } from 'vitest';
import { useGame } from '../../hooks/useGame.ts';
import { act } from 'react';

describe('useGame', () => {
  it('update scores', async () => {
    const { result } = mountHook(() => useGame());
    expect(result.current.scores).toEqual({ left: 0, right: 0, winner: undefined });
    await act(() => {
      result.current.updateScores('left');
    });
    expect(result.current.scores).toEqual({ left: 1, right: 0, winner: 'left' });
    await act(() => {
      result.current.updateScores('right');
    });
    expect(result.current.scores).toEqual({ left: 1, right: 1, winner: 'right' });
  });
});
