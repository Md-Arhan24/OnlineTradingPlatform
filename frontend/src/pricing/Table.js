import React from 'react';
import { useState,useEffect } from 'react';
import Equity from './Equity';
import Currency from './Currency';
import Commodity from './Commodity';

const Table = () => {
    const [state,setState] = useState('equity');
    function setEquity(event){
        setState('equity');
        console.log(event);
    }
     function setCurrency(){
        setState('currency');
    }
     function setCommodity(){
        setState('commodity');
    }

   
  return (
    <div className='container mt-10'>
        <h1 className='tab-head fs-4 '><a  onClick={setEquity}>Equity</a></h1>
        <h1 className='tab-head fs-4 '><a  onClick={setCurrency}>Currency</a></h1>
        <h1 className='tab-head fs-4 '><a  onClick={setCommodity}>Commodity</a></h1>
        {state === 'equity' && <Equity/>}
        {state === 'currency' && <Currency/>}
        {state === 'commodity' && <Commodity/>}
    </div>
  )
}

export default Table