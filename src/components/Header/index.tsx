import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import HeaderMenu from '@/components/Header/Menu';
import SwitchButton from '@/components/Header/SwitchButton';
import { Device } from '@/components/Device';
import dynamic from 'next/dynamic';
import Logo from '@/components/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';

const MobileNav = dynamic(() => import('@/components/Header/MobileNav'), {
  ssr: false,
  loading: () => <Bars3Icon className='h-6 w-6' />,
});

const MainHeader: FC = () => {
  const router = useRouter();

  const isShowPage =
    router.pathname === '/movie/[id]' || router.pathname === '/series/[id]';

  const headerClasses = classNames(
    'flex absolute max-w-7xl mx-auto px-4 z-[100] inset-0 items-center justify-between md:px-12 w-full h-20 flex-0-auto',
    {
      'bg-transparent': isShowPage,
    }
  );

  return (
    <header className={headerClasses}>
      <div className='flex cursor-pointer items-center gap-4 md:gap-10'>
        <Device desktop>
          <>
            <Link href='/' className='flex items-center'>
              <Logo />
            </Link>
            <HeaderMenu />
          </>
        </Device>
        <Device mobile>
          <MobileNav />
        </Device>
      </div>
      <div className='flex items-center'>
        {isShowPage ? null : <SwitchButton />}
      </div>
    </header>
  );
};

export default MainHeader;
