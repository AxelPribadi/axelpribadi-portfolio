import { useEffect, useRef } from 'react'

interface Options {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal<T extends Element>(options: Options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
