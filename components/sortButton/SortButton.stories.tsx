import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SortButton } from './SortButton';

export default {
  component: SortButton,
  title: 'SortButton',
} as ComponentMeta<typeof SortButton>;

const Template: ComponentStory<typeof SortButton> = (args) => (
  <SortButton {...args} />
);

export const Default = Template.bind({});

export const SortNumber = Template.bind({});
SortNumber.args = {
  sortNumber: true,
};
