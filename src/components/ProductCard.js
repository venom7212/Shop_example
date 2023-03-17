import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import grey_line from '../resources/grey_line.png'
import icon from '../resources/icon.png'
import ProductPrice from '../components/ProductPrice'
import ProductSizes from '../components/ProductSizes'
import ProductColor from '../components/ProductColor'
import { decCount } from '../redux/features/shop/sumCountSlice.js'
import { removeItem, inctCount2 } from '../redux/features/shop/productsListSlice.js'



const ProductCard = ({ productsData, id, isRemoved, counts }) => {
    const { name, articl, season, price, discountPrice, img, sizes, colors } = productsData;

    const dispatch = useDispatch()

    const delCard = () => {
        dispatch(removeItem(id))
        dispatch(decCount(counts))

    }

    const recoveryCard = () => {
        dispatch(inctCount2(id))

    }

    return (
        <div >
            {
                counts >= 1 ?
                    <div>
                        <div className='product_card'>
                            <div className='product_card_left_side'>
                                <img className='product_img' src={img} alt='img'></img>
                                <div className='product_all_info'>
                                    <div className='product_name'>{name}</div>
                                    <div className='product_info'>
                                        <div className='product_articl'>
                                            <div className='articl'>Артикул</div>
                                            <div className='articl_number'>{articl}</div>
                                        </div>
                                        <div className='product_season'>
                                            <div className='season'>Сезон</div>
                                            <div className='season_name'>{season}</div>
                                        </div>

                                        <ProductSizes sizes={sizes} />
                                        <ProductColor colors={colors} />
                                    </div>
                                </div>
                            </div>
                            <div className='product_price_and_delete'>

                                <ProductPrice price={price} discountPrice={discountPrice} id={id} counts={counts} />

                            </div>
                            <div className='div_delete'>
                                <img className='product_delete' onClick={delCard} src={icon} alt=''></img>
                            </div>
                        </div>
                        <img className='grey_line' src={grey_line} alt='img'></img>
                    </div>

                    :

                    <div>
                        <div>
                            <div className='recoveryCard'>
                                <div className='texts'>
                                    <div className='delText'></div>
                                    <div className='text1'>Товар</div>
                                    <div className='text2'>{name}</div>
                                    <div className='text3'> был удален из корзины.</div>
                                </div>
                                <div className='recoveryBlock'>
                                    <div className='recoveryText' onClick={recoveryCard} >Восстановить</div>
                                    <div className='productRecoveryDiv' onClick={console.log('clear')}>
                                        <img className='productRecovery' src={icon} alt=''></img>
                                    </div>
                                </div>
                            </div>
                            <img className='grey_line' src={grey_line} alt='img'></img>
                        </div>
                    </div>
            }
        </div>
    )
}


export default ProductCard