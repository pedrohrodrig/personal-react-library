import { HTMLAttributes } from 'react';

export type TagProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
  variant?: 'success' | 'warning' | 'info' | 'danger' | 'primary' | 'secondary';
  onClose?: () => void;
  fixed?: boolean;
};
