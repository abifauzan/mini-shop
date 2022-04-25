import { apiRequest, ApiResponse } from '@configs/axios'
import { IProductList } from './ProductList.interface'

export const getProductList = async () => {
  const response: ApiResponse<IProductList[]> = await apiRequest({
    path: '/products',
    method: 'GET',
  })

  return response?.data
}
