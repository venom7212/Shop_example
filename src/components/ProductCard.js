import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


// import './ProductCard.css';
// import item_1 from '../resources/item_1.png'
// import item_2 from '../resources/item_2.png'

import icon from '../resources/icon.png'
// import grey_line from '../resources/grey_line.png'
import ProductPrice from '../components/ProductPrice'
import ProductSizes from '../components/ProductSizes'



const ProductCard = ({ productsData }) => {
    const { name, articl, season, price, discountPrice, img, sizes } = productsData;
    // const [productsDatatest, setProductsDatatest] = useState(productsData)
    // const { name, articl, season, price, discountPrice, img } = productsDatatest;
    // const itemsFromRedux = useSelector(state => state.cart.items);
    // const products = useSelector((state) => state.cart.items);
    // useEffect(() => {
    //     console.log("Converse :"+products);
    // }, [products?.length]);

    // const test = () => {
       
    //     setProductsDatatest(
    //         {
    //             name: '123'
    //         }
    //     )
    // }

    return (
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

                           <ProductSizes sizes={sizes}/>

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

                   <ProductPrice price={price} discountPrice={discountPrice} />
                    
                    <div className='div_delete'>
                        <img className='product_delete' src={icon} alt=''></img>
                    </div>

                </div>

            </div>
            {/* <div className='product_card'>
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
            <img className='grey_line' src={grey_line} alt='img'></img> */}

        </div>
    )
}


export default ProductCard