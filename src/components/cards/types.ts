import { ProductTypes } from '@/types/common';
import { ReactNode } from 'react';

export type CardBasePropTypes = {
  children: ReactNode;
  isFullHeight?: boolean;
};

export type MoreProductsCardPropTypes = {
  products: ProductTypes[];
};

export type InfoCardPropTypes = {
  reviews_count: number;
};
