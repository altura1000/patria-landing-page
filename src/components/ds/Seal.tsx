import type { CSSProperties } from 'react'
import { images } from '../../assets/images'
import { useCopy } from '../../i18n/LanguageContext'

interface SealProps {
  size?: number
  src?: string
  rotate?: number
  shadow?: boolean
  style?: CSSProperties
}

export default function Seal({
  size = 96,
  src = images.logoEmblem,
  rotate = -6,
  shadow = true,
  style,
}: SealProps) {
  const { sealAlt } = useCopy().ui
  return (
    <img
      src={src}
      alt={sealAlt}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        borderRadius: 'var(--radius-seal)',
        objectFit: 'cover',
        transform: 'rotate(' + rotate + 'deg)',
        boxShadow: shadow ? 'var(--shadow-seal)' : 'none',
        border: '1px solid var(--border-hairline)',
        ...style,
      }}
    />
  )
}
