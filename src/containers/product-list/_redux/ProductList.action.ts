import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProductList } from '../_networks'

export const fetchProductListAction = createAsyncThunk(
  'productList/fetchProductListAction',
  async () => getProductList()
)
