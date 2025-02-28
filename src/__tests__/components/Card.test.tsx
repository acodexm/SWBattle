import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderUI } from '../testRender';
import { Card } from '../../components/Cards/Card.tsx';
import { UserIcon } from 'lucide-react';

describe('Card', () => {
  it('renders with winner state', () => {
    renderUI(
      <Card isWinner={true}>
        <Card.Header icon={<UserIcon />} name="Test Card" />
      </Card>
    );

    expect(screen.getByText('Winner!')).toBeDefined();
    expect(screen.getByText('Test Card')).toBeDefined();
  });
});
