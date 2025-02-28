export interface Person {
  name: string;
  mass: string;
  height: string;
  birth_year: string;
  gender: string;
}

export interface Starship {
  name: string;
  crew: string;
  model: string;
  manufacturer: string;
  starship_class: string;
}

export type ResourceType = 'people' | 'starships';
