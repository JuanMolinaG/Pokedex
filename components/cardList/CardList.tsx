import Image from 'next/image';
import { PokemonBasicData } from '@/types';
import { Card } from '../card/Card';

import style from './CardList.module.scss';
import ErrorIcon from '../../public/images/clear_icon.svg';
import noImage from '../../public/images/no_image.png';

interface CardListProps {
  pokemonList: PokemonBasicData[] | [];
  loading: boolean;
}

export function CardList({ pokemonList, loading }: CardListProps) {
  const DummyCard = (
    <div className={style.dummyCard}>
      <Image
        unoptimized
        src={noImage}
        width={160}
        height={160}
        alt="Dummy pokemon"
      />
    </div>
  );

  if (loading) {
    return (
      <div className={`${style.cardList} ${loading && style.loading}`}>
        {DummyCard}
        {DummyCard}
        {DummyCard}
      </div>
    );
  }

  if (pokemonList.length === 0) {
    return (
      <div className={style.cardList}>
        <div className={style.wrapperMessage}>
          <ErrorIcon />
          <p className={style.titleMessage}>There are no Pokemon</p>
          <p className={style.subtitleMessage}>Try another search</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${style.cardList} ${pokemonList.length > 0 && style.noEmpty}`}
    >
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
