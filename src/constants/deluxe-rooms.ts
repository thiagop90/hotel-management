import type { Reservation, RoomType } from '@/types/hotel-calendar'

export const deluxeReservations: Reservation[] = [
  {
    id: 1,
    roomId: 1,
    startDate: '2025-06-01T12:00:00',
    endDate: '2025-06-06T12:00:00',
    guestName: 'Ahmad Khan',
    status: 'checked-in',
  },
  {
    id: 2,
    roomId: 2,
    startDate: '2025-06-04T12:00:00',
    endDate: '2025-06-05T12:00:00',
    guestName: 'Fatima Mohammed',
    status: 'checked-in',
  },
  {
    id: 3,
    roomId: 3,
    startDate: '2025-06-08T12:00:00',
    endDate: '2025-06-11T12:00:00',
    guestName: 'Trung Phuong An',
    status: 'checked-in',
  },
  {
    id: 4,
    roomId: 4,
    startDate: '2025-06-11T12:00:00',
    endDate: '2025-06-13T12:00:00',
    guestName: 'Shakia Gbeho',
    status: 'checked-out',
  },
  {
    id: 5,
    roomId: 5,
    startDate: '2025-06-13T12:00:00',
    endDate: '2025-06-14T12:00:00',
    guestName: 'Riya Mehta',
    status: 'checked-out',
  },
  {
    id: 6,
    roomId: 6,
    startDate: '2025-06-16T12:00:00',
    endDate: '2025-06-20T12:00:00',
    guestName: 'Ayushi Patel',
    status: 'checked-in',
  },
  {
    id: 7,
    roomId: 7,
    startDate: '2025-06-18T12:00:00',
    endDate: '2025-06-22T12:00:00',
    guestName: 'Isabella Sánchez',
    status: 'checked-out',
  },
  {
    id: 8,
    roomId: 8,
    startDate: '2025-06-25T12:00:00',
    endDate: '2025-06-30T12:00:00',
    guestName: 'Thiago Pereira',
    status: 'checked-out',
  },
]

export const deluxeRooms: RoomType[] = [
  {
    id: 1,
    name: 'deluxeRooms',
    rooms: [
      { id: 1, name: 'deluxeRoom101', status: 'needsCleaning' },
      { id: 2, name: 'deluxeRoom102', status: 'needsCleaning' },
      { id: 3, name: 'deluxeRoom103', status: 'clean' },
      { id: 4, name: 'deluxeRoom104', status: 'clean' },
      { id: 5, name: 'deluxeRoom105', status: 'clean' },
      { id: 6, name: 'deluxeRoom106', status: 'clean' },
      { id: 7, name: 'deluxeRoom107', status: 'clean' },
      { id: 8, name: 'deluxeRoom108', status: 'clean' },
    ],
    prices: [],
  },
]
