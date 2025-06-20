'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('error.not_found_item');

  return (
    <div className="flex flex-col items-center h-full w-full container p-4 desktop:p-8">
      <h2 className="mb-2 text-xl">{t('title')}</h2>
      <p className="mb-4">{t('description')}</p>
      <Link
        id="back-home-link-btn"
        href="/"
        className="rounded-full py-2 px-6 bg-black text-white"
      >
        {t('backToHome')}
      </Link>
    </div>
  );
}
