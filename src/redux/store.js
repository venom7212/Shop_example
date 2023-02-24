import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/shop/cartSlice';

export default configureStore({
	reducer: {
		cart: cartReducer,
		// next slice,
	}
})