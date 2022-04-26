import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/redux.hook'
import { productCartSelector } from '@containers/product-cart/_redux/ProductCart.slice'
import { productCartAction } from '@containers/product-cart/_redux/ProductCart.slice'

const ProductCart = () => {
  const { data = [] } = useAppSelector(productCartSelector)

  const dispatch = useAppDispatch()

  const removeOne = (id: number) => {
    dispatch(productCartAction.removeOne(id))
  }

  return (
    <div>
      <h1>Cart: </h1>
      <ul>
        {data.length > 0 &&
          data.map((item) => (
            <li key={item.id}>
              <p>
                {item.title}{' '}
                <button onClick={() => removeOne(item.id)}>Remove</button>
              </p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProductCart
