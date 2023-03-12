import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


const SearchInput = () => {
  const markerAdress = useSelector(state => state.yandexMap.adress)
  const [test, setTest] = useState(markerAdress[0].value)

  const inputHandler = (e) => {
    const value = e.currentTarget.value
    setTest(value)
    // clickTest()
  }
  const clickTest2 =  () => {
    var url = "https://cleaner.dadata.ru/api/v1/clean/address";
    var token = "e6940338b0f29a6df43889de6c2aa9517f6c2b2f";
    var secret = "cd52c64d3598eb5460f8ed025b5ec377e5224aa8";
    var query = "мск сухонска 11/-89";
    
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + token,
            "X-Secret": secret,
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Credentials":false

        },
        body: JSON.stringify([query])
    }
    
    fetch(url, options)
    .then(response => response.json())
    // .then(result => console.log(result))
    .catch(error => console.log("error", error));
};
  


  useEffect(() => {
    setTest(markerAdress[0].value)
    // console.log('inputelenebt', markerAdress)
  }, [markerAdress]);

  return (
    <div>
      <input
        className='contacts_adress'
        value={markerAdress[0].value == 0 ? null : test}
        placeholder={
          markerAdress.length == 1 && markerAdress[0].value == 0
            ? 'Выберите дом  на карте или введите адрес : город улица номер дома'
            : null}
        onChange={(e) => (inputHandler(e))}
      >

      </input>
      {/* <button onClick={clickTest2}>123</button> */}
    </div>
  );
}

export default SearchInput


