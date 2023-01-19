import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletContext, WalletContextProvider } from '../contexts'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <WalletContextProvider>
    <Component {...pageProps} />
  </WalletContextProvider>)
}
