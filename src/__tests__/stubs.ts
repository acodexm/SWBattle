import { Person, Starship } from '../types';

export const person1: Person = {
  name: 'Luke',
  mass: '77',
  height: '172',
  birth_year: '19BBY',
  gender: 'male',
};

export const person2: Person = {
  name: 'Leia',
  mass: '75',
  height: '150',
  birth_year: '19BBY',
  gender: 'female',
};

export const personWithInvalidData: Person = {
  name: 'Han',
  mass: 'undefined',
  height: '180',
  birth_year: '29BBY',
  gender: 'male',
};

export const starships1: Starship = {
  name: 'Millennium Falcon',
  model: 'YT-1300 light freighter',
  starship_class: 'Light freighter',
  manufacturer: 'Corellian Engineering Corporation',
  crew: '4',
};

export const starships2: Starship = {
  name: 'Executor',
  model: 'Executor-class star dreadnought',
  starship_class: 'Star dreadnought',
  manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
  crew: '279144',
};

export const starshipWithInvalidData: Starship = {
  name: 'Death Star',
  model: 'DS-1 Orbital Battle Station',
  starship_class: 'Deep Space Mobile Battlestation',
  manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
  crew: 'undefined',
};
