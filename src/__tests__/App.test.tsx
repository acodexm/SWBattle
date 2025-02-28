import { screen } from '@testing-library/react';
import App from '../App';
import { renderUI } from './testRender.tsx';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders main navigation', () => {
    renderUI(<App />);

    expect(screen.getByText('People Battle')).toBeDefined();
    expect(screen.getByText('Starships Battle')).toBeDefined();
  });
});
