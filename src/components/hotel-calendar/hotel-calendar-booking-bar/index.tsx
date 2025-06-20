'use client'

import type React from 'react'
import { useRef, useState } from 'react'
import dayjs from 'dayjs'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'motion/react'

import {
  calculateGridLeftPosition,
  calculateGridWidth,
  ROOM_HEIGHT,
} from '@/lib/calendar-dimensions'

import { typeColors, type Reservation } from '@/types/hotel-calendar'
import { BookingBarResizeHandle } from './booking-bar-resize-handle'
import { BookingBarCard } from './booking-bar-card'
import { BookingBarDialog } from './booking-bar-dialog'
import { useBookingBarInteractions } from '@/hooks/use-booking-bar-interactions'
import { ScrollArea } from '@/components/ui/scroll-area'
import { bookingBarVariants, guestNameVariants } from '@/animations/variants'

interface BookingBarProps {
  booking: Reservation
  currentDate: dayjs.Dayjs
  yOffset: number
  type: 'standard' | 'deluxe'
  maxHeight: number
}

export function HotelCalendarBookingBar({
  booking,
  currentDate,
  yOffset,
  type,
  maxHeight,
}: BookingBarProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const barRef = useRef<HTMLAnchorElement>(null)

  // Hook que gerencia o movimento e redimensionamento da barra
  const { delta, getResizeHandler, handleMove, wasDraggingRef } =
    useBookingBarInteractions({
      yOffset,
      maxHeight,
    })

  const start = dayjs(booking.startDate).diff(currentDate, 'day')
  const end = dayjs(booking.endDate).subtract(1, 'day').diff(currentDate, 'day')

  const adjustedStart = Math.max(start, -0.5)
  let adjustedEnd = Math.min(end, currentDate.daysInMonth() - 1.5)
  if (adjustedEnd === -1) adjustedEnd = -1

  const totalDays = adjustedEnd - adjustedStart + delta.right + delta.left

  // Posição e dimensões da barra no calendário
  const left = calculateGridLeftPosition(adjustedStart - delta.left + delta.x)
  const width = calculateGridWidth(totalDays)

  const styles = {
    left: `${left}px`,
    width: `${width}px`,
    top: `${yOffset + delta.y * ROOM_HEIGHT}px`,
  }

  // Função que evita abertura de Dialog quando o clique foi precedido por movimento (drag/resize).
  function handleClick(e: React.MouseEvent) {
    if (wasDraggingRef.current) {
      e.preventDefault()
      e.stopPropagation()
      wasDraggingRef.current = false
      return
    }
    setIsDialogOpen(true)
  }

  const guestNameWidth = booking.guestName.length * 8
  const shouldShowOutside = Number.parseFloat(styles.width) < guestNameWidth

  const colors = typeColors[type]

  return (
    <div className="group relative mr-2">
      <HoverCard openDelay={200} closeDelay={200}>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <HoverCardTrigger
              ref={barRef}
              className="absolute flex h-9 py-0.5 transition-all"
              style={styles}
              onClick={handleClick}
            >
              {/* Redimensionar esquerda */}
              <BookingBarResizeHandle
                side="left"
                onMouseDown={getResizeHandler('left')}
                color={colors.primary}
              />

              {/* Conteúdo da barra */}
              <motion.div
                variants={bookingBarVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                onMouseDown={handleMove}
                className="flex size-full cursor-pointer items-center rounded-sm px-2 text-xs font-medium whitespace-nowrap"
                style={{
                  backgroundColor: colors.secondary,
                  borderLeft: `4px solid ${colors.primary}`,
                }}
              >
                {!shouldShowOutside && (
                  <motion.span
                    variants={guestNameVariants}
                    initial="hidden"
                    animate="visible"
                    className="truncate"
                  >
                    {booking.guestName}
                  </motion.span>
                )}
              </motion.div>

              {/* Nome fora da barra se não couber */}
              {shouldShowOutside && (
                <motion.span
                  variants={guestNameVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute top-1/2 left-full ml-2 -translate-y-1/2 text-xs font-medium whitespace-nowrap"
                >
                  {booking.guestName}
                </motion.span>
              )}

              {/* Redimensionar direita */}
              <BookingBarResizeHandle
                side="right"
                onMouseDown={getResizeHandler('right')}
                color={colors.primary}
              />
            </HoverCardTrigger>
          </DialogTrigger>

          <HoverCardContent className="border-none bg-transparent p-0 shadow-none">
            <BookingBarCard booking={booking} type={type} />
          </HoverCardContent>

          <DialogContent
            showCloseButton={false}
            className="bg-secondary h-full max-h-[80vh] max-w-md overflow-hidden rounded-3xl p-0 shadow-sm"
          >
            <ScrollArea className="overflow-hidden px-2">
              <BookingBarDialog booking={booking} />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </HoverCard>
    </div>
  )
}
