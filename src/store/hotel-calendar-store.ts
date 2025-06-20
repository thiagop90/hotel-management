import { create } from 'zustand'

type ReservationStatusFilter = 'all' | 'checked-in' | 'checked-out'

interface CalendarFilterState {
  status: ReservationStatusFilter
  setStatus: (status: ReservationStatusFilter) => void
}

export const useCalendarFilterStore = create<CalendarFilterState>((set) => ({
  status: 'all',
  setStatus: (status) => set({ status }),
}))
