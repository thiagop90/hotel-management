import {
  ChartLine,
  CircleArrowUp,
  ClipboardList,
  Globe2,
  HelpCircle,
  Home,
  HousePlug,
  Layout,
  Monitor,
  Settings,
  UserCircle2,
  type LucideIcon,
} from 'lucide-react'

type SidebarItem = {
  title: string
  url: string
  icon: LucideIcon
}

export const MAIN_NAVIGATION_ITEMS: SidebarItem[] = [
  {
    title: 'Dashboard',
    url: '#',
    icon: Layout,
  },
  {
    title: 'Room Operation',
    url: '#',
    icon: Home,
  },
  {
    title: 'Guest Look-up',
    url: '#',
    icon: UserCircle2,
  },
  {
    title: 'House Status',
    url: '#',
    icon: HousePlug,
  },
  {
    title: 'Tariff Chart',
    url: '#',
    icon: ChartLine,
  },
  {
    title: 'Task Management',
    url: '#',
    icon: ClipboardList,
  },
  {
    title: 'Web Reservation',
    url: '#',
    icon: Monitor,
  },
  {
    title: 'Reports',
    url: '#',
    icon: Monitor,
  },
]

export const SYSTEM_OPTIONS_ITEMS: SidebarItem[] = [
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    url: '#',
    icon: HelpCircle,
  },
  {
    title: 'Upgrade',
    url: '#',
    icon: CircleArrowUp,
  },
  {
    title: 'Language & Region',
    url: '#',
    icon: Globe2,
  },
]
