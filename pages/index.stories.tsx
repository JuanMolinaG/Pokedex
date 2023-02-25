import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from './index';

export default {
  component: Home,
  title: 'Home',
} as ComponentMeta<typeof Home>;

const pokemonList = [
  {
    id: 1,
    name: 'bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
    },
  },
  {
    id: 4,
    name: 'charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    types: ['fire'],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
    },
  },
  {
    id: 7,
    name: 'squirtle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    types: ['water'],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
    },
  },
  {
    id: 25,
    name: 'pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: ['electric'],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
    },
  },
  {
    id: 133,
    name: 'eevee',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    types: ['normal'],
    stats: {
      hp: 55,
      attack: 55,
      defense: 50,
    },
  },
  {
    id: 150,
    name: 'mewtwo',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    types: ['psychic'],
    stats: {
      hp: 106,
      attack: 110,
      defense: 90,
    },
  },
  {
    id: 151,
    name: 'mew',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
    types: ['psychic'],
    stats: {
      hp: 100,
      attack: 100,
      defense: 100,
    },
  },
];

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemonList,
};
