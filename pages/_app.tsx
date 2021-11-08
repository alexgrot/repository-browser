import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import 'tailwindcss/tailwind.css'
import Header from '../components/common/Header'
import { ManagedUIContext } from '../components/ui/context'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ManagedUIContext>
        <Header />
        <Component {...pageProps} />
      </ManagedUIContext>
    </>
  )
}

export default appWithTranslation(MyApp)
