import HimOne from '@/public/images/him-one-unsplash.jpg';
import Image from 'next/image';
import { FC } from 'react';
import { BaseBottomPropTypes } from './types';

export const UserBadgeButton: FC<BaseBottomPropTypes> = ({ onClick }) => {
  return (
    <button
      id="user-badge-button"
      onClick={onClick}
      className="rounded-full bg-white max-h-14 p-2 flex items-center"
    >
      <p className="ml-1 whitespace-nowrap mr-3">Ryman Alex</p>
      <span className="rounded-full border border-gray-300 h-full aspect-square overflow-clip">
        <Image alt="user_badge" width={50} height={50} src={HimOne} />
      </span>
    </button>
  );
};
