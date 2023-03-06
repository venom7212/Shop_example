import { createSlice } from '@reduxjs/toolkit'

export const sumPriceSlice = createSlice({
    name: 'sumPrice',
    initialState: {
        sumPriceProduct: 10500,
    },
    reducers: {
        inctPrice: (state, action) => {
            state.sumPriceProduct += action.payload

        },
        decPrice: (state, action) => {
            state.sumPriceProduct -= action.payload
        }
    }
})
export const { inctPrice, decPrice } = sumPriceSlice.actions



export default sumPriceSlice.reducer





