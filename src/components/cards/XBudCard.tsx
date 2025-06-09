'use client';
import ArrowUpRightIcon from '@/public/icons/arrow-up-right-svgrepo-com.svg';
import XBudsImage from '@/public/images/hands-buds-2.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { CardBase } from './CardBase';

export const XBudCard = () => {
  const t_cards = useTranslations('general.cards');

  return (
    <CardBase>
      <div className="flex p-4 h-[180px] tablet:max-desktop:h-[280px] w-full">
        <h4 className="mb-2 w-2/3 font-bold">{t_cards('x_buds.title')}</h4>
        <Image
          alt="x-bud"
          width={100}
          height={100}
          src={XBudsImage}
          className="absolute bottom-[-25%] right-0 h-auto w-2/3 desktop:max-w-[200px]"
        />
        <button
          id="x-bud-card-btn"
          className="rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center absolute bottom-4 left-4"
          onClick={() => console.log('add click event')}
        >
          <Image
            alt="arrow-up-right"
            width={30}
            height={30}
            src={ArrowUpRightIcon}
          />
        </button>
      </div>
    </CardBase>
  );
};
