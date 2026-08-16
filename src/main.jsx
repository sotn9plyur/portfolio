import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

const hidePreloader = () => {
  const preloader = document.getElementById('preloader')

  if (!preloader) return

  preloader.classList.add('preloader--hidden')
  preloader.addEventListener('transitionend', () => preloader.remove(), {
    once: true,
  })
}

const pageLoaded =
  document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise((resolve) =>
        window.addEventListener('load', resolve, { once: true }),
      )

const fontsLoaded = document.fonts?.ready ?? Promise.resolve()

Promise.all([pageLoaded, fontsLoaded]).then(hidePreloader)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
)
