import Logo from '@/public/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BaseBottomPropTypes } from './types';

export const LogoButton: FC<BaseBottomPropTypes> = ({ text }) => {
  return (
    <Link
      id="logo-button"
      href="/"
      className="rounded-full flex items-baseline py-3 px-4 pt-4 bg-[#E3EBED] bg-opacity-90 mr-2 min-w-24"
    >
      <Image alt="nitec_logo" width={20} height={20} src={Logo} />
      <p className="ml-1">{text}</p>
    </Link>
  );
};
