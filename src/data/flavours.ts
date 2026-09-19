import { images } from '../assets/images'
import type { FlavourKey } from '../components/ds/FlavourDot'

export interface Flavour {
  id: string
  name: string
  image: string
  description: string
  dots: FlavourKey[]
}

/** The eight flavours, in the order shown on /sabores (copy from PATRIA Sabores Mobile.html). */
export const FLAVOURS: Flavour[] = [
  {
    id: 'clasico',
    name: 'El Clásico de Siempre',
    image: images.clasico,
    description:
      'Dos tapas de chocolate negro, dulce de leche espeso en el medio y cobertura entera. El de siempre.',
    dots: ['dulce', 'chocolate'],
  },
  {
    id: 'bon-bon',
    name: 'Bon Bon',
    image: images.bonBon,
    description:
      'Dulce de leche bien cargado entre tapas claras de maicena, bañado todo en chocolate con leche.',
    dots: ['dulce', 'chocolate'],
  },
  {
    id: 'halva',
    name: 'Dulce de Leche & Halva',
    image: images.halva,
    description: 'Hilos de halva y sésamo tostado sobre el dulce, cubierto en chocolate blanco.',
    dots: ['dulce', 'halva'],
  },
  {
    id: 'frutos-rojos',
    name: 'Frutos Rojos',
    image: images.frutosRojos,
    description: 'Compota de frutos rojos y dulce de leche entre tapas de cacao.',
    dots: ['dulce', 'frutosRojos'],
  },
  {
    id: 'malbec',
    name: 'Malbec',
    image: images.malbec,
    description:
      'Tapas de chocolate negro y una reducción de Malbec que se escapa cuando lo cortás.',
    dots: ['malbec', 'chocolate'],
  },
  {
    id: 'alfadubai',
    name: 'AlfaDubai',
    image: images.alfadubai,
    description: 'Relleno de pistacho y kadaif crocante, entero en chocolate negro.',
    dots: ['pistacho', 'chocolate'],
  },
  {
    id: 'blanut',
    name: 'BlaNut',
    image: images.blanut,
    description:
      'Nuez y crema entre tapas hojaldradas, con nuez también en la cobertura blanca.',
    dots: ['nuez', 'blanco'],
  },
  {
    id: 'proteina',
    name: 'Proteína',
    image: images.proteina,
    description: 'Tapas de proteína, relleno de dulce y nibs de cacao por encima.',
    dots: ['dulce', 'chocolate'],
  },
]

export function getFlavour(id: string): Flavour {
  const flavour = FLAVOURS.find((f) => f.id === id)
  if (!flavour) throw new Error(`Unknown flavour id: ${id}`)
  return flavour
}
