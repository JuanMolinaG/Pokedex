import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
  decorators: [
    (Story) => (
      <div style={{ margin: '4em', display: 'grid', placeItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  pokemon: {
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
};

export const WithPokemon = Template.bind({});
WithPokemon.args = {
  pokemon: {
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
};
