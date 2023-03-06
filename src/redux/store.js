import { configureStore } from '@reduxjs/toolkit'
import sumPriceReducer from './features/shop/sumPriceSlice';
import sumCountReducer from './features/shop/sumCountSlice.js';
import sumDiscountReducer from './features/shop/sumDiscountSlice.js';

export default configureStore({
	reducer: {
		sumPrice: sumPriceReducer,
		sumCount: sumCountReducer,
		sumDiscount: sumDiscountReducer,

	}
})