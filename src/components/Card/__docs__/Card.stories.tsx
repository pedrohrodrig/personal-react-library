import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Card',
  component: Example,
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal']
    },
    fullWidth: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Component: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card.',
    direction: 'vertical',
    image: 'https://placehold.co/300',
    imageAlt: 'Placeholder Image',
    body: <p>This is the body content of the card.</p>,
    footer: <p>Footer content here</p>,
    fullWidth: false
  }
};
