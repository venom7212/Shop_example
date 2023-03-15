import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import activeOff from '../resources/active_off.png'
import activeOn from '../resources/active_on.png'
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

    const formattedNumber =(x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

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

    const inputHandler = (e, code) => {
        const value = e.currentTarget.value
        code(value)
        const promoVerification = value.trim().toLowerCase()
        switch (promoVerification) {
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
                <div className='cart_summ'>Товары</div>
                <div className='cart_summ_num'>{formattedNumber(sumDiscount)} ₽</div>
            </div>
            <div className='cart_safe_money'>
                <div className='cart_discount'>
                    <div className='discount_discount'>Скидка</div>
                    <div className='discount_value'>- {formattedNumber(totalDisc)} ₽</div>
                </div>
                <div className='cart_promo'>
                    <div className='discount_promo'>Акции</div>
                    <div className='promo_value'>- {formattedNumber(sumDiscountSales)} ₽</div>
                </div>
                <div className='cart_code'>
                    <div className='discount_code'>Промокод</div>
                    {sumDiscountPromo === 0 ? <div className='code_value'> 0 ₽</div> : <div className='code_value'>- {formattedNumber(sumDiscountPromo)} ₽</div>}
                </div>
            </div>
            <div className='cart_delivery'>
                <div className='delivery_delivery'>Доставка</div>
                <div className='delivery_value'>{formattedNumber(sumDiscountDelivery)} ₽</div>
            </div>
            <img className='grey_line' src={grey_line} alt='img'></img>
            <div className='tovar_so_sklada'>
                <div className='tovar_sklad'>
                    <div className='tovad_take'>Получить товар со склада</div>
                    <div className='sklad_togle'>

                        <div className='test_btn' onClick={changeDelivery}>
                            {
                                isActive == false ?
                                    <img className='' src={activeOff} alt='img'></img>
                                    : <img className='' src={activeOn} alt='img'></img>
                            }
   

                        </div>

                    </div>
                </div>
                <div className='srok_delivery'>Сроки получения могут измениться</div>
            </div>
            <img className='grey_line' src={grey_line} alt='img'></img>
            <div className='total_summ'>
                <div className='total_text'>Итого:</div>
                <div className='total_num'>{formattedNumber(totalPrice)} ₽</div>
            </div>
            <input
                className='input_promo'
                value={promoVerification}
                placeholder='Введите промокод 123, 666, 777 '
                onChange={(e) => (inputHandler(e, setPromoVerification))}>
            </input>
            <button className='button_accept' onClick={testF}>Оформить заказ</button>
            <div className='accept_order'>Нажимая кнопку “Оформить заказ”, Вы соглашаетесь с политикой конфиденциальности.</div>
        </div>
    )
}


export default ShoppingCart;
