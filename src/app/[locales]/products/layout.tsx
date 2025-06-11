import { PageHeader } from '@/features/page/components/page_header';

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <PageHeader />
      {children}
    </main>
  );
}
