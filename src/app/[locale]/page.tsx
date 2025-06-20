import { ActionBar } from '@/components/action-bar'
import { Header } from '@/components/header'
import { NavigationTabs } from '@/components/navigation-tabs'
import { standardRooms, standardReservations } from '@/constants/standard-rooms'
import { deluxeRooms, deluxeReservations } from '@/constants/deluxe-rooms'
import { HotelCalendar } from '@/components/hotel-calendar'
import { AppSidebar } from '@/components/app-sidebar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function Home() {
  return (
    <main className="w-full">
      <AppSidebar />

      <div className="md:pl-[16rem]">
        <div className="px-4 md:px-6 lg:px-10">
          <Header />

          <ScrollArea className="overflow-hidden">
            <div className="mb-2.5 flex h-full w-full gap-4 border-b">
              <NavigationTabs />

              <ActionBar />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="my-4 space-y-4">
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
