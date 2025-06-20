'use client'

import type React from 'react'

import { cn } from '@/lib/utils'

interface BookingBarResizeHandleProps {
  side: 'left' | 'right'
  onMouseDown: (e: React.MouseEvent) => void
  color: string
}

export function BookingBarResizeHandle({
  side,
  onMouseDown,
  color,
}: BookingBarResizeHandleProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      className={cn(
        'absolute inset-y-0.5 z-10 w-1.5 cursor-ew-resize rounded-sm opacity-0 transition-opacity group-hover:opacity-100',
        side === 'left' ? 'left-0' : 'right-0',
      )}
      style={{ backgroundColor: color }}
    />
  )
}
