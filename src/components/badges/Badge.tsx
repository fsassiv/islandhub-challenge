/* eslint-disable jsx-a11y/alt-text */
import HeartFireIcon from '@/public/icons/heart-on-fire-svgrepo-com.svg';
import StartYellowIcon from '@/public/icons/star-svgrepo-com-yellow.svg';
import Image from 'next/image';
import { FC } from 'react';
import { BadgePropTypes } from './types';

export const Badge: FC<BadgePropTypes> = ({
  children,
  icon,
  hasBorder,
  isBlur,
}) => {
  const common = {
    alt: `badge_${icon}_icon`,
    width: 20,
    height: 20,
  };

  return (
    <div
      className={`rounded-full py-1 px-2 flex items-center ${hasBorder ? 'border' : ''} ${isBlur ? 'backdrop-blur-sm' : ''}`}
    >
      {icon === 'heart' ? <Image {...common} src={HeartFireIcon} /> : null}
      {icon === 'star' ? <Image {...common} src={StartYellowIcon} /> : null}

      {children}
    </div>
  );
};
