import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** ms to wait after entering the viewport before fading in. */
  delay?: number
}

/** Fades/slides content in when it scrolls into view (with a 1.8s safety fallback). */
export default function Reveal({ children, className, style, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let showTimer: number | undefined
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          showTimer = window.setTimeout(() => el.classList.add('in'), delay)
          io.disconnect()
        }
      },
      { threshold: 0.06 },
    )
    io.observe(el)
    const fallback = window.setTimeout(() => el.classList.add('in'), 1800)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
      window.clearTimeout(showTimer)
    }
  }, [delay])
  return (
    <div ref={ref} className={className ? `reveal ${className}` : 'reveal'} style={style}>
      {children}
    </div>
  )
}
