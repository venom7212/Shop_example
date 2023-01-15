import React, { useEffect, useState } from 'react';
import minus from '../resources/minus.png'
import plus from '../resources/plus.png'



const ProductPrice = ({ price, discountPrice }) => {
    const priceReal = price - discountPrice
    const [count, setCount] = useState(1);
    const [priceCount, setPriceCount] = useState(priceReal)
    const [priceBeforDiscount, setPriceBeforDiscount] = useState(price)

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
    }

    const decrease = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    }

    return (
        <div className='product_price'>
            <div className='product_each_price'>
                {price !== priceReal ? <div className='product_old_price'>{price} ₽</div> : null}
                <div className='product_new_price'>{priceReal} ₽</div>
            </div>
            <div className='product_quanity'>
                <img className='quanity_minus' onClick={decrease} src={minus} alt='img'></img>
                <div className='quanity_count'>{count}</div>
                <img className='quanity_plus' onClick={increase} src={plus} alt='img'></img>
            </div>
            <div className='product_summ_price'>
            {price !== priceReal ? <div className='product_old_price'>{priceBeforDiscount} ₽</div> :null}
                <div className='product_new_price'>{priceCount} ₽</div>
            </div>
        </div>
    )
}




export default ProductPrice