import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '@redux/redux.store'
import dynamic from 'next/dynamic'

const Cart = dynamic(() => import('@containers/product-cart'))

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Cart />
      <Component {...pageProps} />
    </div>
  )
}

const AppWrapper = (props: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  )
}

export default AppWrapper
