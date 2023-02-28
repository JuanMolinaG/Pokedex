import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from './SearchBar';

export default {
  component: SearchBar,
  title: 'SearchBar',
} as ComponentMeta<typeof SearchBar>;

function setSearch(search: string): void {
  console.log('setSearch');
}

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  setSearch,
};
