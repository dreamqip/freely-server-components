import type { FC, PropsWithChildren } from 'react';
import MainHeader from '@/components/Header';
import Main from '@/components/Main';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

interface MainLayoutProps {
  theme?: string;
  font?: string;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  theme,
  font,
}) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'
      forcedTheme={theme || undefined}
    >
      <div
        className={`${font} mx-auto flex min-h-full max-w-7xl flex-auto flex-col bg-inherit px-2 font-montserrat font-montserrat md:px-4`}
      >
        <MainHeader />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
