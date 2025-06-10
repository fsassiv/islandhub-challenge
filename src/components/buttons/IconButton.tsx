import BagIcon from '@/public/icons/bag-5-svgrepo-com.svg';
import HeartIcon from '@/public/icons/heart-svgrepo-com.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IconButtonPropTypes } from './types';

export const IconButton: FC<IconButtonPropTypes> = ({
  icon,
  additionalClasses,
}) => {
  return (
    <Link
      id={`${icon}-link-btn`}
      href={`/${icon}`}
      className={`rounded-full  w-14 aspect-square bg-white flex justify-center items-center mr-2 ${additionalClasses}`}
    >
      <Image
        alt={`icon_${icon}`}
        width={20}
        height={20}
        src={icon === 'cart' ? BagIcon : HeartIcon}
      />
    </Link>
  );
};
