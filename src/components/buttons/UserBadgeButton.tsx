import HimOne from '@/public/images/him-one-unsplash.jpg';
import Image from 'next/image';
import Link from 'next/link';

export const UserBadgeButton = () => {
  return (
    <Link
      id="user-badge-button"
      href="/profile"
      className="rounded-full bg-white max-h-14 p-2 flex items-center"
    >
      <p className="ml-1 whitespace-nowrap mr-3">Ryman Alex</p>
      <span className="rounded-full border border-gray-300 h-full aspect-square overflow-clip">
        <Image alt="user_badge" width={50} height={50} src={HimOne} />
      </span>
    </Link>
  );
};
