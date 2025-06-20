export type Price = {
  id: number
  start: string
  end: string
  price: number
}

export type Room = {
  id: number
  name: string
  status: string
}

export type RoomType = {
  id: number
  name: string
  rooms: Room[]
  prices: Price[]
}

export type Reservation = {
  id: number
  roomId: number
  startDate: string
  endDate: string
  guestName: string
  status: 'confirmed' | 'checked-in' | 'checked-out'
}

export type HotelCalendarProps = {
  rooms: RoomType[]
  reservations: Reservation[]
  type: 'standard' | 'deluxe'
}

export const typeColors: Record<
  'standard' | 'deluxe',
  { primary: string; secondary: string }
> = {
  standard: {
    primary: '#BC96FE',
    secondary: '#EDE4FE',
  },
  deluxe: {
    primary: '#92BAB4',
    secondary: '#D5F0EE',
  },
}
