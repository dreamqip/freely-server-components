import type { FC, PropsWithChildren } from 'react';
import MainHeader from '@/components/Header';
import Main from '@/components/Main';
import MainFooter from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

interface MainLayoutProps {
  theme?: string;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'
      forcedTheme={theme || undefined}
    >
      <div className='mx-auto flex min-h-full max-w-7xl flex-auto flex-col bg-inherit px-2 font-montserrat md:px-4'>
        <MainHeader />
        <Main>{children}</Main>
        <MainFooter />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
