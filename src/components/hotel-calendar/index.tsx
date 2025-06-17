'use client'

import { HotelCalendarProps } from '@/types/hotel-calendar'
import { HotelCalendarSidebar } from './hotel-calendar-sidebar'
import { HotelCalendarHeader } from './hotel-calendar-header'
import { HotelCalendarRoomsList } from './hotel-calendar-room-list'
import { HotelCalendarBookingGrid } from './hotel-calendar-booking-grid'

export function HotelCalendar({
  rooms,
  bookings,
  reservations,
  type,
}: HotelCalendarProps) {
  return (
    <div className="relative w-full overflow-x-clip overflow-y-visible rounded-md border">
      <div className="flex">
        <HotelCalendarSidebar />
        <HotelCalendarHeader />
      </div>

      <div className="flex">
        <HotelCalendarRoomsList rooms={rooms} type={type} />

        <HotelCalendarBookingGrid
          rooms={rooms}
          bookings={bookings}
          type={type}
          reservations={reservations}
        />
      </div>
    </div>
  )
}
