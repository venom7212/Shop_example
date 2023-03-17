import { createSlice } from '@reduxjs/toolkit'

export const sumCountSlice = createSlice({
    name: 'sumCount',
    initialState: {
        sumCountProduct: 2,
    },
    reducers: {
        inctCount: (state, action) => {
            state.sumCountProduct += 1

        },
        decCount: (state, action) => {
            state.sumCountProduct -= 1
        },
    }
})
export const { inctCount, decCount } = sumCountSlice.actions

export default sumCountSlice.reducer
