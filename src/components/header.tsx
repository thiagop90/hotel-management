import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Bell, ChevronDown, HelpCircle } from 'lucide-react'

export function Header() {
  return (
    <header className="flex flex-col space-y-5 pt-3 pb-5">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Switch />
          <span className="text-sm font-medium">Learn</span>
        </div>

        <div className="ml-2">
          <Button size="icon" variant="ghost" className="size-7">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost" className="size-7">
            <HelpCircle />
          </Button>
        </div>

        <Button size="sm" variant="ghost" className="gap-2">
          <span>Jonathan Doe</span>

          <span className="text-primary-foreground flex size-7 items-center justify-center rounded-full bg-[#E59CFD]">
            A
          </span>

          <ChevronDown />
        </Button>
      </div>

      <h1 className="text-3xl font-semibold">All Rooms</h1>
    </header>
  )
}
