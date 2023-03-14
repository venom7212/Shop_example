import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


// import './ProductCard.css';
// import item_1 from '../resources/item_1.png'
// import item_2 from '../resources/item_2.png'
import grey_line from '../resources/grey_line.png'
import icon from '../resources/icon.png'
// import grey_line from '../resources/grey_line.png'
import ProductPrice from '../components/ProductPrice'
import ProductSizes from '../components/ProductSizes'
import ProductColor from '../components/ProductColor'




const ProductCard = ({ productsData }) => {
    const { name, articl, season, price, discountPrice, img, sizes, colors } = productsData;
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

                            <ProductSizes sizes={sizes} />
                            <ProductColor colors={colors} />
                        </div>
                    </div>
                </div>
                <div className='product_price_and_delete'>

                    <ProductPrice price={price} discountPrice={discountPrice} />

                </div>
                <div className='div_delete'>
                    <img className='product_delete' src={icon} alt=''></img>
                </div>

            </div>
            <img className='grey_line' src={grey_line} alt='img'></img>

        </div>
    )
}


export default ProductCard