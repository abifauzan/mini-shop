import styled from 'styled-components'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/redux.hook'
import { productListSelector } from '@containers/product-list/_redux/ProductList.slice'
import { fetchProductListAction } from '@containers/product-list/_redux/ProductList.action'
import { productCartAction } from '@containers/product-cart/_redux/ProductCart.slice'
import { IProductList } from './_networks/ProductList.interface'

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const Box = styled.div`
  min-width: 150px;
  background: lightblue;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
`

const ProductList = () => {
  const dispatch = useAppDispatch()
  const { data = [], isLoading, isError } = useAppSelector(productListSelector)

  const fetchData = useCallback(() => {
    dispatch(fetchProductListAction())
  }, [dispatch])

  const handleClick = (item: IProductList) => {
    productCartAction.addOne
    dispatch(productCartAction.addOne(item))
  }

  useEffect(() => {
    fetchData()

    return () => {}
  }, [fetchData])

  if (isError) {
    return <div>Error...</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      {data.length > 0 &&
        data.map((item) => (
          <Box key={item.id} role="button" onClick={() => handleClick(item)}>
            <p>{item.title}</p>
          </Box>
        ))}
    </Container>
  )
}

export default ProductList
