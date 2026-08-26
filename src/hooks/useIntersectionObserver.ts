import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  /** Once triggered, stay triggered (typical for entrance animations) */
  triggerOnce?: boolean
}

/**
 * Returns a ref and a boolean indicating whether the element is in the viewport.
 * Used to trigger scroll-entrance animations via CSS class toggling.
 *
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true })
 * <div ref={ref} className={isVisible ? styles.visible : styles.hidden} />
 */
export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}
