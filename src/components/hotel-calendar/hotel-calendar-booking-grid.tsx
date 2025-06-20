import type { RefObject } from 'react'
import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import {
  calculateGridWidth,
  calculateTotalGridHeight,
  getReservationYOffset,
} from '@/lib/calendar-dimensions'
import { HotelCalendarBookingBar } from './hotel-calendar-booking-bar'
import { useCalendarFilterStore } from '@/store/hotel-calendar-store'

import type { Reservation, RoomType } from '@/types/hotel-calendar'

interface HotelCalendarBookingGridProps {
  ref: {
    contentRef: RefObject<HTMLDivElement | null>
    bookingRef: RefObject<HTMLDivElement | null>
  }
  rooms: RoomType[]
  reservations: Reservation[]
  isDragging: boolean
  type: 'standard' | 'deluxe'
}

export function HotelCalendarBookingGrid({
  rooms,
  reservations,
  isDragging,
  ref: { contentRef, bookingRef },
  type,
}: HotelCalendarBookingGridProps) {
  const currentDate = dayjs().startOf('month')
  const totalDays = currentDate.daysInMonth()

  const { status } = useCalendarFilterStore()

  const gridWidth = calculateGridWidth(totalDays)
  const gridHeight = calculateTotalGridHeight(rooms)

  const filteredReservations = reservations.filter((r) =>
    status === 'all' ? true : r.status === status,
  )

  return (
    <div
      ref={contentRef}
      className={cn(
        'scrollbar-custom absolute inset-0 top-[83px] overflow-auto select-none',
        isDragging ? 'cursor-grabbing' : 'cursor-grab',
      )}
    >
      <div
        className="relative"
        style={{ width: gridWidth, height: gridHeight }}
      >
        {/* Linhas do fundo */}
        {rooms.map((roomType) => (
          <div key={roomType.id} className="divide-y">
            {/* Espaço dedicado para preços */}
            <div className="relative h-11 w-full" />
            {/* Espaço dedicado para preços */}

            {roomType.rooms.map((room) => (
              <div key={room.id} className="h-9 w-full" />
            ))}
          </div>
        ))}

        {/* Reservas renderizadas */}
        <div
          className="pointer-events-none absolute top-0 left-0"
          ref={bookingRef}
        >
          {filteredReservations.map((reservation) => {
            const yOffset = getReservationYOffset(reservation, rooms)
            if (yOffset === null) return null

            return (
              <div key={reservation.id} className="pointer-events-auto">
                <HotelCalendarBookingBar
                  booking={reservation}
                  currentDate={currentDate}
                  yOffset={yOffset}
                  type={type}
                  maxHeight={gridHeight}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
