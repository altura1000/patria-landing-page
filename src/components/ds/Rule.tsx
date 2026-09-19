import type { CSSProperties } from 'react'

interface RuleProps {
  ornament?: boolean
  tone?: 'gold' | 'hairline'
  width?: string
  style?: CSSProperties
}

export default function Rule({ ornament = true, tone = 'gold', width = '100%', style }: RuleProps) {
  const line = tone === 'gold' ? 'var(--gold-500)' : 'var(--border-hairline)'
  const ink = tone === 'gold' ? 'var(--gold-600)' : 'var(--choc-500)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width, ...style }}>
      <span style={{ flex: 1, height: '1px', background: line, opacity: 0.7 }} />
      {ornament && (
        <span style={{ color: ink, fontSize: '11px', letterSpacing: '.3em' }}>···</span>
      )}
      <span style={{ flex: 1, height: '1px', background: line, opacity: 0.7 }} />
    </div>
  )
}
