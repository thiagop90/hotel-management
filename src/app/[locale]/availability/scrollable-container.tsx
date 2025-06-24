'use client'

import { useRef, useState } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface ScrollableContainerProps {
  children: ReactNode
  className?: string
}

export function ScrollableContainer({
  children,
  className,
}: ScrollableContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [drag, setDrag] = useState<{ startX: number; scrollX: number } | null>(
    null,
  )

  function onMouseDown(e: MouseEvent) {
    if (!ref.current) return
    setDrag({ startX: e.pageX, scrollX: ref.current.scrollLeft })
  }

  function onMouseMove(e: MouseEvent) {
    if (!ref.current || !drag) return
    ref.current.scrollLeft = drag.scrollX - (e.pageX - drag.startX)
  }

  function endDrag() {
    setDrag(null)
  }

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      className={cn(
        'scrollbar-custom overflow-auto select-none',
        drag ? 'cursor-grabbing' : 'cursor-grab',
        className,
      )}
    >
      {children}
    </div>
  )
}
