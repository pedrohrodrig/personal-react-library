import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../index';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'warning', 'info', 'danger']
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined']
    },
    fixed: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Component: Story = {
  args: {
    children: (
      <>
        <Alert.Title>This is a title</Alert.Title>
        <Alert.Description>This is a description</Alert.Description>
      </>
    ),
    severity: 'info',
    variant: 'filled',
    fixed: false
  }
};
