import { ChevronUp } from 'lucide-react'
import { motion } from 'motion/react'
import { Room, typeColors } from '@/types/hotel-calendar'

interface HotelCalendarRoomsListProps {
  rooms: Room[]
  type: 'standard' | 'deluxe'
}

export function HotelCalendarRoomsList({
  rooms,
  type,
}: HotelCalendarRoomsListProps) {
  const colors = typeColors[type]

  return (
    <div className="min-w-64 border-r">
      <div className="flex h-11 items-center border-b px-5 py-2.5">
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
        <span className="ml-2 font-semibold uppercase">{type} Rooms</span>
        <ChevronUp className="ml-3 h-5 w-5" />
      </div>

      <div className="divide-y">
        {rooms.map((room, index) => (
          <div className="h-9 py-2 pl-[42px]" key={room.id}>
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
    </div>
  )
}
