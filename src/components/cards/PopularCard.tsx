import ArrowUpRightIcon from '@/public/icons/arrow-up-right-svgrepo-com.svg';
import XBudsImage from '@/public/images/hands-buds-2.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Badge } from '../badges';
import { BaseCard } from './BaseCard';
import { PopularCardPropTypes } from './types';
import { AVATARS } from './utils';

export const PopularCard: FC<PopularCardPropTypes> = ({ popular_ratins }) => {
  const t_cards = useTranslations('cards');

  return (
    <BaseCard isFullHeight={true}>
      <div className="flex items-start p-4 relative w-full">
        <div className="flex flex-col justify-between items-start h-full max-desktop:w-full">
          <Badge icon="heart" hasBorder>
            <p className="text-sm">{t_cards('popular.badge_title')}</p>
          </Badge>
          <span className="absolute bottom-4 right-6 z-10">
            <Badge icon="star" isBlur>
              <p className="text-sm">{popular_ratins}</p>
            </Badge>
          </span>
          <h4 className="mb-1 w-2/3 font-bold max-desktop:mt-4">
            {t_cards('popular.title')}
          </h4>

          <ul className="flex relative  max-desktop:mt-4">
            {AVATARS.map((item, index) => (
              <li
                key={item.img_name}
                className={`rounded-full border-2 border-white overflow-hidden scale-90 ${!index ? 'mr-6' : ''} ${index === 1 ? 'absolute left-[30%] !scale-125 z-10' : ''}`}
              >
                <Image
                  alt={item.img_name}
                  width={40}
                  height={40}
                  src={`/images/${item.img_name}`}
                />
              </li>
            ))}
          </ul>
        </div>
        <Link
          id="x-bud-card-link-btn"
          className="rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center absolute top-4 right-4 z-10"
          href={''}
        >
          <Image
            alt="arrow-up-right"
            width={30}
            height={30}
            src={ArrowUpRightIcon}
          />
        </Link>
        <Image
          alt="x-bud"
          width={100}
          height={100}
          src={XBudsImage}
          className="absolute bottom-[-25%] right-0 h-auto w-2/3 desktop:max-w-[200px] scale-x-[-1]"
        />
      </div>
    </BaseCard>
  );
};
