import { CalendarDays, ChevronsLeftRight } from 'lucide-react'

export function HotelCalendarSidebar() {
  return (
    <div className="min-w-64 space-y-2.5 border-r border-b px-5 pt-3.5 pb-2">
      <div className="flex gap-2">
        <button className="border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-7 flex-1 items-center justify-start gap-2.5 rounded-sm border px-3 text-sm">
          <CalendarDays className="h-4 w-4" />
          Full month
        </button>
        <button className="border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-7 w-7 items-center justify-center rounded-sm border">
          <ChevronsLeftRight className="h-4 w-4" />
        </button>
      </div>
      <span className="text-muted-foreground text-sm font-medium uppercase">
        All Rooms
      </span>
    </div>
  )
}
