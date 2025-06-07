/* eslint-disable jsx-a11y/alt-text */
import InstagramIcon from '@/public/icons/instagram-svgrepo-com.svg';
import LinkedinIcon from '@/public/icons/linkedin-svgrepo-com.svg';
import TiktokIcon from '@/public/icons/tiktok-svgrepo-com.svg';
import TwitterIcon from '@/public/icons/twitter-154-svgrepo-com.svg';
import Image from 'next/image';
import { FC } from 'react';
import { SocialLinkButtonPropTypes } from './types';

export const SocialLinkButton: FC<SocialLinkButtonPropTypes> = ({ icon }) => {
  const common = {
    alt: `social_icon_${icon}`,
    width: 20,
    height: 20,
    socialLink: {
      twitter: 'https://x.com/home',
      tiktok: 'https://www.tiktok.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  };

  return (
    <a
      id="icon-button"
      href={common?.socialLink[icon]}
      target="_blank"
      className="rounded-full w-10 aspect-square bg-white flex justify-center items-center mr-2"
    >
      {icon === 'twitter' ? <Image {...common} src={TwitterIcon} /> : null}
      {icon === 'tiktok' ? <Image {...common} src={TiktokIcon} /> : null}
      {icon === 'instagram' ? <Image {...common} src={InstagramIcon} /> : null}
      {icon === 'linkedin' ? <Image {...common} src={LinkedinIcon} /> : null}
    </a>
  );
};
