import { CartList } from '@/features/cart/components/cart_list';
import { useTranslations } from 'next-intl';

export default function Cart() {
  const t_cart = useTranslations('cart');

  return (
    <div className="w-full">
      <h4 className="font-bold text-gray-600 rounded-3xl bg-white bg-opacity-60 p-4 mb-4">
        {t_cart('my_cart')}
      </h4>
      <CartList />
    </div>
  );
}
