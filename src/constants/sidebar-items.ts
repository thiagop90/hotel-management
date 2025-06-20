import {
  BedDouble,
  ChartLine,
  CircleArrowUp,
  ClipboardList,
  Globe2,
  HelpCircle,
  House,
  Layout,
  Monitor,
  Settings,
  UserCircle2,
  type LucideIcon,
} from 'lucide-react'
import type { Messages } from 'next-intl'

type SidebarItem = {
  title: keyof Messages['Sidebar']
  url: string
  icon: LucideIcon
}

export const MAIN_NAVIGATION_ITEMS: SidebarItem[] = [
  {
    title: 'dashboard',
    url: '#',
    icon: Layout,
  },
  {
    title: 'roomOperation',
    url: '#',
    icon: BedDouble,
  },
  {
    title: 'guestLookup',
    url: '#',
    icon: UserCircle2,
  },
  {
    title: 'houseStatus',
    url: '#',
    icon: House,
  },
  {
    title: 'tariffChart',
    url: '#',
    icon: ChartLine,
  },
  {
    title: 'taskManagement',
    url: '#',
    icon: ClipboardList,
  },
  {
    title: 'webReservation',
    url: '#',
    icon: Monitor,
  },
  {
    title: 'reports',
    url: '#',
    icon: Monitor,
  },
]

export const SYSTEM_OPTIONS_ITEMS: SidebarItem[] = [
  {
    title: 'settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'helpSupport',
    url: '#',
    icon: HelpCircle,
  },
  {
    title: 'upgrade',
    url: '#',
    icon: CircleArrowUp,
  },
  {
    title: 'languageRegion',
    url: '#',
    icon: Globe2,
  },
]
