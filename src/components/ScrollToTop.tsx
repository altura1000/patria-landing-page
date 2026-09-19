import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** New route → start at the top, like the approved multi-page HTML did. */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
