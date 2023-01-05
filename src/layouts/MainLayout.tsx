import type { FC, PropsWithChildren } from 'react';
import MainHeader from '@/components/Header';
import dynamic from 'next/dynamic';
import Theme from '@/app/Theme';

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

interface MainLayoutProps {
  theme?: string;
  font?: string;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
  font,
}) => {
  return (
    <div
      className={`${font} mx-auto flex min-h-full max-w-7xl flex-auto flex-col bg-inherit px-2 font-montserrat font-montserrat md:px-4`}
    >
      <Theme>
        <MainHeader />
        <main className='flex min-h-full flex-1 flex-col'>{children}</main>
        <Footer />
      </Theme>
    </div>
  );
};

export default MainLayout;
