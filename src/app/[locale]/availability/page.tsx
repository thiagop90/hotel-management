'use client'

import { AvailabilityFilters, type FilterType } from './availability-filters'
import { AvailabilityTable } from './availability-table'
import { availabilityData } from '@/constants/availability-data'
import { useState } from 'react'

export default function AvailabilityPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  return (
    <main className="mx-auto min-h-dvh max-w-4xl space-y-6 border-x p-8">
      <h1 className="text-2xl font-semibold">Tabela de Disponibilidade</h1>

      <AvailabilityFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="rounded-xl border p-2">
        <div className="divide-y overflow-hidden rounded-lg border">
          <AvailabilityTable
            data={availabilityData}
            activeFilter={activeFilter}
          />
        </div>
      </div>
    </main>
  )
}
