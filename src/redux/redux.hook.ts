import { useDispatch } from 'react-redux'
import { AppDispatch } from './redux.store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export { useSelector as useAppSelector } from 'react-redux'
