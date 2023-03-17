import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './OrderPage.css';
import logo from '../resources/logo.png'
import grey_line from '../resources/grey_line.png'
import search from '../resources/search.png'
import account from '../resources/account.png'
import favorite from '../resources/favorite.png'
import bag from '../resources/bag.png'

import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart';
import Maps from './Maps';
import SearchInput from './SearchInput';
import BurgerMenu from './BurgerMenu';
import { sumPrice2 } from '../redux/features/shop/productsListSlice.js'




const OrderPage = () => {
    const productsList = useSelector(state => state.productsList.list)
    const sumCount = useSelector(state => state.productsList.sumCount)
    const sumPrice = useSelector(state => state.productsList.sumPrice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sumPrice2())
    }, [sumCount]);



    const getProductCards = () => {
        return productsList.map((item, index) => {
            return <ProductCard productsData={item} key={index} id={item.id} isRemoved={item.isRemoved} counts={item.counts} />
        });

    }
    const formattedNumber = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

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
                    <BurgerMenu />
                    <img className='search_btn' src={search} alt='img'></img>
                    <img className='account_btn' src={account} alt='img'></img>
                    <img className='favorite_btn' src={favorite} alt='img'></img>
                    <img className='products_btn' src={bag} alt='img'></img>
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
                            <div className='summ_orders'>{sumCount} товара на сумму {formattedNumber(sumPrice)} ₽</div>
                            <img className='grey_line' src={grey_line} alt='img'></img>
                            <div className='products'>
                                {productsList.length ? getProductCards() : <p>Добавьте товар в корзину</p>}
                            </div>
                        </div>
                    </div>
                    <div className='ShoppingCart_1240'><ShoppingCart /></div>
                </div>
                <div className='bottom_info'>
                    <div className='contacts_info'>
                        <div className='all_contacts_info'>
                            <div className='contacts'>Контактные данные</div>
                            <div className='info_con'>
                                <div className='contacts_name_second'>
                                    <input className='contacts_name' placeholder='Имя'></input>
                                    <input className='contacts_second_name' placeholder='Фамилия'></input>
                                </div>
                                <div className='contacts_phone_email'>
                                    <input className='contacts_phone' placeholder='Телефон'></input>
                                    <input className='contacts_email' placeholder='Email'></input>
                                </div>
                                <div className='search_contacts_adress'>
                                    {/* <input className='contacts_adress' value='г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152' placeholder=''></input> */}
                                    <SearchInput />
                                    <img className='search_adress' src={search} alt='img'></img>
                                </div>
                            </div>
                        </div>
                        <div className='contacts_map'>
                            <div className='maps'>
                                <Maps />
                            </div>
                        </div>

                    </div>
                    <div className='kekw'>
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
                    <div className='ShoppingCart_1239'><ShoppingCart /></div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage


