import type { CSSProperties, ReactNode } from 'react'

export const FLAVOUR_COLORS = {
  dulce: 'var(--dulce-500)',
  chocolate: 'var(--choc-700)',
  blanco: 'var(--halva)',
  frutosRojos: 'var(--berry)',
  pistacho: 'var(--pistachio)',
  nuez: 'var(--walnut)',
  halva: 'var(--halva)',
  malbec: '#4A1024',
} as const

export type FlavourKey = keyof typeof FLAVOUR_COLORS

interface FlavourDotProps {
  flavour?: FlavourKey
  size?: number
  label?: ReactNode
  style?: CSSProperties
}

export default function FlavourDot({ flavour = 'dulce', size = 10, label, style }: FlavourDotProps) {
  const dot = (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: FLAVOUR_COLORS[flavour] || flavour,
        display: 'inline-block',
        boxShadow: 'inset 0 0 0 1px rgba(35,19,9,.18)',
      }}
    />
  )
  if (!label) return <span style={style}>{dot}</span>
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: 'var(--fs-body-s)',
        color: 'var(--text-muted)',
        ...style,
      }}
    >
      {dot}
      {label}
    </span>
  )
}
