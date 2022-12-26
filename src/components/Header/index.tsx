import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import HeaderMenu from '@/components/Header/Menu';
import SwitchButton from '@/components/Header/SwitchButton';
import dynamic from 'next/dynamic';
import Logo from '@/components/Logo';
import { Bars3Icon } from '@heroicons/react/24/solid';
import useEventListener from '@/hooks/useEventListener';
import { useRef } from 'react';

const MobileNav = dynamic(() => import('@/components/Header/MobileNav'), {
  loading: () => <Bars3Icon className='h-6 w-6' />,
});

const MainHeader: FC = () => {
  const router = useRouter();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEventListener('scroll', () => {
    if (headerRef.current) {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('on-scroll');
      } else {
        headerRef.current.classList.remove('on-scroll');
      }
    }
  });

  const isShowPage =
    router.pathname === '/movies/[id]' || router.pathname === '/series/[id]';

  const headerClasses = classNames(
    'fixed flex items-center z-50 inset-0 w-full h-20 bg-white dark:bg-black lg:bg-white-90 dark:lg:bg-dark-90 transition-all duration-300',
    {
      'dark:bg-transparent show-page': isShowPage,
    }
  );

  return (
    <header className={headerClasses} ref={headerRef}>
      <div className='mx-auto flex w-full max-w-7xl flex-0-auto items-center justify-between px-4 md:px-12'>
        <div className='hidden cursor-pointer items-center gap-4 md:flex md:gap-10'>
          <Link href='/' className='flex items-center'>
            <Logo />
          </Link>
          <HeaderMenu />
        </div>
        <div className='block md:hidden'>
          <MobileNav />
        </div>
        <div className='flex items-center'>
          {isShowPage ? null : <SwitchButton />}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
