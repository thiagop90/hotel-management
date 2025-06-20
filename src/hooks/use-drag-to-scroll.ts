import { useEffect, useRef, useState, type RefObject } from 'react'

export function useDragToScroll(
  contentRef: RefObject<HTMLElement | null>,
  sidebarRef: RefObject<HTMLElement | null>,
  headerRef: RefObject<HTMLElement | null>,
  bookingRef: RefObject<HTMLElement | null>,
) {
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ x: number; y: number } | null>(null)
  const scrollStartRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const content = contentRef.current
    const sidebar = sidebarRef.current
    const header = headerRef.current
    const bookingContainer = bookingRef.current
    if (!content || !sidebar || !header || !bookingContainer) return

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Se o clique ocorreu dentro da barra de booking, NÃO iniciar o drag para scroll
      if (bookingContainer.contains(target)) return

      // Se o clique não estiver nem no content, sidebar ou header, também ignora
      if (
        !content.contains(target) &&
        !sidebar.contains(target) &&
        !header.contains(target)
      )
        return

      setIsDragging(true)
      dragStartRef.current = { x: e.clientX, y: e.clientY }
      scrollStartRef.current = { x: content.scrollLeft, y: content.scrollTop }
      e.preventDefault()
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragStartRef.current || !scrollStartRef.current)
        return

      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y

      content.scrollLeft = scrollStartRef.current.x - dx
      content.scrollTop = scrollStartRef.current.y - dy
      header.scrollLeft = scrollStartRef.current.x - dx
      sidebar.scrollTop = scrollStartRef.current.y - dy
    }

    const onMouseUp = () => {
      setIsDragging(false)
      dragStartRef.current = null
      scrollStartRef.current = null
    }

    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [isDragging, dragStartRef, scrollStartRef])

  return { isDragging }
}
