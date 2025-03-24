import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import Button from '@/components/Button';

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
    body: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem'
        }}
      >
        <Button text="Button 1" />
        <Button variant="outline" text="Button 2" />
      </div>
    ),
    footer: null,
    fullWidth: false
  }
};
