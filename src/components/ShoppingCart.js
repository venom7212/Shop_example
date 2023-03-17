import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import activeOff from '../resources/active_off.png'
import activeOn from '../resources/active_on.png'
import grey_line from '../resources/grey_line.png'
import {
    sumDiscountProduct2,
    sumDiscountSales3,
    sumDiscountPromo3,
    sumTotalDisc2,
    totalPrice3,
    sumDiscountDelivery2
} from '../redux/features/shop/productsListSlice.js'



const ShoppingCart = () => {
    const sumDiscountProduct = useSelector(state => state.productsList.sumDiscountProduct)
    const sumDiscountSales2 = useSelector(state => state.productsList.sumDiscountSales)
    const sumDiscountPromo2 = useSelector(state => state.productsList.sumDiscountPromo)
    const sumTotalDisc = useSelector(state => state.productsList.sumTotalDisc)
    const totalPrice2 = useSelector(state => state.productsList.totalPrice2)
    const sumDiscountDelivery = useSelector(state => state.productsList.sumDiscountDelivery)

    const dispatch = useDispatch()
    const sumCount = useSelector(state => state.productsList.sumCount)
    const [promoVerification, setPromoVerification] = useState('');
    const [isActive, setActive] = useState(false);
    const formattedNumber = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    const changeDelivery = () => {
        if (isActive === false) {
            setActive(
                true
            )
            dispatch(sumDiscountDelivery2(0))
        } else {
            setActive(
                false
            )
            dispatch(sumDiscountDelivery2(200))
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
                dispatch(sumDiscountPromo3(700))
                break
            case '666':
                dispatch(sumDiscountPromo3(500))
                break
            case '123':
                dispatch(sumDiscountPromo3(100))
                break
            default:
                dispatch(sumDiscountPromo3(0))
        }
    }
    useEffect(() => {
        dispatch(sumDiscountProduct2())
        dispatch(sumDiscountSales3())
        dispatch(sumTotalDisc2())
        dispatch(totalPrice3())
    }, [sumCount], [sumDiscountPromo2]);

    return (
        <div className='shopping_cart'>
            <div className='cart_numbers'>
                <div className='cart_summ'>Товары</div>
                <div className='cart_summ_num'>{formattedNumber(sumDiscountProduct)} ₽</div>
            </div>
            <div className='cart_safe_money'>
                <div className='cart_discount'>
                    <div className='discount_discount'>Скидка</div>
                    {sumTotalDisc === 0 ? <div className='discount_value'> 0 ₽</div> : <div className='discount_value'>- {formattedNumber(sumTotalDisc)} ₽</div>}

                </div>
                <div className='cart_promo'>
                    <div className='discount_promo'>Акции</div>
                    {sumDiscountSales2 === 0 ? <div className='promo_value'> 0 ₽</div> : <div className='promo_value'>- {formattedNumber(sumDiscountSales2)} ₽</div>}

                </div>
                <div className='cart_code'>
                    <div className='discount_code'>Промокод</div>
                    {sumDiscountPromo2 === 0 ? <div className='code_value'> 0 ₽</div> : <div className='code_value'>- {formattedNumber(sumDiscountPromo2)} ₽</div>}
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
                                isActive === false ?
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
                <div className='total_num'>{formattedNumber(totalPrice2)} ₽</div>
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
