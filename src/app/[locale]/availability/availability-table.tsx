'use client'

import { useState, useMemo } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import type { AvailabilityDataType } from '@/constants/availability-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollableContainer } from './scrollable-container'
import { Button } from '@/components/ui/button'
import { AvailabilityBar } from './availability-bar'
import type { FilterType } from './availability-filters'

dayjs.locale('pt-br')

const MONTHS = Array.from({ length: 12 }, (_, i) =>
  dayjs().month(i).format('MMMM'),
)

interface AvailabilityTableProps {
  data: AvailabilityDataType[]
  activeFilter: FilterType
}

export function AvailabilityTable({
  data,
  activeFilter,
}: AvailabilityTableProps) {
  const currentYear = dayjs().year()
  const [selectedHourIndex, setSelectedHourIndex] = useState(0)

  // Extrai e ordena as horas únicas presentes nos dados
  const hours = useMemo(() => {
    const unique = new Set(data.map((item) => item.hour))
    return Array.from(unique).sort()
  }, [data])

  // Hora atualmente selecionada com base no índice
  const selectedHour = hours[selectedHourIndex]

  // Gera um array com os dias de cada mês no ano atual
  const daysInMonth = useMemo(() => {
    return Array.from({ length: 12 }, (_, monthIndex) => {
      const days = dayjs(`${currentYear}-${monthIndex + 1}-01`).daysInMonth()
      return Array.from({ length: days }, (_, dayIndex) => dayIndex + 1)
    })
  }, [currentYear])

  function goToPrevHour() {
    if (selectedHourIndex > 0) {
      setSelectedHourIndex((prev) => prev - 1)
    }
  }

  function goToNextHour() {
    if (selectedHourIndex < hours.length - 1) {
      setSelectedHourIndex((prev) => prev + 1)
    }
  }

  return (
    <ScrollableContainer>
      <table className="text-sm select-none">
        <thead className="border-b">
          <tr className="divide-x">
            <th className="sticky top-0 left-0 z-20 text-left">
              <div className="flex h-10 w-40 items-center bg-neutral-50">
                <Button
                  onClick={goToPrevHour}
                  className="h-full rounded-none border-r"
                  size="icon"
                  variant="ghost"
                  disabled={selectedHourIndex === 0}
                >
                  <ChevronLeft />
                </Button>
                <span className="flex-1 text-center">{selectedHour}</span>
                <Button
                  onClick={goToNextHour}
                  className="h-full rounded-none border-l"
                  size="icon"
                  variant="ghost"
                  disabled={selectedHourIndex === hours.length - 1}
                >
                  <ChevronRight />
                </Button>
              </div>
            </th>

            {Array.from({ length: 31 }, (_, i) => (
              <th key={i} className="sticky top-0 z-10">
                <div className="flex h-10 w-24 items-center justify-center bg-neutral-50">
                  <span>{i + 1}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y">
          {MONTHS.map((month, monthIndex) => (
            <tr key={`${monthIndex}`} className="divide-x">
              <td className="sticky left-0 z-10">
                <div className="flex h-9 items-center bg-neutral-50 px-4 font-semibold capitalize">
                  {month}
                </div>
              </td>

              {/* Geração das células de cada dia do mês */}
              {Array.from({ length: 31 }, (_, dayIndex) => {
                const totalDays = daysInMonth[monthIndex].length

                // Se o dia não existir no mês (ex: 31 em fevereiro), renderiza célula vazia
                if (dayIndex >= totalDays) {
                  return <td key={dayIndex} className="bg-neutral-100" />
                }

                // Constrói string da data no formato DD/MM/YYYY
                const dateStr = dayjs(
                  `${currentYear}-${monthIndex + 1}-${dayIndex + 1}`,
                ).format('DD/MM/YYYY')

                // Busca os dados correspondentes à data e hora selecionada
                const dayData = data.find(
                  (d) => d.date === dateStr && d.hour === selectedHour,
                )

                // Se não houver dados para a data e hora, retorna célula vazia
                if (!dayData) {
                  return <td key={dayIndex} />
                }

                return (
                  <AvailabilityBar
                    key={dayIndex}
                    total={dayData.total}
                    sold={dayData.sold}
                    standby={dayData.standby}
                    hour={dayData.hour}
                    activeFilter={activeFilter}
                  />
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollableContainer>
  )
}
