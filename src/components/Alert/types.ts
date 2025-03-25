import { ReactNode, HTMLAttributes } from 'react';

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  severity: 'success' | 'warning' | 'info' | 'danger';
  variant?: 'filled' | 'outlined';
  fixed?: boolean;
  icon?: ReactNode;
};
