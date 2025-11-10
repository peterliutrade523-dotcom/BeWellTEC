import '../styles/globals.css'
import Layout from '../components/Layout'
import { LocaleProvider } from '../lib/locale'

export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocaleProvider>
  )
}

