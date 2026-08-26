import { useEffect, useState } from 'react'

/**
 * Tracks the currently active section ID as the user scrolls.
 * Used to highlight the active nav link.
 *
 * @param sectionIds - ordered array of section IDs to observe
 * @returns the ID of the section currently most visible in the viewport
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleIntersect =
      (id: string) => (entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        }
      }

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const observer = new IntersectionObserver(handleIntersect(id), {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      })
      observer.observe(el)
      observers.push(observer)
    }

    return () => {
      for (const observer of observers) observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}
