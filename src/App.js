import React from 'react';
import OrderPage from './components/OrderPage';
import './App.css';
import { YMaps } from '@pbe/react-yandex-maps';


function App() {
  return (
    <div className="App">

   

      <OrderPage />
      <YMaps>
      </YMaps>
    </div>
  );
}

export default App;
