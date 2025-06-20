import type { Reservation, RoomType } from '@/types/hotel-calendar'

export const standardReservations: Reservation[] = [
  {
    id: 1,
    roomId: 1,
    startDate: '2025-06-01T12:00:00',
    endDate: '2025-06-03T12:00:00',
    guestName: 'Abdullah Khan',
    status: 'checked-out',
  },
  {
    id: 2,
    roomId: 2,
    startDate: '2025-06-04T12:00:00',
    endDate: '2025-06-05T12:00:00',
    guestName: 'Ali Mahmud',
    status: 'checked-in',
  },
  {
    id: 3,
    roomId: 3,
    startDate: '2025-06-08T12:00:00',
    endDate: '2025-06-11T12:00:00',
    guestName: 'Chi. Cu Giang Khai',
    status: 'checked-in',
  },
  {
    id: 4,
    roomId: 4,
    startDate: '2025-06-11T12:00:00',
    endDate: '2025-06-19T12:00:00',
    guestName: 'Muhammed Khoury',
    status: 'checked-out',
  },
  {
    id: 5,
    roomId: 5,
    startDate: '2025-06-12T12:00:00',
    endDate: '2025-06-13T12:00:00',
    guestName: 'Steven Lee',
    status: 'checked-in',
  },
  {
    id: 6,
    roomId: 6,
    startDate: '2025-06-17T12:00:00',
    endDate: '2025-06-22T12:00:00',
    guestName: 'Steven Lee',
    status: 'checked-out',
  },
  {
    id: 7,
    roomId: 7,
    startDate: '2025-06-01T12:00:00',
    endDate: '2025-06-05T12:00:00',
    guestName: 'Ali Mahmud',
    status: 'checked-in',
  },
  {
    id: 8,
    roomId: 8,
    startDate: '2025-06-09T12:00:00',
    endDate: '2025-06-14T12:00:00',
    guestName: 'Abdullah Khan',
    status: 'checked-out',
  },
]

export const standardRooms: RoomType[] = [
  {
    id: 1,
    name: 'standardRooms',
    rooms: [
      { id: 1, name: 'standardRoom101', status: '' },
      { id: 2, name: 'standardRoom102', status: '' },
      { id: 3, name: 'standardRoom103', status: '' },
      { id: 4, name: 'standardRoom104', status: '' },
      { id: 5, name: 'standardRoom105', status: '' },
      { id: 6, name: 'standardRoom106', status: '' },
      { id: 7, name: 'standardRoom107', status: '' },
      { id: 8, name: 'standardRoom108', status: '' },
    ],
    prices: [],
  },
]
