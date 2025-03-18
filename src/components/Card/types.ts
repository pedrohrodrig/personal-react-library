import { ReactNode, HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  direction?: 'vertical' | 'horizontal';
  image?: string;
  imageAlt?: string;
  body?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;
};
