import React, { useState } from 'react';

const ProductSizesBtn = ({ size, isActive, unavailable, activeCount,onclick }) => {
    const buttonStyle = `normal_btn ${isActive ? 'black_btn' : ''}`

  

      if (unavailable <= 0) {
        return (
            <div key={activeCount} className='unavailable_btn'>{size}</div>
        )
    }else {
        return (
            <div key={activeCount} onClick={onclick} className={buttonStyle}>{size}</div>
        )
    }
}

export default ProductSizesBtn





