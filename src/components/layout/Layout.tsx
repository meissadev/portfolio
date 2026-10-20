import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LocaleProvider, defaultLocale, useI18n } from '../../i18n'
import Footer from './Footer'
import Header from './Header'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function SkipLink() {
  const { t } = useI18n()
  return (
    <a
      href="#contenu"
      className="sr-only z-50 rounded-md bg-primary px-4 py-2 font-medium text-on-primary focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {t.skipLink}
    </a>
  )
}

export default function Layout() {
  return (
    <LocaleProvider locale={defaultLocale}>
      {/* reducedMotion="user" : animations coupées si « réduire les animations » est activé */}
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <ScrollManager />
          <SkipLink />
          <Header />
          <main id="contenu" tabIndex={-1} className="outline-none">
            <Outlet />
          </main>
          <Footer />
        </LazyMotion>
      </MotionConfig>
    </LocaleProvider>
  )
}
