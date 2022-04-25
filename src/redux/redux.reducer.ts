import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productListSlice from '@containers/product-list/_redux/ProductList.slice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [],
}

const reducer = combineReducers({
  productList: productListSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer
