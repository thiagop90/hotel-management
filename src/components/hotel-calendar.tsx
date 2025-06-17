import { CalendarDays, ChevronsLeftRight, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'

interface Booking {
  room: string
  guest: string
  start: number
  duration: number
}

interface Room {
  id: string
  name: string
}

interface Reservations {
  day: number
  qtd: number
}

interface HotelCalendarProps {
  rooms: Room[]
  bookings: Booking[]
  reservations?: Reservations
  type?: 'standard' | 'deluxe'
}

const typeColors: Record<
  'standard' | 'deluxe',
  { primary: string; secondary: string }
> = {
  standard: {
    primary: '#BC96FE',
    secondary: '#EDE4FE',
  },
  deluxe: {
    primary: '#92BAB4',
    secondary: '#D5F0EE',
  },
}
export function HotelCalendar({
  rooms,
  bookings,
  reservations,
  type = 'standard',
}: HotelCalendarProps) {
  const dates = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  )

  const PADDING_LEFT = 20
  const BUTTON_WIDTH = 36
  const BUTTON_GAP = 4
  const BUTTON_TOTAL_WIDTH = BUTTON_WIDTH + BUTTON_GAP

  const colors = typeColors[type]

  return (
    <div className="relative w-full overflow-x-clip overflow-y-visible rounded-md border">
      <div className="flex">
        <div className="min-w-64 space-y-2.5 border-r border-b px-5 pt-3.5 pb-1.5">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-muted-foreground h-7 flex-1 justify-start gap-2.5 rounded-sm"
            >
              <CalendarDays />
              Full month
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="text-muted-foreground size-7 rounded-sm"
            >
              <ChevronsLeftRight />
            </Button>
          </div>
          <span className="text-muted-foreground text-sm font-medium uppercase">
            All Rooms
          </span>
        </div>

        <div className="relative flex-1 space-y-2 border-b px-5 pt-3.5 pb-1.5">
          <p className="font-semibold uppercase">August 2023</p>
          <div className="flex gap-1">
            {dates.map((date) => (
              <div
                key={date}
                className="bg-secondary flex h-7 w-9 items-center justify-center rounded-sm text-xs font-semibold"
              >
                {date}
              </div>
            ))}
          </div>

          {reservations && (
            <div
              className="absolute top-3 z-20 rounded-sm bg-black px-2.5 py-2 text-xs text-white"
              style={{
                left: `${PADDING_LEFT + (reservations.day - 1) * BUTTON_TOTAL_WIDTH + BUTTON_WIDTH}px`,
                transform: 'translateX(-50%)',
              }}
            >
              {reservations.qtd} <span className="text-[#CDCDCD]">Booked</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="min-w-64 border-r">
          <div className="flex h-11 items-center border-b px-5 py-2.5">
            <div
              className="size-3.5 rounded bg-[#BC96FE]"
              style={{
                backgroundColor: colors.primary,
              }}
            ></div>
            <span className="ml-2 font-semibold uppercase">{type} Rooms</span>
            <ChevronUp className="ml-3 size-5" />
          </div>

          <div className="divide-y">
            {rooms.map((room) => (
              <div key={room.id} className="h-10 py-2 pl-[42px]">
                <span className="text-sm font-semibold">{room.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 pt-[43px]">
          {rooms.map((room) => (
            <div key={room.id} className="divide-y">
              <div className="relative flex h-10 first:border-t">
                {bookings
                  .filter((booking) => booking.room === room.name)
                  .map((booking, bookingIndex) => {
                    const leftPosition =
                      PADDING_LEFT + (booking.start - 1) * BUTTON_TOTAL_WIDTH
                    const barWidth =
                      booking.duration * BUTTON_TOTAL_WIDTH - BUTTON_GAP
                    const nameLength = booking.guest.length
                    const shouldShowNameOutside = barWidth < nameLength * 8

                    return (
                      <div key={bookingIndex}>
                        <div
                          className="absolute inset-y-0.5 flex items-center overflow-hidden rounded-sm"
                          style={{
                            left: `${leftPosition}px`,
                            width: `${barWidth}px`,
                            backgroundColor: colors.secondary,
                            borderLeft: booking.start
                              ? `4px solid ${colors.primary}`
                              : '',
                          }}
                        >
                          {!shouldShowNameOutside && (
                            <span className="ml-3 truncate text-xs font-semibold">
                              {booking.guest}
                            </span>
                          )}
                        </div>

                        {shouldShowNameOutside && (
                          <span
                            className="absolute top-1.5 flex h-8 items-center text-xs font-semibold whitespace-nowrap"
                            style={{
                              left: `${leftPosition + barWidth + 8}px`,
                            }}
                          >
                            {booking.guest}
                          </span>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}

          {reservations && (
            <div
              className="absolute top-0 bottom-0 z-10 w-[3px] bg-blue-500"
              style={{
                left: `${PADDING_LEFT + (reservations.day - 1) * BUTTON_TOTAL_WIDTH + BUTTON_WIDTH / 2}px`,
              }}
            >
              <div className="absolute -top-1.5 -left-[5px] size-3 rounded-full bg-blue-500"></div>

              <div className="absolute -bottom-1.5 -left-[5px] size-3 rounded-full bg-blue-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
