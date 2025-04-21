import { SessionProvider } from 'next-auth/react'
import Layout from '../components/Layout'
import { VereinProvider } from '../context/VereinContext'
import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <VereinProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </VereinProvider>
    </SessionProvider>
  )
}