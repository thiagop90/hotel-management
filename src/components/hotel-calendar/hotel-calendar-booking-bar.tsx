import { motion } from 'motion/react'
import { Booking } from '@/types/hotel-calendar'
import { bookingBarVariants, guestNameVariants } from '@/animations/variants'
import {
  BUTTON_GAP,
  BUTTON_TOTAL_WIDTH,
  PADDING_LEFT,
} from '@/constants/calendar-sizes'

interface HotelCalendarBookingBarProps {
  booking: Booking
  colors: { primary: string; secondary: string }
}

export function HotelCalendarBookingBar({
  booking,
  colors,
}: HotelCalendarBookingBarProps) {
  const leftPosition = PADDING_LEFT + (booking.start - 1) * BUTTON_TOTAL_WIDTH
  const barWidth = booking.duration * BUTTON_TOTAL_WIDTH - BUTTON_GAP
  const nameLength = booking.guest.length
  const shouldShowNameOutside = barWidth < nameLength * 8

  return (
    <>
      <motion.div
        variants={bookingBarVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        className="absolute inset-y-0.5 flex cursor-pointer items-center overflow-hidden rounded-sm"
        style={{
          left: `${leftPosition}px`,
          width: `${barWidth}px`,
          backgroundColor: colors.secondary,
          borderLeft: booking.start ? `4px solid ${colors.primary}` : '',
        }}
      >
        {!shouldShowNameOutside && (
          <motion.span
            variants={guestNameVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="ml-3 truncate text-xs font-medium"
          >
            {booking.guest}
          </motion.span>
        )}
      </motion.div>

      {shouldShowNameOutside && (
        <motion.span
          variants={guestNameVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1 flex h-8 items-center text-xs font-medium whitespace-nowrap"
          style={{
            left: `${leftPosition + barWidth + 8}px`,
          }}
        >
          {booking.guest}
        </motion.span>
      )}
    </>
  )
}
