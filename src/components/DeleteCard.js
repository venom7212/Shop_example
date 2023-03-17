import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import icon from '../resources/icon.png'
import grey_line from '../resources/grey_line.png'


const DeleteCard = (name,delCard,delStatus) => {


    const recoveryCard = () => {
        console.log('recovery')

    }
    const clearRecoveryCard = () => {
        console.log('clear')
    }
    const testG = () =>{
        console.log()
    }

    return (
        <div>
            <div className='recoveryCard'>
                <div className='texts'>
                    <div className='delText'></div>
                    <div className='text1'>Товар</div>
                    <div className='text2'>{name.name}</div>
                    <div className='text3'> был удален из корзины.</div>
                </div>
                <div className='recoveryBlock'>
                    <div className='recoveryText' onClick={delCard} >Восстановить</div>
                    <div className='productRecoveryDiv' onClick={clearRecoveryCard}>
                        <img className='productRecovery' src={icon} alt=''></img>
                    </div>
                </div>
            </div>
            <img className='grey_line' src={grey_line} alt='img'></img>
        </div>

    );
}

export default DeleteCard


