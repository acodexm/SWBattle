import { usePeople } from '../../hooks/usePeople';
import { mountHook } from '../testRender';
import { mock, when } from 'strong-mock';
import { getRandomElement, SwapiService } from '../../api/swapiService.ts';
import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/react';
import { person1, person2 } from '../stubs.ts';

describe('usePeople', () => {
  const client = mock<SwapiService>();
  const getRandom = mock<typeof getRandomElement>();

  it('loads initial battle', async () => {
    const data = [person1, person2];
    when(() => client.fetchPeople()).thenResolve(data);
    when(() => getRandom(data)).thenReturn(person1);
    when(() => getRandom(data)).thenReturn(person2);

    const { result } = mountHook(() => usePeople(client, getRandom));

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.cards).toEqual({ left: person1, right: person2 });
    });
  });
  it('handles error', async () => {
    const error = new Error('Failed to fetch');
    when(() => client.fetchPeople()).thenReject(error);
    const { result } = mountHook(() => usePeople(client, getRandom));
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toEqual(true);
    });
  });
});
