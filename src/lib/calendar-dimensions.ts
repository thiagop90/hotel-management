import type { Reservation, RoomType } from '@/types/hotel-calendar'

export const CELL_WIDTH = 36
export const CELL_GAP = 4
export const PADDING_X = 20

export const HEADER_HEIGHT = 44
export const ROOM_HEIGHT = 36

// Calcula a posição horizontal (left) no grid para um dado índice de dia
export function calculateGridLeftPosition(dayIndex: number) {
  const offset = dayIndex + 0.5
  return offset * CELL_WIDTH + offset * CELL_GAP + PADDING_X
}

// Calcula a largura total do grid para dado número de dias
export function calculateGridWidth(daysCount: number): number {
  return PADDING_X * 2 + CELL_WIDTH * daysCount + CELL_GAP * (daysCount - 1)
}

//  Calcula a altura total do grid dado o array de RoomTypes e seus quartos
export function calculateTotalGridHeight(rooms: RoomType[]) {
  return rooms.reduce(
    (total, roomType) =>
      total + HEADER_HEIGHT + roomType.rooms.length * ROOM_HEIGHT,
    0,
  )
}

// Calcula o offset vertical (top) para uma reserva, baseado na posição do quarto dentro das roomTypes

export function getReservationYOffset(
  reservation: Reservation,
  rooms: RoomType[],
): number | null {
  const roomTypeIndex = rooms.findIndex((type) =>
    type.rooms.some((room) => room.id === reservation.roomId),
  )

  if (roomTypeIndex === -1) return null

  const roomType = rooms[roomTypeIndex]
  const roomIndex = roomType.rooms.findIndex((r) => r.id === reservation.roomId)

  const previousRoomsCount = rooms
    .slice(0, roomTypeIndex)
    .reduce((sum, rt) => sum + rt.rooms.length, 0)

  return (
    (roomTypeIndex + 1) * HEADER_HEIGHT +
    (previousRoomsCount + roomIndex) * ROOM_HEIGHT
  )
}
