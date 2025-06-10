'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PageHeader = () => {
  const pathname = usePathname();

  const generatePageHeader = () => {
    const paths = pathname.split('/');

    paths.shift();
    paths.pop();

    return paths?.map((item) => (
      <Link key={item} href={`/${item}`} className="mr-2 text-lg font-bold">
        {`${item} /`}
      </Link>
    ));
  };

  return <div className="w-full">{generatePageHeader()}</div>;
};
