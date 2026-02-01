import React from 'react'
function Award() {
    return ( 
        <div className='container d-flex justifu-content-center align-items-center'>
            <div className='row mt-5 space mb-5'>
                <div className='col-6'>
                    <img src='media/largestBroker.svg' alt='award' className='img-fluid w-75'></img>
                </div>
                 <div className='col-6 mt-3'>
                    <h1 className='fs-2'>Larget stock Broker In India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in
India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 mt-1'>
                            <ul>
                                <li className=' p-2'>Feautres and options</li>
                                <li className=' p-2'>Currency and derivatives</li>
                                <li className=' p-2'>Commodity and derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 mt-1'>
                             <ul>
                                <li className='p-2'>Feautres and options</li>
                                <li className='p-2'>Currency and derivatives</li>
                                <li className='p-2'>Commodity and derivatives</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' className='img-fluid' alt='press logos'/>
                 </div>
            </div>
            
        </div>
     );
}

export default Award;