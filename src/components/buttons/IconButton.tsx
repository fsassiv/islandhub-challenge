import Image from 'next/image';
import { FC } from 'react';
import BagIcon from '../../../public/icons/bag-5-svgrepo-com.svg';
import HeartIcon from '../../../public/icons/heart-svgrepo-com.svg';
import { IconButtonPropTypes } from './types';

export const IconButton: FC<IconButtonPropTypes> = ({ onClick, icon }) => {
  return (
    <button
      id="icon-button"
      onClick={onClick}
      className="rounded-full w-14 aspect-square bg-white flex justify-center items-center mr-2"
    >
      <Image
        alt={`icon_${icon}`}
        width={20}
        height={20}
        src={icon === 'bag' ? BagIcon : HeartIcon}
      />
    </button>
  );
};
