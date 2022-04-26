import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productListSlice from '@containers/product-list/_redux/ProductList.slice'
import productCartSlice from '@containers/product-cart/_redux/ProductCart.slice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['productCart'],
}

const reducer = combineReducers({
  productList: productListSlice.reducer,
  productCart: productCartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer
