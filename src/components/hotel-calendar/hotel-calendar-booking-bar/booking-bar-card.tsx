import { cn } from '@/lib/utils'
import type { Reservation } from '@/types/hotel-calendar'
import dayjs from 'dayjs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface BookingBarCardProps {
  booking: Reservation
  type: 'standard' | 'deluxe'
}

export function BookingBarCard({ booking, type }: BookingBarCardProps) {
  const startDate = dayjs(booking.startDate)
  const endDate = dayjs(booking.endDate)

  return (
    <div className="bg-secondary rounded-2xl border p-1 shadow-sm">
      <div className="bg-background rounded-xl border p-3">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold">{booking.guestName}</p>

          <Badge
            className={cn(
              type === 'standard' ? 'bg-lavender-primary' : 'bg-teal-muted',
            )}
          >
            {booking.status}
          </Badge>
        </div>

        <div className="bg-secondary grid grid-cols-[1fr_auto_1fr] rounded-lg px-4 py-3 text-xs">
          <div className="space-y-1.5 text-left">
            <p className="font-semibold">Check-in</p>

            <div className="space-y-0.5">
              <p className="">{startDate.format('ddd, MMM D')}</p>
              <p className="text-muted-foreground">
                {startDate.format('h:mm A')}
              </p>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="space-y-1 text-right">
            <p className="font-semibold">Checkout</p>

            <div className="space-y-0.5">
              <p>{endDate.format('ddd, MMM D')}</p>
              <p className="text-muted-foreground">
                {endDate.format('h:mm A')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
