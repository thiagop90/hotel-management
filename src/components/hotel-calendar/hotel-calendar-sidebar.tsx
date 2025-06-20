import { CalendarDays, ChevronsLeftRight, ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { typeColors, type RoomType } from '@/types/hotel-calendar'
import { motion } from 'motion/react'

interface HotelCalendarSidebarProps {
  rooms: RoomType[]
  isDragging: boolean
  type: 'standard' | 'deluxe'
}

export function HotelCalendarSidebar({
  ref,
  rooms,
  isDragging,
  type,
  ...props
}: React.ComponentProps<'div'> & HotelCalendarSidebarProps) {
  const colors = typeColors[type]

  return (
    <div
      className="bg-background sticky top-0 left-0 z-20 flex min-w-64 flex-col border-r"
      {...props}
    >
      <div className="flex flex-col gap-2.5 border-b px-5 pt-3.5 pb-2.5">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="text-muted-foreground h-7 flex-1 justify-start rounded-sm"
          >
            <CalendarDays /> Full month
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="text-muted-foreground h-7 w-7 rounded-sm"
          >
            <ChevronsLeftRight />
          </Button>
        </div>
        <span className="text-muted-foreground text-sm font-medium uppercase">
          All Rooms
        </span>
      </div>

      <div
        ref={ref}
        className={cn(
          'scrollbar-custom overflow-y-auto select-none',
          isDragging ? 'cursor-grabbing' : 'cursor-grab',
        )}
      >
        {rooms.map((roomType) => (
          <div key={roomType.id} className="divide-y">
            <div className="flex h-11 items-center px-5 py-2.5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  ease: 'backOut',
                }}
                className="size-3.5 rounded"
                style={{
                  backgroundColor: colors.primary,
                }}
              />
              <p className="ml-2 font-semibold uppercase">{roomType.name}</p>
              <ChevronUp className="ml-3 h-5 w-5" />
            </div>
            {roomType.rooms.map((room, index) => (
              <div key={room.id} className="h-9 py-2 pl-[42px]">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.3,
                    ease: 'easeOut',
                  }}
                  className="text-sm font-medium"
                >
                  {room.name}
                </motion.p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
