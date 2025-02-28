import { describe, it, expect } from 'vitest';
import { renderUI } from '../testRender';
import { CardSkeleton } from '../../components/Cards/CardSkeleton';

describe('CardSkeleton', () => {
  it('renders skeleton structure', () => {
    const { container } = renderUI(<CardSkeleton />);

    expect(container.querySelector('.animate-pulse')).toBeDefined();
    expect(container.querySelectorAll('.bg-gray-200')).toHaveLength(10);
  });
});
