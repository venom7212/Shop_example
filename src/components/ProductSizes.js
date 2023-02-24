import React, { useState } from 'react';
import ProductSizesBtn from '../components/ProductSizesBtn'




const ProductSizes = ({ sizes }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);

    const getProductSizesBtnFor = (a) => {
        const result = []
        const obj = sizes[0];
        Object.keys(obj).forEach((key, index) =>
            result.push(<ProductSizesBtn size={key} isActive={currentActiveIndex === index} unavailable={obj[key]} onclick={()=>setCurrentActiveIndex(index)} />)
        )
        return result;
    }

    return (
        <div className='product_sizes'>
            {sizes.length ? getProductSizesBtnFor() : <p>Error DB</p>}
        </div>
    )
}

export default ProductSizes


