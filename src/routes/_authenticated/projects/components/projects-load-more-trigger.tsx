import { useEffect, useRef } from 'react'

export function ProjectsLoadMoreTrigger({ onLoadMore }: { onLoadMore: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const callbackRef = useRef(onLoadMore)

  callbackRef.current = onLoadMore

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const listener: IntersectionObserverCallback = ([entry]) => {
      if (entry.isIntersecting) {
        callbackRef.current?.()
      }
    }

    const observer = new IntersectionObserver(listener)
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return <div ref={ref} />
}
