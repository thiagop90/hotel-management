import { motion } from 'motion/react'

export function HotelCalendarHeader() {
  const dates = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  )

  return (
    <div className="relative flex-1 space-y-2 border-b px-5 pt-3.5 pb-2">
      <p className="font-semibold uppercase">August 2023</p>
      <div className="flex gap-1">
        {dates.map((date, index) => (
          <motion.div
            key={date}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.02,
              ease: 'easeOut',
            }}
            className="bg-secondary flex h-7 w-9 items-center justify-center rounded-sm text-xs font-semibold"
          >
            {date}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
