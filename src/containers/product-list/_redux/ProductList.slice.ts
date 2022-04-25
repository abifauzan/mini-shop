import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductList } from '../_networks/ProductList.interface'
import { fetchProductListAction } from './ProductList.action'
import { RootState } from '@redux/redux.store'

interface IState {
  data: IProductList[]
  isLoading: boolean
  isError: boolean
}

const initialState: IState = {
  data: [],
  isLoading: false,
  isError: false,
}

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProductListAction.fulfilled,
      (state, action: PayloadAction<IProductList[]>) => ({
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload,
      })
    )
    builder.addCase(fetchProductListAction.pending, (state) => ({
      ...state,
      isLoading: true,
      isError: false,
      data: [],
    }))
    builder.addCase(fetchProductListAction.rejected, (state) => ({
      ...state,
      isLoading: false,
      isError: true,
      data: [],
    }))
  },
})

export const productListSelector = (state: RootState) => state.productList
export const productListAction = productListSlice.actions

export default productListSlice
