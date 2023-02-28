import React, { useState } from 'react';
import Head from 'next/head';

import { SearchBar } from '../components/searchBar/SearchBar';
import { SortButton } from '../components/sortButton/SortButton';

import style from './index.module.scss';
import Pokeball from '../public/images/pokeball.svg';
import { CardList } from '../components/cardList/CardList';
import { PokemonBasicData } from '../types';
import { getPokemonsWithBasicData } from '../utils/getPokemon';

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

  if (search) {
    pokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(search.toLowerCase())
    );
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
          <SortButton sortName={false} />
        </div>
        <CardList pokemonList={pokemonList} loading={false} />
      </main>
    </>
  );
}
