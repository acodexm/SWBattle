import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderUI } from '../testRender';
import { ScoreBoard } from '../../components/ScoreBoard/ScoreBoard.tsx';

describe('ScoreBoard', () => {
  it('renders scores correctly', () => {
    renderUI(<ScoreBoard leftScore={3} rightScore={2} />);

    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
  });

  it('shows draw indicator when isDraw is true', () => {
    renderUI(<ScoreBoard leftScore={3} rightScore={3} isDraw={true} />);

    expect(screen.getByText('Draw!')).toBeDefined();
  });
});
