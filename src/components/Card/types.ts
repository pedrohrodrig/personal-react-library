import { HTMLAttributes, ReactNode } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  direction?: 'vertical' | 'horizontal';
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;
};
