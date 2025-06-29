import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import type { FilterType } from './availability-filters'

interface AvailabilityBarProps {
  hour: string
  total: number
  sold: number
  standby: number
  activeFilter: FilterType
}

export function AvailabilityBar({
  hour,
  total,
  sold,
  standby,
  activeFilter,
}: AvailabilityBarProps) {
  const available = Math.max(total - sold - standby, 0)

  const soldPercent = total > 0 ? (sold / total) * 100 : 0
  const standbyPercent = total > 0 ? (standby / total) * 100 : 0
  const availablePercent = total > 0 ? (available / total) * 100 : 0

  const barSegments = [
    {
      id: 'available',
      label: 'Disponíveis',
      value: available,
      percent: availablePercent,
      color: 'bg-emerald-400',
    },
    {
      id: 'soldOut',
      label: 'Vendidos',
      value: sold,
      percent: soldPercent,
      color: 'bg-red-400',
    },
    {
      id: 'standby',
      label: 'Standby',
      value: standby,
      percent: standbyPercent,
      color: 'bg-blue-400',
    },
  ]

  function getDisplayValue() {
    switch (activeFilter) {
      case 'soldOut':
        return sold
      case 'available':
        return available
      case 'standby':
        return standby
      case 'all':
      default:
        return total
    }
  }

  const displayValue = getDisplayValue()

  // Determina quais dados mostrar baseado no filtro ativo
  function getVisibleData() {
    if (activeFilter === 'all') {
      return barSegments
    }
    return barSegments.filter((item) => item.id === activeFilter)
  }

  const visibleData = getVisibleData()

  return (
    <HoverCard openDelay={200} closeDelay={200}>
      {displayValue > 0 ? (
        <HoverCardTrigger asChild>
          <td className="cursor-default p-1.5">
            <p className="mb-0.5 text-center text-xs font-bold">
              {displayValue}
            </p>
            <div className="flex h-1.5 w-full overflow-hidden rounded-sm">
              {activeFilter === 'all'
                ? // Mostra todas as cores com porcentagens originais
                  barSegments.map(({ percent, color }, index) => (
                    <div
                      key={index}
                      className={color}
                      style={{ width: `${percent}%` }}
                    />
                  ))
                : // Mostra apenas a cor do filtro selecionado
                  visibleData.map(({ color }, index) => (
                    <div
                      key={index}
                      className={color}
                      style={{ width: '100%' }}
                    />
                  ))}
            </div>
          </td>
        </HoverCardTrigger>
      ) : (
        <td />
      )}
      <HoverCardContent className="bg-secondary rounded-2xl border p-1 shadow-sm">
        <div className="bg-background space-y-2 rounded-xl border p-3">
          <div className="text-sm font-semibold">{hour}</div>

          <div className="space-y-1.5">
            {barSegments.map(({ id, label, value, percent, color }) => {
              const isHighlighted =
                activeFilter === 'all' || activeFilter === id
              return (
                <div
                  key={label}
                  className={`flex items-center justify-between ${!isHighlighted ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-sm ${color}`} />
                    <span className="text-sm">{label}</span>
                  </div>
                  <div className="text-sm font-medium">
                    {value} ({percent.toFixed(1)}%)
                  </div>
                </div>
              )
            })}
          </div>

          <div className="border-t pt-2">
            <div className="flex justify-between text-sm font-semibold">
              <span>Total:</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
