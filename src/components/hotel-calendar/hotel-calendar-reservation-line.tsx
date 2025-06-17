import { motion, AnimatePresence } from 'motion/react'
import { Reservations } from '@/types/hotel-calendar'
import {
  reservationLineVariants,
  reservationDotVariants,
  tooltipVariants,
} from '@/animations/variants'
import {
  BUTTON_TOTAL_WIDTH,
  BUTTON_WIDTH,
  PADDING_LEFT,
} from '@/constants/calendar-sizes'

interface HotelCalendarReservationLineProps {
  reservations: Reservations
}

export function HotelCalendarReservationLine({
  reservations,
}: HotelCalendarReservationLineProps) {
  return (
    <AnimatePresence>
      <>
        <motion.div
          variants={reservationLineVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-0 bottom-0 z-10 w-[3px] bg-[#2679FF]"
          style={{
            left: `${PADDING_LEFT + (reservations.day - 1) * BUTTON_TOTAL_WIDTH + BUTTON_WIDTH / 2}px`,
            originY: 0.5,
          }}
        >
          <motion.div
            variants={reservationDotVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-1.5 -left-[5px] size-3 rounded-full bg-[#2679FF]"
          />

          <motion.div
            variants={reservationDotVariants}
            initial="hidden"
            animate="visible"
            className="absolute -bottom-1.5 -left-[5px] size-3 rounded-full bg-[#2679FF]"
          />
        </motion.div>

        <motion.div
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute -top-[70px] z-20 inline-flex gap-1 rounded-md bg-black px-2.5 py-2 text-xs text-white"
          style={{
            left: `${PADDING_LEFT + (reservations.day - 1) * BUTTON_TOTAL_WIDTH}px`,
            transform: 'translateX(-50%)',
          }}
        >
          {reservations.qtd} <span className="text-[#CDCDCD]">Booked</span>
        </motion.div>
      </>
    </AnimatePresence>
  )
}
