import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SortModal } from './SortModal';

export default {
  component: SortModal,
  title: 'SortModal',
} as ComponentMeta<typeof SortModal>;

const Template: ComponentStory<typeof SortModal> = (args) => (
  <SortModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sortName: false,
};

export const SortByName = Template.bind({});
SortByName.args = {
  sortName: true,
};
