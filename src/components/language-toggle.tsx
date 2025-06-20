'use client'

import { useLocale } from 'next-intl'
import { buttonVariants } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export function LanguageToggle() {
  const locale = useLocale()
  const otherLocale = locale === 'en-us' ? 'pt-br' : 'en-us'
  const pathname = usePathname()

  const searchParams = useSearchParams()

  const allParams = searchParams.toString()
  const newPathname = `${pathname}?${allParams}`

  return (
    <Link
      href={newPathname}
      locale={otherLocale}
      className={cn(
        buttonVariants({ variant: 'outline', size: 'icon' }),
        'mr-4 size-8',
      )}
    >
      {locale === 'pt-br' ? 'PT' : 'EN'}
    </Link>
  )
}
