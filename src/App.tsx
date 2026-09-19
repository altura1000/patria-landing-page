import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './i18n/LanguageContext'
import HomePage from './pages/HomePage'
import SaboresPage from './pages/SaboresPage'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sabores" element={<SaboresPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
