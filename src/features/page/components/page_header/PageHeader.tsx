'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export const PageHeader = () => {
  const pathname = usePathname();

  const generatePageHeader = useCallback(() => {
    const paths = pathname.split('/');

    if (paths.length > 2) {
      paths.pop();
    }
    paths.shift();

    return paths?.map((item) => (
      <Link
        id="page-title-link-btn"
        key={item}
        href={`/${item}`}
        className="mr-2 text-lg px-4"
      >
        {`/ ${item}`}
      </Link>
    ));
  }, [pathname]);

  return (
    <div className="w-full mb-4 text-gray-600">{generatePageHeader()}</div>
  );
};
