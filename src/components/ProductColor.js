import React, { useState } from 'react';
import ProductColorBtn from '../components/ProductColorBtn'

const ProductColor = ({ colors }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);
    // console.log(colors)
    const getProductSizesBtnFor = (a) => {
        const result = []
        const obj = colors[0];
        Object.keys(obj).forEach((key, index) =>
            result.push(<ProductColorBtn  colors={key} isActive={currentActiveIndex === index} unavailable={obj[key]} onclick={() => setCurrentActiveIndex(index)} />)
        )
        return result;
    }

    return (
        <div className='product_colors'>
            {colors.length ? getProductSizesBtnFor() : <p>Error DB</p>}
        </div>
    )

}

export default ProductColor