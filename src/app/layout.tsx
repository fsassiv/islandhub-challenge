import { Header } from '@/components/header/Header';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Island Hub - Flavio',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang="en-US">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased py-4 px-6 tablet:py-8 tablet:px-10 min-h-screen`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
