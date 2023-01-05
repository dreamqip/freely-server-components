import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Montserrat } from '@next/font/google';
import MainLayout from '@/layouts/MainLayout';
import ReduxProvider from '@/app/ReduxProvider';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='pt-20 dark:bg-dark-theme'>
        <MainLayout font={montserrat.variable}>
          <ReduxProvider>{children}</ReduxProvider>
        </MainLayout>
      </body>
    </html>
  );
}
