import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatDetailList } from './StatDetailList';

export default {
  title: 'PokemonDetails/StatDetailList',
  component: StatDetailList,
} as ComponentMeta<typeof StatDetailList>;

const Template: ComponentStory<typeof StatDetailList> = (args) => (
  <StatDetailList {...args} />
);

const stats = [
  { name: 'hp', value: 45 },
  { name: 'atk', value: 49 },
  { name: 'def', value: 49 },
  { name: 'satk', value: 65 },
  { name: 'sdef', value: 65 },
  { name: 'spd', value: 45 },
];

export const Default = Template.bind({});
Default.args = {
  stats: [stats[0]],
  pokemonType: 'grass',
};

export const multipleStats = Template.bind({});
multipleStats.args = {
  stats,
  pokemonType: 'grass',
};
