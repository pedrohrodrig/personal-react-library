import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger'
    | 'outline'
    | 'ghost';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
};
