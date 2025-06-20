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
    name: 'Standard Rooms',
    rooms: [
      { id: 1, name: 'Standard Room 101', status: 'Needs Cleaning' },
      { id: 2, name: 'Standard Room 102', status: 'Needs Cleaning' },
      { id: 3, name: 'Standard Room 103', status: 'Clean' },
      { id: 4, name: 'Standard Room 104', status: 'Clean' },
      { id: 5, name: 'Standard Room 105', status: 'Clean' },
      { id: 6, name: 'Standard Room 106', status: 'Clean' },
      { id: 7, name: 'Standard Room 107', status: 'Clean' },
      { id: 8, name: 'Standard Room 108', status: 'Clean' },
    ],
    prices: [
      // { id: 1, start: '2025-06-01', end: '2025-06-10', price: 255 },
      // { id: 2, start: '2024-09-11', end: '2024-09-20', price: 300 },
      // { id: 3, start: '2024-09-21', end: '2024-09-30', price: 155 },
    ],
  },
]
