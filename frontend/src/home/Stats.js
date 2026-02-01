import React from 'react'

function Stats() {
    return ( 
        <>
        <div className='container mt-5 mb-5'>
            <div className='row mt-5 d-flex justify-content-center align-items-center space'>
            <div className='col-6 mt-5'>
                <h2 className='mb-5'>Trust with confidence</h2>
                <h3 className='fs-4'>Customer-first always</h3>
                <p className='text-secondary'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h3 className='fs-4 mt-3' >No spam or gimmicks</h3>
                <p className='text-secondary'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <h3 className='fs-4 mt-3'>Do better with money</h3>
                <p className='text-secondary'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6'>
                <img src='media/ecosystem.png' alt='ecosystem' className='img-fluid'></img>
                <div className='d-flex justify-content-between align-items-center'>
                    <a style={{textDecoration:"none",cursor:"pointer"}} className='hover-pointer'>Explore our products <i class="fa-solid fa-right-long"></i></a>
                    <a  style={{textDecoration:"none",cursor:"pointer"}} className='hover-pointer' >Try Kite demo <i class="fa-solid fa-right-long"></i></a>
                </div>
            </div>
            </div>

        </div>

        </>
     );
}

export default Stats;