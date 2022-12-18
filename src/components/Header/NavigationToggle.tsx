import type { FC, RefAttributes } from 'react';
import { m, LazyMotion, SVGMotionProps } from 'framer-motion';
import { loadFeatures } from '@/utilities/loadAnimationFeatures';
import { memo } from 'react';

interface Props {
  toggle: () => void;
}

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <LazyMotion features={loadFeatures}>
    <m.path
      fill='transparent'
      strokeWidth='3'
      className='stroke-white dark:stroke-black'
      strokeLinecap='round'
      {...props}
    />
  </LazyMotion>
);

export const NavigationToggle: FC<Props> = ({ toggle }) => (
  <button
    onClick={toggle}
    className='pointer-events-auto absolute top-[30px] left-[28px] z-50 flex cursor-pointer items-center justify-center rounded-[50%] bg-transparent'
  >
    <svg width='23' height='23' viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

export default memo(NavigationToggle);
