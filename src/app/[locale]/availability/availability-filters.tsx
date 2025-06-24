'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type FilterType = 'all' | 'soldOut' | 'available' | 'standby'

interface AvailabilityFiltersProps {
  activeFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export function AvailabilityFilters({
  activeFilter,
  onFilterChange,
}: AvailabilityFiltersProps) {
  const filters = [
    {
      value: 'all' as FilterType,
      label: 'Todos',
      color: 'bg-gradient-to-r from-blue-400 via-emerald-400 to-red-400',
    },
    {
      value: 'soldOut' as FilterType,
      label: 'Vendidos',
      color: 'bg-blue-400',
    },
    {
      value: 'available' as FilterType,
      label: 'Disponíveis',
      color: 'bg-red-400',
    },
    {
      value: 'standby' as FilterType,
      label: 'Standby',
      color: 'bg-emerald-400',
    },
  ]

  return (
    <div className="flex w-full items-center border-b">
      <Tabs
        value={activeFilter}
        onValueChange={(value) => onFilterChange(value as FilterType)}
      >
        <TabsList className="text-foreground h-auto gap-2 rounded-none bg-transparent px-0 py-1">
          {filters.map(({ value, label, color }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center gap-2 data-[state=active]:bg-neutral-100"
            >
              <div className={`h-3 w-3 rounded-sm ${color}`} />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}
