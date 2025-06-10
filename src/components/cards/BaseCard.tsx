import { FC } from 'react';
import { BaseCardPropTypes } from './types';

export const BaseCard: FC<BaseCardPropTypes> = ({
  children,
  isFullHeight,
  isFullWidth,
}) => {
  return (
    <div
      className={`rounded-3xl relative bg-white bg-opacity-60 flex overflow-hidden shadow-xs shadow-black-100 font-sans ${isFullHeight ? 'h-full' : ''} ${isFullWidth ? 'w-full' : ''}`}
    >
      {children}
    </div>
  );
};
