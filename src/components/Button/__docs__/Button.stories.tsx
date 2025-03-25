import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'info',
        'danger',
        'outline',
        'ghost'
      ]
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Component: Story = {
  args: {
    children: <p>Button</p>,
    variant: 'primary',
    disabled: false,
    size: 'small',
    onClick: () => console.log('Button'),
    fullWidth: false
  }
};
