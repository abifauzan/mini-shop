import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const HelloPage = dynamic(() => import('@containers/hello'))

const Hello: NextPage = (): JSX.Element => <HelloPage />

export default Hello
