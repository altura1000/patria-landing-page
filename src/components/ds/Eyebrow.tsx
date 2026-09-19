import type { HTMLAttributes } from 'react'

type EyebrowTone = 'dulce' | 'choc' | 'blue' | 'onInk'

const COLORS: Record<EyebrowTone, string> = {
  dulce: 'var(--dulce-600)',
  choc: 'var(--choc-500)',
  blue: 'var(--celeste-700)',
  onInk: 'var(--text-on-ink-muted)',
}

interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  tone?: EyebrowTone
}

export default function Eyebrow({ tone = 'dulce', children, style, ...rest }: EyebrowProps) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--fs-eyebrow)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: COLORS[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
