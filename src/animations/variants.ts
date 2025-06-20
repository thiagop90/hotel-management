import { Variants } from 'motion/react'

export const bookingBarVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    horizOriginX: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const guestNameVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
}

// export const reservationLineVariants: Variants = {
//   hidden: {
//     scaleY: 0,
//     opacity: 0,
//   },
//   visible: {
//     scaleY: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       delay: 0.5,
//       ease: [0.25, 0.46, 0.45, 0.94],
//     },
//   },
// }

// export const reservationDotVariants: Variants = {
//   hidden: {
//     scale: 0,
//     opacity: 0,
//   },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       delay: 0.8,
//       ease: 'backOut',
//     },
//   },
// }

// export const tooltipVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 10,
//     scale: 0.9,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.3,
//       delay: 1,
//       ease: 'easeOut',
//     },
//   },
// }
