import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  component: Badge,
  title: 'Badge',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'default',
          'normal',
          'fighting',
          'flying',
          'ground',
          'poison',
          'rock',
          'bug',
          'ghost',
          'steel',
          'fire',
          'water',
          'grass',
          'electric',
          'psychic',
          'ice',
          'dragon',
          'dark',
          'fairy',
        ],
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: 'Default',
};

export const ByType = Template.bind({});
ByType.args = {
  type: 'normal',
  children: 'Type',
};
