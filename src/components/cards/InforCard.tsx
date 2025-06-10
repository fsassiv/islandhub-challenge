import StarIcon from '@/public/icons/star-svgrepo-com.svg';
import { convertToNominal } from '@/utils/general';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import { BaseCard } from './BaseCard';
import { InfoCardPropTypes } from './types';
import { AVATARS } from './utils';

export const InforCard: FC<InfoCardPropTypes> = ({ reviews_count }) => {
  const t_cards = useTranslations('cards');

  return (
    <BaseCard isFullHeight={true}>
      <div className="flex items-center justify-center p-4 w-full">
        <ul className="flex absolute top-4">
          {AVATARS.map((item, index) => (
            <li
              key={item.img_name}
              className={`rounded-full border-2 border-white overflow-hidden ${index === 1 ? 'absolute left-[25%]' : null}`}
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
        <div
          className="rounded-full w-[70%] aspect-square flex flex-col justify-center items-center"
          style={{
            backgroundImage: 'linear-gradient(to top, #4584EB,#3567B0 )',
          }}
        >
          <h4 className="text-white text-2xl">{convertToNominal(5000)}</h4>
          <h6 className="text-white text-sm"> {t_cards('info.downloads')}</h6>
        </div>
        <span className="flex rounded-full bg-white items-center text-sm py-2 px-4 absolute bottom-4">
          <Image alt="start" width={20} height={20} src={StarIcon} />
          <p>
            {t_cards('info.reviews', {
              qty: reviews_count.toFixed(1),
            })}
          </p>
        </span>
      </div>
    </BaseCard>
  );
};
