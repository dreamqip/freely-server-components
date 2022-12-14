import type { Variants } from 'framer-motion';

export const animationVariants: Variants = {
  visible: { opacity: 1, transition: { duration: 1.25, ease: 'easeInOut' } },
  hidden: { opacity: 0 },
};
