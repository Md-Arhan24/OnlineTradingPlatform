import React, { Component } from 'react'
import Hero from './Hero';
import Brokarage from './Brokarage';
import OpenAcoount from '../OpenAcoount';
import Table from './Table';

function PricingPage() {
    return ( 
        <>
        <Hero/>
     
        <Table/>
        <Brokarage/>
        </>
     );
}

export default PricingPage;