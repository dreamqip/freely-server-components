import type { FC } from 'react';
import { LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/utilities/loadAnimationFeatures';
import NavigationItem from '@/components/Header/NavigationItem';
import { sidebarUlVariants } from '@/utilities/animationVariants';
import ActiveLink from '@/components/ActiveLink';
import {
  FilmIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { memo } from 'react';

interface Props {
  isOpen: boolean;
}

const Navigation: FC<Props> = ({ isOpen }) => {
  const ulClasses = classNames('relative h-full w-full px-4 pt-20', {
    'pointer-events-none': !isOpen,
    'pointer-events-auto': isOpen,
  });

  return (
    <LazyMotion features={loadFeatures}>
      <m.ul variants={sidebarUlVariants} className={ulClasses}>
        <NavigationItem>
          <span className='link'>
            <ActiveLink
              href='/'
              className='flex items-center p-2 text-white no-underline dark:text-black md:p-5'
              activeClassName='active'
            >
              <>
                <span className='relative flex'>
                  <HomeIcon className='h-6 w-6 md:mr-2' />
                </span>
                <p className='link-name relative text-sm'>Home</p>
              </>
            </ActiveLink>
          </span>
        </NavigationItem>
        <NavigationItem>
          <span className='link'>
            <ActiveLink
              href='/search'
              activeClassName='active'
              className='flex items-center p-2 text-white no-underline dark:text-black md:p-5'
            >
              <>
                <span className='relative flex'>
                  <MagnifyingGlassIcon className='h-6 w-6 md:mr-2' />
                </span>
                <p className='link-name relative text-sm'>Search</p>
              </>
            </ActiveLink>
          </span>
        </NavigationItem>
        <NavigationItem>
          <span className='link'>
            <ActiveLink
              href='/movies'
              activeClassName='active'
              className='flex items-center p-2 text-white no-underline dark:text-black md:p-5'
            >
              <>
                <span className='relative flex'>
                  <FilmIcon className='h-6 w-6 md:mr-2' />
                </span>
                <p className='link-name relative text-sm'>Movies</p>
              </>
            </ActiveLink>
          </span>
        </NavigationItem>
        <NavigationItem>
          <span className='link'>
            <ActiveLink
              href='/series'
              activeClassName='active'
              className='flex items-center p-2 text-white no-underline dark:text-black md:p-5'
            >
              <>
                <span className='relative flex'>
                  <VideoCameraIcon className='h-6 w-6 md:mr-2' />
                </span>
                <p className='link-name relative text-sm'>Series</p>
              </>
            </ActiveLink>
          </span>
        </NavigationItem>
      </m.ul>
    </LazyMotion>
  );
};

export default memo(Navigation);
