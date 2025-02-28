import { swappiService, SwapiClient } from '../api';
import { mock, when } from 'strong-mock';
import { describe, it, expect } from 'vitest';
import { person1, person2 } from './stubs.ts';

describe('api', () => {
  const client = mock<SwapiClient>();

  it('fetches all people pages', async () => {
    when(() => client.getPage('people')).thenResolve({ count: 2, results: [person1] });
    when(() => client.getPage('people', 2)).thenResolve({ count: 2, results: [person2] });

    const service = swappiService(client);
    const result = await service.fetchPeople();

    expect(result).toEqual([person1, person2]);
  });
});
