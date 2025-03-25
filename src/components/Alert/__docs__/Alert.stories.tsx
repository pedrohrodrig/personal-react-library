import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../index';
import { fonts } from '@/styles';

// filepath: c:\Users\phrdv\OneDrive\Documentos\Projects\pessoal\personal-react-library\src\components\Alert\__docs__\Alert.stories.tsx

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
      <span style={{ fontFamily: fonts.family.dmSans }}>Alert Message</span>
    ),
    severity: 'info',
    variant: 'filled',
    fixed: false
  }
};
