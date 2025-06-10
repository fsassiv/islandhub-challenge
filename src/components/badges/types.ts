import { ReactNode } from 'react';

export type BadgePropTypes = {
  icon: 'heart' | 'star';
  children: ReactNode;
  hasBorder?: boolean;
  isBlur?: boolean;
};
