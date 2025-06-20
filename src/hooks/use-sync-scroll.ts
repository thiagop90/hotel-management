import { useEffect, type RefObject } from 'react'

export function useSyncScroll(
  headerRef: RefObject<HTMLElement | null>,
  sidebarRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const header = headerRef.current
    const sidebar = sidebarRef.current
    const content = contentRef.current
    if (!header || !sidebar || !content) return

    const syncScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target === content) {
        header.scrollLeft = content.scrollLeft
        sidebar.scrollTop = content.scrollTop
      } else if (target === sidebar) {
        content.scrollTop = sidebar.scrollTop
      }
    }

    content.addEventListener('scroll', syncScroll)
    sidebar.addEventListener('scroll', syncScroll)

    return () => {
      content.removeEventListener('scroll', syncScroll)
      sidebar.removeEventListener('scroll', syncScroll)
    }
  }, [])
}
