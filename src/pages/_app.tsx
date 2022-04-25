import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '@redux/redux.store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
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
