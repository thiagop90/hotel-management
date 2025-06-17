import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Icons } from './icons'
import { ChevronsUpDown } from 'lucide-react'
import {
  MAIN_NAVIGATION_ITEMS,
  SYSTEM_OPTIONS_ITEMS,
} from '@/constants/sidebar-items'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton className="h-12 rounded-b-none border-b">
          <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-[#A9EEC0]">
            <Icons.circleHalf />
          </div>
          <div className="flex-1 text-sm">
            <span className="font-semibold">Front-desk</span>
          </div>
          <ChevronsUpDown className="text-muted-foreground size-4!" />
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {MAIN_NAVIGATION_ITEMS.map((item, idx) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="text-muted-foreground px-5 [&>svg]:size-5"
                    asChild
                    isActive={idx === 1}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-5">
            System Options
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {SYSTEM_OPTIONS_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="text-muted-foreground px-5 [&>svg]:size-5"
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
