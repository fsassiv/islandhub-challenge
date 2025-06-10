import ArrowUpRightWhiteIcon from '@/public/icons/arrow-up-right-svgrepo-com-white.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CtaLinkButtonPropTypes } from './types';

export const CtaLinkButton: FC<CtaLinkButtonPropTypes> = ({ text, href }) => {
  return (
    <Link
      href={href}
      id="cta-link"
      className="rounded-full p-1 pl-6 bg-[#E0FF76] flex items-center"
    >
      {text}
      <span className="rounded-full bg-black p-2 ml-1">
        <Image
          alt="cta-link-icon"
          width={30}
          height={30}
          src={ArrowUpRightWhiteIcon}
          className="stroke-red-50"
        />
      </span>
    </Link>
  );
};
