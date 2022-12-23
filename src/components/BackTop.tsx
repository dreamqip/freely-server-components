import { FC, useState } from 'react';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import useEventListener from '@/hooks/useEventListener';
import { loadFeatures } from '@/utilities/loadAnimationFeatures';
import { backToTopVariants } from '@/utilities/animationVariants';

const BackTop: FC = () => {
  const [show, setShow] = useState(false);

  useEventListener('scroll', () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <LazyMotion features={loadFeatures}>
          <m.button
            key='back-top'
            variants={backToTopVariants}
            className='fixed bottom-4 right-4 z-50 rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-400'
            initial='hidden'
            animate='visible'
            exit='hidden'
            onClick={handleClick}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 10l7-7m0 0l7 7m-7-7v18'
              />
            </svg>
          </m.button>
        </LazyMotion>
      )}
    </AnimatePresence>
  );
};

export default BackTop;
