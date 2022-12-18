import { FC, useCallback, useEffect, useRef } from 'react';
import { LazyMotion, m, useCycle } from 'framer-motion';
import { loadFeatures } from '@/utilities/loadAnimationFeatures';
import useWindowSize from '@/hooks/useWindowSize';
import { sidebarVariants } from '@/utilities/animationVariants';
import Navigation from '@/components/Header/Navigation';
import NavigationToggle from '@/components/Header/NavigationToggle';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const MobileNav: FC = () => {
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement | null>(null);
  const { height } = useWindowSize();

  const handleToggle = () => {
    toggleOpen();
    if (containerRef.current && !isOpen) {
      disableBodyScroll(containerRef.current);
    }
    if (containerRef.current && isOpen) {
      enableBodyScroll(containerRef.current);
    }
  };

  const handleOutsideClick = useCallback(() => {
    if (isOpen && containerRef.current) {
      console.log('outside click');
      toggleOpen();
      enableBodyScroll(containerRef.current);
    }
  }, [isOpen, toggleOpen]);

  useOnClickOutside(containerRef, handleOutsideClick);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleOutsideClick);

    return () => {
      router.events.off('routeChangeComplete', handleOutsideClick);
    };
  }, [handleOutsideClick, router.events]);

  return (
    <LazyMotion features={loadFeatures}>
      <m.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className='pointer-events-none absolute top-0 left-0 z-40 h-screen w-[300px] overflow-hidden sm:w-[80%]'
      >
        <m.div
          className='absolute inset-0 w-full bg-primary-500 dark:bg-white '
          variants={sidebarVariants}
        />
        <Navigation isOpen={isOpen} />
        <NavigationToggle toggle={handleToggle} />
      </m.nav>
    </LazyMotion>
  );
};

export default MobileNav;
