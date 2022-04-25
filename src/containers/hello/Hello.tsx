import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/redux.hook'
import { productListSelector } from '@containers/product-list/_redux/ProductList.slice'
import { fetchProductListAction } from '@containers/product-list/_redux/ProductList.action'

const Hello = () => {
  const dispatch = useAppDispatch()
  const productList = useAppSelector(productListSelector)

  const fetchData = useCallback(() => {
    dispatch(fetchProductListAction())
  }, [dispatch])

  useEffect(() => {
    fetchData()

    return () => {}
  }, [fetchData])

  console.info('productList', productList)

  return <div>hello page</div>
}

export default Hello
