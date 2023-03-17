import React, { useEffect, useState } from 'react';
import minus from '../resources/minus.png'
import minusInactiv from '../resources/minus_inactiv.png'
import plus from '../resources/plus.png'
import { useSelector, useDispatch } from 'react-redux'
import { inctPrice, decPrice } from '../redux/features/shop/sumPriceSlice'
import { decCount2, inctCount2 } from '../redux/features/shop/productsListSlice.js'

const ProductPrice = ({ price, discountPrice,counts,id}) => {
    const priceReal = price - discountPrice
    const [count, setCount] = useState(counts);
    const [priceCount, setPriceCount] = useState(priceReal)
    const [priceBeforDiscount, setPriceBeforDiscount] = useState(price)

    const formattedNumber =(defNumber) => {
        return defNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const dispatch = useDispatch()

    useEffect(() => {
        setPriceBeforDiscount(
            price * counts
        )
        setPriceCount(
            priceReal * counts
        )

    }, [count]);

    const increase = () => {
        setCount(count + 1);
        dispatch(inctPrice(priceReal))
        dispatch(inctCount2(id))
    }

    const decrease = () => {
        if (counts === 1) {
            return;
        }
        setCount(count - 1);
        dispatch(decPrice(priceReal))
        dispatch(decCount2(id))
    }
    return (
        <div className='product_price'>
            <div className='product_each_price'>
                {price !== priceReal ? <div className='product_old_price'>{formattedNumber(price)} ₽</div> : null}
                <div className='product_new_price'>{formattedNumber(priceReal)} ₽</div>
            </div>
            <div className='product_quanity'>
                {
                    counts == 1 ?
                        <img className='quanity_minus' onClick={decrease} src={minusInactiv} alt='img'></img>
                        : <img className='quanity_minus' onClick={decrease} src={minus} alt='img'></img>
                }
                <div className='quanity_count'>{counts}</div>
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