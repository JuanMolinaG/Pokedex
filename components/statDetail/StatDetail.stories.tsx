import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatDetail } from './StatDetail';

export default {
  component: StatDetail,
  title: 'PokemonDetails/StatDetail',
} as ComponentMeta<typeof StatDetail>;

const Template: ComponentStory<typeof StatDetail> = (args) => (
  <StatDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  statName: 'stat',
  statValue: 0,
  pokemonType: 'default',
};

export const withValues = Template.bind({});
withValues.args = {
  statName: 'hp',
  statValue: 45,
  pokemonType: 'grass',
};
