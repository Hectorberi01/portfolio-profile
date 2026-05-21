import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId: number
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)

    const onEnter = () => { ring.style.width = '56px'; ring.style.height = '56px' }
    const onLeave = () => { ring.style.width = '36px'; ring.style.height = '36px' }

    document.addEventListener('mousemove', onMouseMove)

    const updateInteractives = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    updateInteractives()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
