import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function RevealWrapper({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )

    obs.observe(el)
    const timer = setTimeout(() => el.classList.add('visible'), 600)

    return () => {
      obs.unobserve(el)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div ref={ref} className={`reveal${className ? ' ' + className : ''}`}>
      {children}
    </div>
  )
}
