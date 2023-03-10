import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import circle from '../resources/knob.png'
import track from '../resources/track.png'
import grey_line from '../resources/grey_line.png'
import { setDeliveryState } from '../redux/features/shop/sumDiscountSlice.js'
import { setPromoValue } from '../redux/features/shop/sumDiscountSlice.js'


const ShoppingCart = () => {
    const sumDiscount = useSelector(state => state.sumDiscount.sumDiscountProduct)
    const sumDiscountSales = useSelector(state => state.sumDiscount.sumDiscountSales)
    const sumDiscountPromo = useSelector(state => state.sumDiscount.sumDiscountPromo)
    const sumDiscountDelivery = useSelector(state => state.sumDiscount.sumDiscountDelivery)
    const sumPriceState = useSelector(state => state.sumPrice.sumPriceProduct)

    const [promoVerification, setPromoVerification] = useState('');
    const [isActive, setActive] = useState(false);

    const totalDisc = sumDiscountSales + sumDiscountPromo
    const totalPrice = sumPriceState - sumDiscountPromo + sumDiscountDelivery
    const buttonStyle = `track_div ${isActive ? 'trackOff_div' : ''}`


    const dispatch = useDispatch()

    const changeDelivery = () => {
        if (isActive === false) {
            setActive(
                true
            )
            dispatch(setDeliveryState(200))
        } else {
            setActive(
                false
            )
            dispatch(setDeliveryState(0))
        }
        setActive(
            !isActive
        )
    }

    const testF = () => {
        console.log('Zakaz oformlen')
    }

    // const inputHandler = (e, code) => {
    //     const value = e.currentTarget.value
    //     code(value)
    //     console.log(promoVerification)
    //     if (promoVerification == '777') {
    //         dispatch(setPromoValue(700))
    //     }
    //     if (promoVerification == '666') {
    //         dispatch(setPromoValue(500))

    //     }
    //     if (promoVerification == '123') {
    //         dispatch(setPromoValue(100))

    //     }
    //     else {
    //         dispatch(setPromoValue(0))
    //     }
    // }
    const inputHandler = (e, code) => {
        const value = e.currentTarget.value
        code(value)
        const promoVerification = value.trim().toLowerCase()
        switch(promoVerification) {
          case '777':
            dispatch(setPromoValue(700))
            break
          case '666':
            dispatch(setPromoValue(500))
            break
          case '123':
            dispatch(setPromoValue(100))
            break
          default:
            dispatch(setPromoValue(0))
        }
      }
    
    return (
        <div className='shopping_cart'>
            <div className='cart_numbers'>
                <div className='cart_summ'>????????????</div>
                <div className='cart_summ_num'>{sumDiscount} ???</div>
            </div>
            <div className='cart_safe_money'>
                <div className='cart_discount'>
                    <div className='discount_discount'>????????????</div>
                    <div className='discount_value'>- {totalDisc} ???</div>
                </div>
                <div className='cart_promo'>
                    <div className='discount_promo'>??????????</div>
                    <div className='promo_value'>- {sumDiscountSales} ???</div>
                </div>
                <div className='cart_code'>
                    <div className='discount_code'>????????????????</div>
                    {sumDiscountPromo === 0 ? <div className='code_value'> 0 ???</div> : <div className='code_value'>- {sumDiscountPromo} ???</div>}
                </div>
            </div>
            <div className='cart_delivery'>
                <div className='delivery_delivery'>????????????????</div>
                <div className='delivery_value'>{sumDiscountDelivery} ???</div>
            </div>
            <img className='grey_line' src={grey_line} alt='img'></img>
            <div className='tovar_so_sklada'>
                <div className='tovar_sklad'>
                    <div className='tovad_take'>???????????????? ?????????? ???? ????????????</div>
                    <div className='sklad_togle'>
                        <div className='test_btn' onClick={changeDelivery}>
                            <div className='circle_div'>
                                <img className='circle_img' src={circle} alt='img'></img>
                            </div>
                            <div className={buttonStyle}>
                                <img className='track_img' src={track} alt='img'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='srok_delivery'>?????????? ?????????????????? ?????????? ????????????????????</div>
            </div>
            <img className='grey_line' src={grey_line} alt='img'></img>
            <div className='total_summ'>
                <div className='total_text'>??????????:</div>
                <div className='total_num'>{totalPrice} ???</div>
            </div>
            <input
                className='input_promo'
                value={promoVerification}
                placeholder='?????????????? ???????????????? 123, 666, 777 '
                onChange={(e) => (inputHandler(e, setPromoVerification))}>
            </input>
            <button className='button_accept' onClick={testF}>???????????????? ??????????</button>
            <div className='accept_order'>?????????????? ???????????? ??????????????????? ?????????????, ???? ???????????????????????? ?? ?????????????????? ????????????????????????????????????.</div>
        </div>
    )
}


export default ShoppingCart;
