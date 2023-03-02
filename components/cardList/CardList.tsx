import React from 'react';
import Image from 'next/image';
import { PokemonBasicData } from '@/types';
import { Card } from '../card/Card';
import { AnimatePresence } from 'framer-motion';

import style from './CardList.module.scss';
import ErrorIcon from '../../public/images/clear_icon.svg';
import noImage from '../../public/images/no_image.png';

interface CardListProps {
  pokemonList: PokemonBasicData[] | [];
  loading: boolean;
  isMount: boolean;
}

export function CardList({ pokemonList, loading, isMount }: CardListProps) {
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
      <AnimatePresence>
        {pokemonList.map((pokemon, index) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            index={index}
            isMount={isMount}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
