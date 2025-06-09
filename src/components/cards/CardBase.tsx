import { FC } from 'react';
import { CardBasePropTypes } from './types';

export const CardBase: FC<CardBasePropTypes> = ({ children, isFullHeight }) => {
  return (
    <div
      className={`rounded-3xl relative bg-white bg-opacity-60 flex overflow-hidden shadow-xs shadow-black-100 font-sans ${isFullHeight ? 'h-full' : ''}`}
    >
      {children}
    </div>
  );
};
