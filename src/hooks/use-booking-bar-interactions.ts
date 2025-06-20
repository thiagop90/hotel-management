import { useRef, useState } from 'react'
import { CELL_WIDTH, CELL_GAP, ROOM_HEIGHT } from '@/lib/calendar-dimensions'

interface UseBookingBarInteractionsProps {
  yOffset: number
  maxHeight: number
}

export function useBookingBarInteractions({
  yOffset,
  maxHeight,
}: UseBookingBarInteractionsProps) {
  const [delta, setDelta] = useState({ left: 0, right: 0, x: 0, y: 0 })
  const wasDraggingRef = useRef(false)

  // Handler para mover (drag) a barra de reserva.
  const handleMove = (e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX
    const startY = e.clientY
    const startTop = yOffset

    const handleMouseMove = (moveEvent: MouseEvent) => {
      // Calcula deslocamento horizontal e vertical baseado na célula
      const deltaX = Math.round(
        (moveEvent.clientX - startX) / (CELL_WIDTH + CELL_GAP),
      )
      const deltaY = Math.round((moveEvent.clientY - startY) / ROOM_HEIGHT)

      if (deltaX !== 0 || deltaY !== 0) wasDraggingRef.current = true

      // Calcula nova posição vertical
      const MIN_TOP = 44
      const newTop = startTop + deltaY * ROOM_HEIGHT

      // Garante que está dentro do limite de altura
      if (newTop >= MIN_TOP && newTop + ROOM_HEIGHT <= maxHeight) {
        setDelta((prev) => ({ ...prev, x: deltaX, y: deltaY }))
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  // Handler para redimensionamento da barra de reserva
  const getResizeHandler =
    (side: 'left' | 'right') => (e: React.MouseEvent) => {
      e.preventDefault()
      const startX = e.clientX

      const handleMouseMove = (moveEvent: MouseEvent) => {
        // Quantidade de células movimentadas horizontalmente
        const deltaX = Math.round(
          (moveEvent.clientX - startX) / (CELL_WIDTH + CELL_GAP),
        )

        if (deltaX !== 0) wasDraggingRef.current = true

        // Atualiza o delta conforme o lado redimensionado
        setDelta((prev) => ({
          ...prev,
          [side]: Math.max(0, side === 'left' ? -deltaX : deltaX),
        }))
      }

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

  return {
    delta,
    handleMove,
    getResizeHandler,
    wasDraggingRef,
  }
}
