import type { Variants } from 'framer-motion';

export const animationVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(24px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const sidebarLiVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const sidebarUlVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const whileInViewportVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 150,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

export const whileInViewportVariants2: Variants = {
  offscreen: {
    opacity: 0,
    x: -150,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.8,
    },
  },
};

export const backToTopVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.8,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.8,
    },
  },
};
