import { ActionBar } from '@/components/action-bar'
import { HotelCalendar } from '@/components/hotel-calendar'
import { Header } from '@/components/header'
import { NavigationTabs } from '@/components/navigation-tabs'
import {
  standardRooms,
  standardRoomsBookings,
} from '@/constants/standard-rooms'
import { deluxeRooms, deluxeRoomsBookings } from '@/constants/deluxe-rooms'

export default function Home() {
  return (
    <main className="w-full px-10">
      <Header />

      <div className="flex w-full border-b">
        <NavigationTabs />

        <ActionBar />
      </div>

      <div className="my-8 space-y-4">
        <HotelCalendar
          rooms={standardRooms}
          bookings={standardRoomsBookings}
          reservations={{ day: 14, qtd: 1 }}
        />

        <HotelCalendar
          rooms={deluxeRooms}
          bookings={deluxeRoomsBookings}
          reservations={{ day: 8, qtd: 2 }}
          type="deluxe"
        />
      </div>
    </main>
  )
}
