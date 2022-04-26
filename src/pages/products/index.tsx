import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ProductList = dynamic(() => import('@containers/product-list'))

const ProductListPage: NextPage = (): JSX.Element => <ProductList />

export default ProductListPage
