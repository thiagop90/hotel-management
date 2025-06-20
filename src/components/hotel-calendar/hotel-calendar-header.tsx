import { motion } from 'motion/react'
import dayjs from 'dayjs'
import { cn } from '@/lib/utils'
import { calculateGridWidth } from '@/lib/calendar-dimensions'
import { typeColors } from '@/types/hotel-calendar'

interface HotelCalendarHeaderProps {
  isDragging: boolean
  type: 'standard' | 'deluxe'
}

export function HotelCalendarHeader({
  ref,
  isDragging,
  type,
  ...props
}: React.ComponentProps<'div'> & HotelCalendarHeaderProps) {
  const currentDate = dayjs().startOf('month')
  const daysCount = currentDate.daysInMonth()
  const today = dayjs().startOf('day')

  const gridWidth = calculateGridWidth(daysCount)

  const colors = typeColors[type]

  return (
    <div
      ref={ref}
      className={cn(
        'bg-background sticky top-0 z-10 overflow-hidden border-b select-none',
        isDragging ? 'cursor-grabbing' : 'cursor-grab',
      )}
      {...props}
    >
      <div
        className="flex flex-col gap-2 px-5 pt-3.5 pb-2"
        style={{ width: `${gridWidth}px` }}
      >
        <p className="font-semibold uppercase">
          {currentDate.format('MMMM YYYY')}
        </p>
        <div className="flex gap-1">
          {Array.from({ length: daysCount }).map((_, i) => {
            const date = currentDate.add(i, 'day')
            const isToday = date.isSame(today, 'day')
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.02,
                  ease: 'easeOut',
                }}
                className="bg-secondary flex h-7 w-9 flex-shrink-0 items-center justify-center rounded-sm text-xs font-semibold"
                style={{
                  backgroundColor: isToday ? colors.primary : '',
                  color: isToday ? 'white' : '',
                }}
              >
                {date.format('DD')}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
