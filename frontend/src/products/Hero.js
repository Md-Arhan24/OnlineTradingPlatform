import React, { Component } from 'react'

function Hero() {
    return ( 
         <div className="container">
      <div className="row p-5 text-center">
        <h1 className="mt-5 mb-3 fs-3">Zerodha Products</h1>
        <h5 className="text-muted">Sleek, modern, and intuitive trading platforms</h5>
        <p>Check out our <a className='anchor cursor-pointer'>investment offerings →</a></p>
      </div>
    </div>
     );
}

export default Hero;