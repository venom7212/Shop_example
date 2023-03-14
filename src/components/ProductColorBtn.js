import React, { useState } from 'react';

const ProductColorBtn = ({ colors, isActive, unavailable, activeCount, onclick, length }) => {
    const buttonStyle = `togle_off ${isActive ? 'togle_on' : ''}`


    if (unavailable <= 0) {
        return (
            null
        )
    } else {
        return (
            <div key={activeCount} className='product_color' onClick={onclick}>
                <div className='layer_one'>
                    <div className={buttonStyle} >
                        {/* <div className='togle_off' > */}
                        <div className='layer_three' >
                            <div className={colors} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductColorBtn









