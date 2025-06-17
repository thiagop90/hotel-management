export interface Booking {
  room: string
  guest: string
  start: number
  duration: number
}

export interface Room {
  id: string
  name: string
}

export interface Reservations {
  day: number
  qtd: number
}

export interface HotelCalendarProps {
  rooms: Room[]
  bookings: Booking[]
  reservations: Reservations
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
