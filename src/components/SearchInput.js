import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


const SearchInput = () => {
  const markerAdress = useSelector(state => state.yandexMap.adress)


  return (
    <div>
      <input className='contacts_adress' value={markerAdress.value} placeholder=''></input>
    </div>
  );
}

export default SearchInput


