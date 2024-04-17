'use client'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import authSlice from './slices/authSlice';
import userDetailsSlice from './slices/userDetailsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        "counter":counterSlice,
        'user':authSlice,
        'userDetails':userDetailsSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']