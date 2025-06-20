'use client'

import { HotelCalendarProps } from '@/types/hotel-calendar'
import { HotelCalendarSidebar } from './hotel-calendar-sidebar'
import { HotelCalendarHeader } from './hotel-calendar-header'
import { HotelCalendarBookingGrid } from './hotel-calendar-booking-grid'
import { useRef } from 'react'
import { useSyncScroll } from '@/hooks/use-sync-scroll'
import { useDragToScroll } from '@/hooks/use-drag-to-scroll'

export function HotelCalendar({
  rooms,
  reservations,
  type,
}: HotelCalendarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bookingRef = useRef<HTMLDivElement>(null)

  useSyncScroll(headerRef, sidebarRef, contentRef)

  const { isDragging } = useDragToScroll(
    contentRef,
    sidebarRef,
    headerRef,
    bookingRef,
  )

  return (
    <div className="relative flex max-h-[344px] w-full max-w-fit overflow-hidden rounded-lg border">
      <HotelCalendarSidebar
        rooms={rooms}
        ref={sidebarRef}
        isDragging={isDragging}
        type={type}
      />

      <div className="relative flex-1 overflow-hidden">
        <HotelCalendarHeader
          ref={headerRef}
          isDragging={isDragging}
          type={type}
        />

        <HotelCalendarBookingGrid
          ref={{
            contentRef,
            bookingRef,
          }}
          rooms={rooms}
          reservations={reservations}
          isDragging={isDragging}
          type={type}
        />
      </div>
    </div>
  )
}
