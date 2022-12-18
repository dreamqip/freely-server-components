import type { FC } from 'react';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import HeaderMenu from '@/components/Header/Menu';
import SwitchButton from '@/components/Header/SwitchButton';
import { useTheme } from 'next-themes';
import { Device } from '@/components/Device';
import dynamic from 'next/dynamic';
import ImageWithFallback from '@/components/Image';

const MobileNav = dynamic(() => import('@/components/Header/MobileNav'), {
  suspense: true,
});

const MainHeader: FC = () => {
  const router = useRouter();
  const [logoSrc, setLogoSrc] = useState('/logo-white.webp');
  const { theme, forcedTheme } = useTheme();

  const isShowPage =
    router.pathname === '/movie/[id]' || router.pathname === '/series/[id]';

  const headerClasses = classNames(
    'flex absolute max-w-7xl mx-auto px-4 z-[100] inset-0 items-center justify-between md:px-12 w-full h-20 flex-0-auto',
    {
      'bg-transparent': isShowPage,
    }
  );

  useEffect(() => {
    if (theme || forcedTheme === 'dark') {
      setLogoSrc('/logo-dark.webp');
    } else {
      setLogoSrc('/logo-white.webp');
    }
  }, [theme, forcedTheme]);

  return (
    <header className={headerClasses}>
      <div className='flex cursor-pointer items-center gap-4 md:gap-10'>
        <Device desktop>
          <>
            <Link href='/' className='flex items-center'>
              <ImageWithFallback
                src={logoSrc}
                priority
                alt='logo'
                width={48}
                height={48}
                title='To home page'
              />
            </Link>
            <HeaderMenu />
          </>
        </Device>
        <Device mobile>
          <Suspense fallback={null}>
            <MobileNav />
          </Suspense>
        </Device>
      </div>
      <div className='flex items-center'>
        {isShowPage ? null : <SwitchButton />}
      </div>
    </header>
  );
};

export default MainHeader;
