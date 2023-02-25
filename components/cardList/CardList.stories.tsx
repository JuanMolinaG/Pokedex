import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardList } from './CardList';

export default {
  component: CardList,
  title: 'CardList',
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemonList: [
    {
      id: 0,
      name: 'Pokemon',
      types: ['default'],
      image: '',
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
      },
    },
  ],
  loading: false,
};

export const MultiplePokemon = Template.bind({});
MultiplePokemon.args = {
  pokemonList: [
    {
      id: 1,
      name: 'Bulbasaur',
      types: ['grass', 'poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
      },
    },
    {
      id: 4,
      name: 'Charmander',
      types: ['fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      stats: {
        hp: 39,
        attack: 52,
        defense: 43,
      },
    },
    {
      id: 7,
      name: 'Squirtle',
      types: ['water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      stats: {
        hp: 44,
        attack: 48,
        defense: 65,
      },
    },
  ],
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  pokemonList: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  pokemonList: [],
  loading: false,
};
