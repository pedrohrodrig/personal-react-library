import { HTMLAttributes, ReactNode } from 'react';

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  severity: 'success' | 'warning' | 'info' | 'danger';
  variant?: 'filled' | 'outlined';
  fixed?: boolean;
  icon?: boolean;
  onClose?: () => void;
};

export type AlertTitleProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type AlertDescriptionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};
