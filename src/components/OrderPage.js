import React from 'react';
import './OrderPage.css';
import logo from '../resources/logo.png'
import grey_line from '../resources/grey_line.png'
import search from '../resources/search.png'
import account from '../resources/account.png'
import favorite from '../resources/favorite.png'
import products from '../resources/products.png'
import item_1 from '../resources/item_1.png'
import item_2 from '../resources/item_2.png'
import icon from '../resources/icon.png'
import plus from '../resources/plus.png'
import minus from '../resources/minus.png'
import maps from '../resources/maps.png'
import toggle from '../resources/toggle.png'




const OrderPage = () => {


    return (
        <div className='order_page'>
            <div className='header_menu'>
                <div className='left_menu'>
                    <div className='catalog'>Каталог</div>
                    <div className='about company'>О компании</div>
                    <div className='magazins'>Магазины</div>
                </div>
                <img className='logo' src={logo} alt='img'></img>
                <div className='right_menu'>
                    <img className='search_btn' src={search} alt='img'></img>
                    <img className='account_btn' src={account} alt='img'></img>
                    <img className='favorite_btn' src={favorite} alt='img'></img>
                    <img className='products_btn' src={products} alt='img'></img>
                </div>
            </div>
            <div className='grey_line2' >
                <img className='grey_line1' src={grey_line} alt='img'></img>
            </div>
            <div className='breadcrumbs'>
                <div className='breadcrumb_main'>Главная</div>
                <div className='breadcrumb_slesh'>/</div>
                <div className='breadcrumb_order'>Оформление заказа</div>
            </div>
            <div className='CHTO_ZDES'>  {/* CHTO_ZDES */}
                <div className='order_shopping'>
                    <div className='headline_order'>
                        <div className='headline'>
                            <div className='reg_40'>Оформление заказа</div>
                            <div className='div_acc_in'>
                                <div className='est_account'>Есть аккаунт?</div>
                                <div className='go_in'>Войти</div>
                            </div>
                        </div>
                        <div className='order'>
                            <div className='summ_orders'>3 товара на сумму 25 000 ₽</div>
                            <img className='grey_line' src={grey_line} alt='img'></img>

                            <div className='products'>
                                <div className='product_card'>
                                    <div className='product_card_left_side'>
                                        <img className='product_img' src={item_1} alt='img'></img>
                                        <div className='product_all_info'>
                                            <div className='product_name'>Утепленная стеганная куртка женская Top Hills</div>
                                            <div className='product_info'>
                                                <div className='product_articl'>
                                                    <div className='articl'>Артикул</div>
                                                    <div className='articl_number'>512-05</div>
                                                </div>
                                                <div className='product_season'>
                                                    <div className='season'>Сезон</div>
                                                    <div className='season_name'>Осень-зима</div>
                                                </div>
                                                <div className='product_sizes'>
                                                    <div className='size_xs'>XS</div>
                                                    <div className='size_s'>S</div>
                                                    <div className='size_m'>M</div>
                                                    <div className='size_l'>L</div>
                                                    <div className='size_xl'>XL</div>
                                                </div>
                                                <div className='product_color'>
                                                    <div className='color_black'>
                                                        <input type="radio" className='color_black_radio' name="123" id="black" value="black" checked></input>

                                                    </div>
                                                    <div className='color_blue'>
                                                        <input type="radio" className='color_blue_radio' name="123" id="blue" value="blue" checked></input>

                                                    </div>
                                                    <div className='color_brown'>
                                                        <input type="radio" className='color_brown_radio' name="123" id="brown" value="brown" checked></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='product_price_and_delete'>
                                        <div className='product_price'>
                                            <div className='product_each_price'>
                                                <div className='product_old_price'>12 000 ₽</div>
                                                <div className='product_new_price'>10 000 ₽</div>
                                            </div>
                                            <div className='product_quanity'>
                                                <img className='quanity_minus' src={minus} alt='img'></img>
                                                <div className='quanity_count'>2</div>
                                                <img className='quanity_plus' src={plus} alt='img'></img>
                                            </div>
                                            <div className='product_summ_price'>
                                                <div className='product_old_price'>24 000 ₽</div>
                                                <div className='product_new_price'>20 000 ₽</div>
                                            </div>
                                        </div>
                                        <div className='div_delete'>
                                            <img className='product_delete' src={icon} alt=''></img>
                                        </div>

                                    </div>

                                </div>
                                <img className='grey_line' src={grey_line} alt='img'></img>

                                <div className='product_restore'>
                                    <div className='product_restore_name'>Товар Наименование товара был удален из корзины.</div>
                                    <div className='product_restore_backup'>Восстановить</div>
                                    <img className='product_restore_delete' src={icon} alt=''></img>
                                </div>
                                <img className='grey_line' src={grey_line} alt='img'></img>

                                <div className='product_card'>
                                    <div className='product_card_left_side'>
                                        <img className='product_img' src={item_2} alt='img'></img>
                                        <div className='product_all_info'>
                                            <div className='product_name'>Вязанная шапка Zolla</div>
                                            <div className='product_info'>
                                                <div className='product_articl'>
                                                    <div className='articl'>Артикул</div>
                                                    <div className='articl_number'>891-256</div>
                                                </div>
                                                <div className='product_season'>
                                                    <div className='season'>Сезон</div>
                                                    <div className='season_name'>Демисезон</div>
                                                </div>
                                                <div className='product_sizes'>
                                                    <div className='size_xs'>XS</div>
                                                    <div className='size_s'>S</div>
                                                    <div className='size_m'>M</div>
                                                    <div className='size_l'>L</div>
                                                    <div className='size_xl'>XL</div>
                                                </div>
                                                <div className='product_color'>
                                                    <div className='color_black'>
                                                        <input type="radio" className='color_black_radio' name="123" id="black" value="black" checked></input>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='product_price_and_delete'>
                                        <div className='product_price'>
                                            <div className='product_each_price'>
                                                <div className='product_old_price'> </div>
                                                <div className='product_new_price'>500 ₽</div>
                                            </div>
                                            <div className='product_quanity'>
                                                <img className='quanity_minus' src={minus} alt='img'></img>
                                                <div className='quanity_count'>2</div>
                                                <img className='quanity_plus' src={plus} alt='img'></img>
                                            </div>
                                            <div className='product_summ_price'>
                                                <div className='product_old_price'> </div>
                                                <div className='product_new_price'>500 ₽</div>
                                            </div>
                                        </div>
                                        <div className='div_delete'>
                                            <img className='product_delete' src={icon} alt=''></img>
                                        </div>
                                    </div>

                                </div>
                                <img className='grey_line' src={grey_line} alt='img'></img>

                            </div>
                        </div>
                    </div>
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
                </div>
                <div className='bottom_info'>
                    <div className='contacts_info'>
                        <div className='all_contacts_info'>
                            <div className='contacts'>Контактные данные</div>
                            <div className='info_con'>
                                <div className='contacts_name_second'>
                                    <input className='contacts_name' value='Александр' placeholder='Имя'></input>
                                    <input className='contacts_second_name' placeholder='Фамилия'></input>
                                </div>
                                <div className='contacts_phone_email'>
                                    <input className='contacts_phone' placeholder='Телефон'></input>
                                    <input className='contacts_email' placeholder='Email'></input>
                                </div>
                                <div>
                                    <input className='contacts_adress' value='г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152' placeholder=''></input>
                                    <img className='search_adress' src={search} alt='img'></img>
                                </div>
                            </div>
                        </div>
                        <div className='pay_info'>
                            <div className='pay_info_header'>Оплата</div>
                            <div className='cash'>
                                <input type="radio" name="123" id="pay_cash" value="pay_cash" checked></input>
                                <div className='pay_info_radio'>Наличными курьеру</div>
                            </div>
                            <div className='card'>
                                <input type="radio" name="123" id="pay_card" value="pay_card" checked></input>
                                <div className="pay_info_radio">Картой курьеру</div>
                            </div>
                            <div className='online'>
                                <input type="radio" name="123" id="pay_online" value="pay_online" checked></input>
                                <div className="pay_info_radio">Картой онлайн</div>
                            </div>
                        </div>
                        <div className='pay_comment'>
                            <div className='pay_comment_header'>Комментарий к заказу</div>
                            <textarea className='pay_comment_input' placeholder='Комментарий к заказу'></textarea>
                            <div className='pay_comment_symbol'>Использовано 0/142 символов</div>
                        </div>
                    </div>
                    <div className='contacts_map'>
                        <img className='maps' src={maps} alt='img'></img>
                    </div>
                </div>

            </div>


        </div>

    )


}

export default OrderPage


