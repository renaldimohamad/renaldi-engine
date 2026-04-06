/**
 * Reusable Framer Motion Animation Variants
 * Premium, smooth animations for the portfolio
 */

import { easeOut, easeInOut, easeIn } from "framer-motion";

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

/**
 * Stagger Container for Sequential Child Animations
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/**
 * Stagger Item for Use Inside Container
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/**
 * Button Hover Animation
 */
export const buttonHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: easeOut },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1 },
  },
};

/**
 * Card Hover Animation (Projects, Skills, etc)
 */
export const cardHover = {
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
    transition: { duration: 0.3, ease: easeOut },
  },
};

/**
 * Subtle Pulse Animation (for badges, highlights)
 */
export const pulse = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

/**
 * Floating Animation (subtle up and down)
 */
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

/**
 * Blur and Fade In - for backdrop or loading states
 */
export const blurFadeIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOut },
  },
};

/**
 * Slide and Fade In from Left
 */
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/**
 * Slide and Fade In from Right
 */
export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/**
 * Rotate and Fade In
 */
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/**
 * Viewport animations - use with whileInView
 */
export const viewportOnce = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.3,
};

/**
 * Link Underline Animation
 */
export const underlineHover = {
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
};

/**
 * Navbar Scroll Animation
 */
export const navbarVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/**
 * Hero Title Word Animation
 */
export const heroTitle = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const heroTitleWord = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/**
 * Section Title Animation
 */
export const sectionTitle = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/**
 * Icon Rotation Animation
 */
export const iconRotate = {
  hover: {
    rotate: 10,
    transition: { duration: 0.3, ease: easeOut },
  },
};

/**
 * Smooth Background Opacity Change (Theme Toggle)
 */
export const themeTransition = {
  transition: { duration: 0.3, ease: easeInOut },
};
