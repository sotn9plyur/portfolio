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

// Not waiting on document.fonts.ready here on purpose: font-display: swap
// already lets text render with a fallback the instant it's laid out, so
// gating the preloader on the ~3.5MB of custom fonts finishing download too
// just makes people stare at a spinner for no visual benefit.
pageLoaded.then(hidePreloader)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
)
