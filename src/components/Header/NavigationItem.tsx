import type { FC, PropsWithChildren } from 'react';
import { LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/utilities/loadAnimationFeatures';
import { sidebarLiVariants } from '@/utilities/animationVariants';

const NavigationItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LazyMotion features={loadFeatures}>
      <m.li
        variants={sidebarLiVariants}
        className='mb-4 flex h-12 w-full items-center justify-center text-black'
      >
        {children}
      </m.li>
    </LazyMotion>
  );
};

export default NavigationItem;
