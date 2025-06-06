'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('error.notFound');

  return (
    <div className="flex flex-col justify-evenly lg:justify-center items-center h-screen w-screen container">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <Link href="/">{t('backToHome')}</Link>
    </div>
  );
}
