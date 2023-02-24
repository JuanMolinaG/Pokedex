export type PokemonType =
  | 'default'
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'ground'
  | 'poison'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy';

export type PokemonBasicData = {
  id: number;
  name: string;
  types: PokemonType[];
  image?: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
  };
};
