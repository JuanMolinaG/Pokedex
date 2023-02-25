export async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
  const data = await res.json();
  return data.results;
}

export async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  return data;
}

export async function getPokemonsWithBasicData() {
  const pokemons = await getPokemons();

  const pokemonsWithData = pokemons.map(
    async (pokemon: { name: string; url: string }) => {
      const pokemonData = await getPokemon(pokemon.name);

      return {
        id: pokemonData.id,
        name: pokemonData.name,
        types: pokemonData.types.map(
          (type: { type: { name: string } }) => type.type.name
        ),
        image: pokemonData.sprites.other['official-artwork'].front_default,
        stats: {
          hp: pokemonData.stats[0].base_stat,
          attack: pokemonData.stats[1].base_stat,
          defense: pokemonData.stats[2].base_stat,
        },
      };
    }
  );

  return Promise.all(pokemonsWithData);
}
