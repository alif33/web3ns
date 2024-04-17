import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = useAppDispatch<AppDispatch>
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
export const useAppStore = useStore<AppStore>