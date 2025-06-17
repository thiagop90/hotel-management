import { AnimatePresence } from 'framer-motion'
import {
  Room,
  Booking,
  typeColors,
  type Reservations,
} from '@/types/hotel-calendar'
import { HotelCalendarBookingBar } from './hotel-calendar-booking-bar'
import { HotelCalendarReservationLine } from './hotel-calendar-reservation-line'

interface HotelCalendarBookingGridProps {
  rooms: Room[]
  bookings: Booking[]
  type: 'standard' | 'deluxe'
  reservations: Reservations
}

export function HotelCalendarBookingGrid({
  rooms,
  bookings,
  type,
  reservations,
}: HotelCalendarBookingGridProps) {
  const colors = typeColors[type]

  return (
    <div className="relative flex-1 pt-[43px]">
      {rooms.map((room) => (
        <div key={room.id} className="divide-y">
          <div className="relative flex h-9 first:border-t">
            <AnimatePresence>
              {bookings
                .filter((booking) => booking.room === room.name)
                .map((booking, bookingIndex) => (
                  <HotelCalendarBookingBar
                    key={`${room.id}-${bookingIndex}`}
                    booking={booking}
                    colors={colors}
                  />
                ))}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {reservations && (
        <HotelCalendarReservationLine reservations={reservations} />
      )}
    </div>
  )
}
