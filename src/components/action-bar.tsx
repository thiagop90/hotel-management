import { ChevronDown, MoreHorizontal, Search } from 'lucide-react'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'

export function ActionBar() {
  const t = useTranslations('OperationRoomsPage.Navigation')

  return (
    <div className="ml-auto flex items-center">
      <Button className="text-muted-foreground" variant="ghost" size="sm">
        {t('filter')}
      </Button>
      <Button className="text-muted-foreground" variant="ghost" size="sm">
        {t('sort')}
      </Button>
      <Button
        className="text-muted-foreground size-8"
        variant="ghost"
        size="icon"
      >
        <Search className="size-5" />
      </Button>
      <Button
        className="text-muted-foreground size-8"
        variant="ghost"
        size="icon"
      >
        <MoreHorizontal className="size-5" />
      </Button>

      <div className="ml-4 inline-flex -space-x-px rounded-sm">
        <Button
          size="sm"
          className="text-primary-foreground rounded-none rounded-s-sm bg-[#2679FF] shadow-none hover:bg-[#2679FF]/80 focus-visible:z-10"
        >
          {t('new')}
        </Button>
        <Button
          className="text-primary-foreground size-8 rounded-none rounded-e-sm border-l bg-[#2679FF] shadow-none hover:bg-[#2679FF]/80 focus-visible:z-10"
          size="icon"
        >
          <ChevronDown />
        </Button>
      </div>
    </div>
  )
}
