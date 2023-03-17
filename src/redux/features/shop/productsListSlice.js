import { createSlice } from '@reduxjs/toolkit';
import item_1 from '../../../resources/item_1.png'
import item_2 from '../../../resources/item_2.png'


export const productsListSlice = createSlice({
    name: 'productsList',
    initialState: {
        list: [
            {
                id: 0,
                name: 'Утепленная стеганная куртка женская Top Hills',
                articl: '512-05',
                season: 'Осень-зима',
                price: 12000,
                discountPrice: 2000,
                img: item_1,
                counts: 1,
                isRemoved: false,
                sizes: [
                    {
                        XS: 0,
                        S: 10,
                        M: 10,
                        L: 10,
                        XL: 10
                    }
                ],
                colors: [
                    {
                        black: 10,
                        blue: 10,
                        brown: 10,
                    }
                ],
            },
            {
                id: 1,
                name: 'Вязанная шапка Zolla',
                articl: '891-256',
                season: 'Демисезон',
                price: 500,
                discountPrice: 0,
                img: item_2,
                counts: 1,
                isRemoved: false,
                sizes: [
                    {
                        XS: 10,
                        S: 10,
                        M: 0,
                        L: 1,
                        XL: 10
                    }
                ],
                colors: [
                    {
                        black: 10,
                    }
                ],
            }
        ],
        sumCount: 2,
        sumPrice: 0,
        sumDiscountProduct: 0,
        sumDiscountSales: 0,
        sumDiscountPromo: 0,
        sumDiscountDelivery: 200,
        sumTotalDisc: 0,
        totalPrice2: 0,
    },
    reducers: {
        removeItem: (state, action) => {
            let id = action.payload
        state.list[id]['counts'] = 0
        state.sumCount = state.list[0]['counts'] + state.list[1]['counts'] 

        },
    inctCount2: (state, action) => {
        let id = action.payload
        state.list[id]['counts'] += 1
        state.sumCount += 1

    },
    decCount2: (state, action) => {
        let id = action.payload
        state.list[id]['counts'] -= 1
        state.sumCount -= 1
    },
    plusCountLogic2: (state, action) => {
        let a = state.list
        state.sumCount = a[0]['counts'] + a[1]['counts'] 
    },
    sumPrice2: (state, action) => {
        let a = state.list
        state.sumPrice = (a[0]['counts']*(a[0]['price']-a[0]['discountPrice'])) + (a[1]['counts']*(a[1]['price']-a[1]['discountPrice'])) 
        state.totalPrice2 = (state.sumPrice + state.sumDiscountDelivery - state.sumDiscountPromo)

    },
    sumDiscountProduct2: (state, action) => {
        let a = state.list
        state.sumDiscountProduct = (a[0]['counts']*(a[0]['price'])) + (a[1]['counts']*(a[1]['price'])) 
    },
    sumDiscountSales3: (state, action) => {
        let a = state.list
        state.sumDiscountSales = (a[0]['counts']*(a[0]['discountPrice'])) + (a[1]['counts']*(a[1]['discountPrice'])) 
    },
    sumDiscountPromo3: (state, action) => {
        state.sumDiscountPromo = action.payload
        state.sumTotalDisc = (state.sumDiscountPromo+state.sumDiscountSales)
        state.totalPrice2 = (state.sumPrice + state.sumDiscountDelivery - state.sumDiscountPromo)


    },
    sumTotalDisc2:(state, action) => {
        state.sumTotalDisc = (state.sumDiscountPromo+state.sumDiscountSales)
    },
    totalPrice3:(state, action) => {
        // state.totalPrice2 = (state.sumPrice + state.sumDiscountDelivery - state.sumDiscountPromo)
    },
    sumDiscountDelivery2:(state, action) => {
        state.sumDiscountDelivery = action.payload
        state.totalPrice2 = (state.sumPrice + state.sumDiscountDelivery - state.sumDiscountPromo)

    },
}

    })

export const { removeItem,inctCount2,decCount2,plusCountLogic2,sumPrice2,sumDiscountProduct2,sumDiscountSales3,sumDiscountPromo3,sumTotalDisc2,totalPrice3,sumDiscountDelivery2 } = productsListSlice.actions

export default productsListSlice.reducer

