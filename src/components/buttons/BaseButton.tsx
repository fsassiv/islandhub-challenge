import { FC } from 'react';
import { BaseBottomPropTypes } from './types';

export const BaseButtom: FC<BaseBottomPropTypes> = ({ onClick, text = '' }) => (
  <button
    id="base-button"
    className="rounded-full p-2 bg-foreground h-10 min-w-10"
    onClick={onClick}
  >
    {text}
  </button>
);
