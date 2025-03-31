import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Tag',
  component: Example,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
    },
    fixed: {
      control: 'boolean'
    },
    text: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Component: Story = {
  args: {
    text: 'Tag Text',
    variant: 'primary',
    fixed: true,
    onClose: () => console.log('Tag closed')
  }
};
