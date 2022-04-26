import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductList } from '@containers/product-list/_networks/ProductList.interface'
import { RootState } from '@redux/redux.store'

interface IState {
  data: IProductList[]
}

const initialState: IState = {
  data: [],
}

const productCartSlice = createSlice({
  name: 'productCart',
  initialState,
  reducers: {
    addOne: (state, action: PayloadAction<IProductList>) => ({
      ...state,
      data: [...state.data, action.payload],
    }),
    removeOne: (state, action: PayloadAction<number>) => ({
      ...state,
      data: state.data.filter((value) => value.id !== action.payload),
    }),
  },
})

export const productCartSelector = (state: RootState) => state.productCart
export const productCartAction = productCartSlice.actions

export default productCartSlice
