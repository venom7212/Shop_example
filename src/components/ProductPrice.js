import React, { useEffect, useState } from 'react';
import minus from '../resources/minus.png'
import minusInactiv from '../resources/minus_inactiv.png'
import plus from '../resources/plus.png'
import plusInactiv from '../resources/plus_inactiv.png'
import { useSelector, useDispatch } from 'react-redux'
import { inctPrice, decPrice } from '../redux/features/shop/sumPriceSlice'
import { decCount, inctCount } from '../redux/features/shop/sumCountSlice.js'
import { incSumDisc, decSumDisc, incSalesDisc, decSalesDisc } from '../redux/features/shop/sumDiscountSlice.js'





const ProductPrice = ({ price, discountPrice }) => {
    const priceReal = price - discountPrice
    const [count, setCount] = useState(1);
    const [priceCount, setPriceCount] = useState(priceReal)
    const [priceBeforDiscount, setPriceBeforDiscount] = useState(price)
    const [sumDiscountProduct, setSumDiscountProduct] = useState(price)

    const formattedNumber =(x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const dispatch = useDispatch()

    useEffect(() => {

        setPriceBeforDiscount(
            price * count
        )
        setPriceCount(
            priceReal * count
        )

    }, [count]);

    const increase = () => {
        setCount(count + 1);
        dispatch(inctPrice(priceReal))
        dispatch(inctCount(count))
        dispatch(incSumDisc(sumDiscountProduct))
        dispatch(incSalesDisc(discountPrice))

    }

    const decrease = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
        dispatch(decPrice(priceReal))
        dispatch(decCount(count))
        dispatch(decSumDisc(sumDiscountProduct))
        dispatch(decSalesDisc(discountPrice))

    }

    return (
        <div className='product_price'>
            <div className='product_each_price'>
                {price !== priceReal ? <div className='product_old_price'>{formattedNumber(price)} ₽</div> : null}
                {/* <div className='product_new_price'>{priceReal} ₽</div> */}
                <div className='product_new_price'>{formattedNumber(priceReal)} ₽</div>

            </div>


            {/* <div>test : and{sumPriceState}</div> */}



            <div className='product_quanity'>
                {
                    count == 1 ?
                        <img className='quanity_minus' onClick={decrease} src={minusInactiv} alt='img'></img>
                        : <img className='quanity_minus' onClick={decrease} src={minus} alt='img'></img>
                }
                <div className='quanity_count'>{count}</div>

                <img className='quanity_plus' onClick={increase} src={plus} alt='img'></img>
            </div>
            <div className='product_summ_price'>
                {price !== priceReal ? <div className='product_old_price'>{formattedNumber(priceBeforDiscount)} ₽</div> : null}
                <div className='product_new_price'>{formattedNumber(priceCount)} ₽</div>
            </div>
        </div>
    )
}




export default ProductPrice