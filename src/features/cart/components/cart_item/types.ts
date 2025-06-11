import { ProductTypes } from '@/types';

export type CartItemPropTypes = {
  data: ProductTypes & { qty: number };
};
