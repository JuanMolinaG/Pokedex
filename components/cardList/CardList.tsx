import { PokemonBasicData } from '@/types';
import { Card } from '../card/Card';

import style from './CardList.module.scss';

interface CardListProps {
  pokemonList: PokemonBasicData[];
}

export function CardList({ pokemonList }: CardListProps) {
  return (
    <div className={style.cardList}>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
