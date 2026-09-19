import Artesanal from '../components/home/Artesanal'
import Destacados from '../components/home/Destacados'
import FloatingOrderButton from '../components/home/FloatingOrderButton'
import Footer from '../components/home/Footer'
import Hero from '../components/home/Hero'
import Historia from '../components/home/Historia'
import HomeHeader from '../components/home/HomeHeader'
import InfoStrip from '../components/home/InfoStrip'
import Manifiesto from '../components/home/Manifiesto'
import OrderCta from '../components/home/OrderCta'
import Pedido from '../components/home/Pedido'
import PrimeraVez from '../components/home/PrimeraVez'
import Prueba from '../components/home/Prueba'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useCopy } from '../i18n/LanguageContext'

export default function HomePage() {
  useDocumentTitle(useCopy().meta.homeTitle)
  return (
    <div>
      <HomeHeader />
      <Hero />
      <InfoStrip />
      <Manifiesto />
      <Destacados />
      <Historia />
      <Artesanal />
      <Prueba />
      <PrimeraVez />
      <Pedido />
      <OrderCta />
      <Footer />
      <FloatingOrderButton />
    </div>
  )
}
