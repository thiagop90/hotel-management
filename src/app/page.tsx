import { ActionBar } from '@/components/action-bar'
import { Header } from '@/components/header'
import { NavigationTabs } from '@/components/navigation-tabs'
import { standardRooms, standardReservations } from '@/constants/standard-rooms'
import { deluxeRooms, deluxeReservations } from '@/constants/deluxe-rooms'
import { HotelCalendar } from '@/components/hotel-calendar'
import { AppSidebar } from '@/components/app-sidebar'

export default function Home() {
  return (
    <main className="w-full">
      <AppSidebar />

      <div className="pl-[14.5rem]">
        <div className="px-4 sm:px-6 lg:px-10">
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
        </div>
      </div>
    </main>
  )
}
