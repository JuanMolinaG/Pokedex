import React, { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useIsMount } from '../hooks/useIsMount';

import { SearchBar } from '../components/searchBar/SearchBar';
import { SortButton } from '../components/sortButton/SortButton';
import { CardList } from '../components/cardList/CardList';
import { SortModal } from '../components/sortModal/SortModal';

import { getPokemonsWithBasicData } from '../utils/getPokemon';

import style from './index.module.scss';
import Pokeball from '../public/images/pokeball.svg';
import { PokemonBasicData } from '../types';

export async function getStaticProps() {
  const pokemons = await getPokemonsWithBasicData();

  return {
    props: {
      pokemonList: pokemons,
    },
  };
}

export default function Home({
  pokemonList,
}: {
  pokemonList: PokemonBasicData[];
}) {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [sortName, setSortName] = useState(false);
  const isMount = useIsMount();

  if (search) {
    pokemonList = pokemonList.filter(
      (pokemon) =>
        pokemon.name.includes(search.toLowerCase()) ||
        pokemon.id == Number(search)
    );
  }

  if (sortName) {
    pokemonList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else {
    pokemonList.sort((a, b) => a.id - b.id);
  }

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex created using the pokeAPI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.home__container}>
        <div className={style.home__header}>
          <Pokeball />
          <h1 className={style.home__title}>Pokedex</h1>
        </div>
        <div className={style.home__search}>
          <SearchBar setSearch={setSearch} />
          <SortButton
            sortName={sortName}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
        <CardList pokemonList={pokemonList} loading={false} isMount={isMount} />
        <AnimatePresence>
          {showModal && (
            <SortModal
              sortName={sortName}
              setSortName={setSortName}
              showModal={showModal}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
