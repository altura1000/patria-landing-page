/**
 * All site imagery, imported as modules so Vite bundles and hashes every file.
 * A missing file fails the build instead of rendering a broken image.
 */
import alfadubai from './alfadubai.png'
import blanut from './blanut.png'
import bonBon from './bon-bon.png'
import clasico from './clasico.png'
import client1 from './client1.png'
import client2 from './client2.png'
import client3 from './client3.png'
import frutosRojos from './frutos-rojos.png'
import halva from './halva.png'
import heroBonbon from './hero-bonbon.png'
import logoEmblem from './logo-emblem-color.jpg'
import logoSeal from './logo-seal-cream.jpg'
import malbec from './malbec.png'
import message1 from './message1.png'
import message2 from './message2.png'
import proteina from './proteina.png'

export const images = {
  alfadubai,
  blanut,
  bonBon,
  clasico,
  client1,
  client2,
  client3,
  frutosRojos,
  halva,
  heroBonbon,
  logoEmblem,
  logoSeal,
  malbec,
  message1,
  message2,
  proteina,
} as const
