import React, { Component } from 'react'

function Hero() {
    return (
       <div className='container bg-gray g-0' >
        <div className='row p-3 g-0'>
            <div className='col-8'><h1>Support Portal</h1></div>
            <div className='col-4 text-end'><button className='btn btn-primary'>Get Ticket</button></div>
        </div>
        <div className='row p-3 g-0'>
           <i class="fas fa-search icon"></i><input className='p-3'style={{width:"90vw"}} placeholder='EG : How do I open my account, how do I activate F&O...'></input>
        </div>
       </div>
      ); 
}

export default Hero;