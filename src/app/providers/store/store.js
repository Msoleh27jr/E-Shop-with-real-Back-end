import { configureStore } from '@reduxjs/toolkit'
import    getProduct   from '../../../features/getProducts/GetProduct'

export const store=configureStore({
  reducer: {
    todolist : getProduct
  }
})