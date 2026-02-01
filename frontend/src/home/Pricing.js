import React  from 'react'

function Pricing() {
    return ( 
        <>
        <div className='container mt-5'>
            <div className='row space'>
                <div className='col-4'>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. 
                    </p>
                    <a href='#' style={{textDecoration:"none",cursor:"pointer"}} className='hover-pointer'>see pricing <i class="fa-solid fa-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                {/* <div className='col-6 d-flex justify-content-center align-items-center'>
                    <div className='col-6 border h'>
                        <h1>₹0</h1>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                    <div className='col-6 border'>
                       <h1>₹20</h1>
                         <p>Intraday and F&O</p>
                    </div>
                </div> */}
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>0₹</h1>
                            <p> Free equity delivery
and direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>20₹</h1>
                            <p>Intraday and
F&O</p>
                        </div>
                </div>

            </div>
        </div>
        </div>
        
        </>
    );
}

export default Pricing;