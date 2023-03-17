import { configureStore } from '@reduxjs/toolkit'
import sumPriceReducer from './features/shop/sumPriceSlice';
import sumCountReducer from './features/shop/sumCountSlice.js';
import productsListReducer from './features/shop/productsListSlice.js';
import yandexMapReducer from './yandexMapSlice.js';



export default configureStore({
	reducer: {
		productsList: productsListReducer,
		sumPrice: sumPriceReducer,
		sumCount: sumCountReducer,
		yandexMap:yandexMapReducer
	}
})

