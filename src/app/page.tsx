import { ActionBar } from '@/components/action-bar'
import { Header } from '@/components/header'
import { NavigationTabs } from '@/components/navigation-tabs'
import { standardRooms, standardReservations } from '@/constants/standard-rooms'
import { deluxeRooms, deluxeReservations } from '@/constants/deluxe-rooms'
import { HotelCalendar } from '@/components/hotel-calendar'

export default function Home() {
  return (
    <main className="w-full px-4 sm:px-8 lg:px-10">
      <Header />

      <div className="flex w-full flex-col-reverse gap-4 lg:flex-row lg:border-b">
        <NavigationTabs />

        <ActionBar />
      </div>

      <div className="my-8 space-y-4">
        <HotelCalendar
          rooms={standardRooms}
          reservations={standardReservations}
          type="standard"
        />

        <HotelCalendar
          rooms={deluxeRooms}
          reservations={deluxeReservations}
          type="deluxe"
        />
      </div>
    </main>
  )
}
