'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IconButton } from '../buttons';
import { BaseCard } from './BaseCard';
import { MoreProductsCardPropTypes } from './types';

export const MoreProductsCard: FC<MoreProductsCardPropTypes> = ({
  products,
}) => {
  const t_cards = useTranslations('cards');

  return (
    <BaseCard isFullHeight={true}>
      <div className="flex flex-col justify-between p-4 relative w-full">
        <div className="flex flex-col mb-6">
          <h4 className="mb-1 w-2/3 font-bold">
            {t_cards('more_products.title')}
          </h4>
          <p className="font-light text-xs">
            {t_cards('more_products.qty_plus_items', { qty: 430 })}
          </p>

          <IconButton
            icon="heart"
            onClick={() => console.log('redirect to fav')}
            additionalClasses="absolute top-4 right-4 w-[30px] h-[30px] mr-0 bg-slate-200"
          />
        </div>
        <ul className="flex justify-between">
          {products.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl overflow-clip h-full max-h-[80px] w-[25%]"
            >
              <Link href={`/products/${item.id}`}>
                <Image
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-full w-full  object-cover"
                  src={`/images/pexels-${item.img_name}.jpg`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </BaseCard>
  );
};
