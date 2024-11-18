import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './components/redux/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})