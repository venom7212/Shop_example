import { createSlice } from '@reduxjs/toolkit'

export const yandexMapSlice = createSlice({
    name: 'yandexMap',
    initialState: {
        // const defState = { center: [55.75, 37.57], zoom: 12 }
        center: [55.75, 37.57],
        zoom: 12,
        // placemark:[57.10179281015839, 65.56507499552873],
        placemark:['',''],

        // adress:{
        //     value:'г Тюмень, ул Федюнинского, д 56'
        // }
        adress:[
            {value:0}        
        ]
        // sumDiscountAll: 2500,
        // sumDiscountTotal: 10200,
    },
    reducers: {
        setCenter: (state, action) => {
            state.center = action.payload
        },
        setZoom: (state, action) => {
            state.zoom = action.payload
        },
        setPlacemark: (state, action) => {
            state.placemark = action.payload
        },
        setAdress: (state, action) => {
            state.adress = action.payload
        },
    }
})
export const { setCenter,setZoom,setPlacemark,setAdress } = yandexMapSlice.actions



export default yandexMapSlice.reducer





