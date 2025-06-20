'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { useCalendarFilterStore } from '@/store/hotel-calendar-store'
import { useMemo } from 'react'
import { standardReservations } from '@/constants/standard-rooms'
import { deluxeReservations } from '@/constants/deluxe-rooms'
import { useTranslations } from 'next-intl'

export function NavigationTabs() {
  const t = useTranslations('OperationRoomsPage.Navigation')
  const { setStatus } = useCalendarFilterStore()

  const counts = useMemo(() => {
    const allReservations = [...standardReservations, ...deluxeReservations]
    return {
      total: allReservations.length,
      checkedIn: allReservations.filter((r) => r.status === 'checked-in')
        .length,
      checkedOut: allReservations.filter((r) => r.status === 'checked-out')
        .length,
    }
  }, [])

  return (
    <div className="flex items-center">
      <Tabs
        defaultValue="all-rooms"
        onValueChange={(value) => {
          if (value === 'check-in-rooms') return setStatus('checked-in')
          if (value === 'checkout-rooms') return setStatus('checked-out')
          setStatus('all')
        }}
      >
        <TabsList className="text-foreground h-auto gap-2 rounded-none bg-transparent px-0 py-1">
          <TabsTrigger value="all-rooms">
            {t('allRooms')}{' '}
            <Badge
              className="rounded-full bg-[#E4E6E7] px-1.5 py-px text-[#6E7072]"
              variant="secondary"
            >
              {counts.total}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="check-in-rooms">
            {t('checkInRooms')}
            <Badge
              className="rounded-full bg-[#E4E6E7] px-1.5 py-px text-[#6E7072]"
              variant="secondary"
            >
              {counts.checkedIn}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="checkout-rooms">
            {t('checkOutRooms')}{' '}
            <Badge
              className="rounded-full bg-[#E4E6E7] px-1.5 py-px text-[#6E7072]"
              variant="secondary"
            >
              {counts.checkedOut}
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Button className="text-muted-foreground ml-4" variant="ghost">
        <Plus />
        {t('addNew')}
      </Button>
    </div>
  )
}
