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
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'small',
    onClick: () => console.log('Button'),
    icon: null,
    iconPosition: 'right',
    fullWidth: false
  }
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    variant: 'secondary',
    disabled: false,
    size: 'small',
    onClick: () => console.log('Button'),
    icon: null,
    iconPosition: 'right',
    fullWidth: false
  }
};
