/**
 * All site imagery, imported as modules so Vite bundles and hashes every file.
 * A missing file fails the build instead of rendering a broken image.
 */
import alfadubai from './alfadubai.png'
import blanut from './blanut.png'
import bonBon from './bon-bon.png'
import clasico from './clasico.png'
import frutosRojos from './frutos-rojos.png'
import halva from './halva.png'
import heroBonbon from './hero-bonbon.png'
import logoEmblem from './logo-emblem-color.jpg'
import logoSeal from './logo-seal-cream.jpg'
import malbec from './malbec.png'
import proteina from './proteina.png'

export const images = {
  alfadubai,
  blanut,
  bonBon,
  clasico,
  frutosRojos,
  halva,
  heroBonbon,
  logoEmblem,
  logoSeal,
  malbec,
  proteina,
} as const
