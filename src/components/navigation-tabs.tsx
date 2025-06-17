import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function NavigationTabs() {
  return (
    <div className="flex items-center">
      <Tabs defaultValue="all-rooms">
        <TabsList className="text-foreground h-auto gap-2 rounded-none bg-transparent px-0 py-1">
          <TabsTrigger value="all-rooms">
            All Rooms <Badge variant="secondary">40</Badge>
          </TabsTrigger>
          <TabsTrigger value="check-in-rooms">
            Check in Rooms
            <Badge variant="secondary">40</Badge>
          </TabsTrigger>
          <TabsTrigger value="checkout-rooms">
            Checkout Rooms <Badge variant="secondary">22</Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Button className="text-muted-foreground ml-4" variant="ghost">
        <Plus />
        Add New
      </Button>
    </div>
  )
}
