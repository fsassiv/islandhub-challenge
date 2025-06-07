import ArrowUpRight from '@/public/icons/arrow-up-right-svgrepo-com-white.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CtaLinkButtonPropTypes } from './types';

export const CtaLinkButton: FC<CtaLinkButtonPropTypes> = ({ text, href }) => {
  return (
    <Link href={href} id="cta_link">
      <button
        id="cta_link_btn"
        className="rounded-full p-1 pl-6 bg-[#E0FF76] flex items-center"
      >
        {text}
        <span className="rounded-full bg-black p-2 ml-1">
          <Image
            alt="cta_link_icon"
            width={30}
            height={30}
            src={ArrowUpRight}
            className="stroke-red-50"
          />
        </span>
      </button>
    </Link>
  );
};
