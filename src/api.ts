import { Person, ResourceType, Starship } from './types';
// this would be set in .env file
export const BASE_URL = 'https://swapi.dev/api';

export function getRandomElement<T = unknown>(data: T[]): T {
  const min = 0;
  const max = data.length - 1;
  const index = Math.floor(Math.random() * (max - min + 1) + min);
  return data[index];
}

/**
 *
 * SWApi does not return a list with resources IDs, therefore here is an implementation of client service
 * which would automatically crawl through all resource pages and return them as a list
 * later we could pick a random element from that list.
 * this approach is unique for the issue and it's only benefit is that we do not ask for non existant resource
 */
export type SwapiClient = {
  getPage: <T>(
    resource: ResourceType,
    page?: number
  ) => Promise<{
    count: number;
    results: T[];
  }>;
};
const swapiClient = (): SwapiClient => ({
  getPage: async <T = unknown>(resource: ResourceType, page: number = 1) => {
    const response = await fetch(`${BASE_URL}/${resource}?page=${page}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch resource: ${response.status}`);
    }
    return response.json() as Promise<{ count: number; results: T[] }>;
  },
});
export type SwapiService = {
  fetchPeople(): Promise<Person[]>;
  fetchStarships(): Promise<Starship[]>;
};
export const swappiService = (client = swapiClient()): SwapiService => {
  async function fetchResourceList<T = unknown>(resource: ResourceType) {
    const firstResult = await client.getPage<T>(resource);
    const pages = Math.ceil(firstResult.count / firstResult.results.length);
    const left = Array.from({ length: pages - 1 }, (_, i) => client.getPage<T>(resource, 2 + i));

    const restResults = await Promise.all(left);

    return [firstResult, ...restResults].reduce<T[]>((allResults, { results }) => {
      return [...allResults, ...results];
    }, []);
  }

  return {
    fetchPeople: () => fetchResourceList<Person>('people'),
    fetchStarships: () => fetchResourceList<Starship>('starships'),
  };
};
