import React from 'react';
import toggle from '../resources/toggle.png'
import grey_line from '../resources/grey_line.png'




const ShoppingCart = () => {




    return (
        <div className='shopping_cart'>
    <div className='cart_numbers'>
        <div className='cart_summ'>Товары</div>
        <div className='cart_summ_num'>24 500 ₽</div>
    </div>
    <div className='cart_safe_money'>
        <div className='cart_discount'>
            <div className='discount_discount'>Скидка</div>
            <div className='discount_value'>- 4 500 ₽</div>
        </div>
        <div className='cart_promo'>
            <div className='discount_promo'>Акции</div>
            <div className='promo_value'>- 4 000 ₽</div>
        </div>
        <div className='cart_code'>
            <div className='discount_code'>Промокод</div>
            <div className='code_value'>- 500 ₽</div>
        </div>
    </div>
    <div className='cart_delivery'>
        <div className='delivery_delivery'>Доставка</div>
        <div className='delivery_value'>200 ₽</div>
    </div>
    <img className='grey_line' src={grey_line} alt='img'></img>
    <div className='tovar_so_sklada'>
        <div className='tovar_sklad'>
            <div className='tovad_take'>Получить товар со склада</div>
            <div className='sklad_togle'>
                <img src={toggle} alt='img'></img>
            </div>
        </div>
        <div className='srok_delivery'>Сроки получения могут измениться</div>
    </div>
    <img className='grey_line' src={grey_line} alt='img'></img>
    <div className='total_summ'>
        <div className='total_text'>Итого:</div>
        <div className='total_num'>20 700 ₽</div>
    </div>
    <input className='input_promo' placeholder='Введите промокод'></input>
    <button className='button_accept'>Оформить заказ</button>
    <div className='accept_order'>Нажимая кнопку “Оформить заказ”, Вы соглашаетесь с политикой конфиденциальности.</div>


</div>
    )

}


export default ShoppingCart;
