import { ProductTypes } from '@/types/common';
import { ReactNode } from 'react';

export type BaseCardPropTypes = {
  children: ReactNode;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
};

export type MoreProductsCardPropTypes = {
  products: ProductTypes[];
};

export type InfoCardPropTypes = {
  reviews_count: number;
};

export type PopularCardPropTypes = {
  popular_ratins: number;
};
