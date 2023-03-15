import { createSlice } from '@reduxjs/toolkit'

export const sumDiscountSlice = createSlice({
    name: 'sumDiscount',
    initialState: {
        sumDiscountProduct: 12500,
        sumDiscountSales: 2000,
        // sumDiscountAll: 2500,
        sumDiscountPromo: 0,
        sumDiscountDelivery: 200,
        // sumDiscountTotal: 10200,
    },
    reducers: {
        incSumDisc: (state, action) => {
            state.sumDiscountProduct += action.payload
        },
        decSumDisc: (state, action) => {
            state.sumDiscountProduct -= action.payload
        },
        incSalesDisc: (state,action) =>{
            state.sumDiscountSales += action.payload
        },
        decSalesDisc: (state,action) =>{
            state.sumDiscountSales -= action.payload
        },
        setDeliveryState:(state, action) =>{
            state.sumDiscountDelivery = action.payload
        },
        setPromoValue:(state, action) =>{
            state.sumDiscountPromo = action.payload
        },

    }
})
export const { incSumDisc, decSumDisc,incSalesDisc,decSalesDisc,setDeliveryState,setPromoValue } = sumDiscountSlice.actions



export default sumDiscountSlice.reducer





