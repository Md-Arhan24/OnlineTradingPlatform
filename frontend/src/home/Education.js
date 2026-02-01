import React  from 'react'

function Education() {
    return ( 
          <div className='container mt-5 '>
            <div className='row space'>
                <div className='col-6'>
                    <img className='img-fluid w-75' src='media/education.svg' ></img>
                </div>
                <div className='col-6 mt-3'>
                    <h1 className='text-secondary fs-3'>Free and open market education</h1>
                    <p className='my-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                   <a style={{textDecoration:"none",cursor:"pointer"}} className='hover-pointer'>Varsity <i class="fa-solid fa-right-long"></i></a>
                   
                   
                    <p className='my-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                   <a style={{textDecoration:"none",cursor:"pointer"}} className='hover-pointer'>TradingQ&A<i class="fa-solid fa-right-long"></i></a>

                </div>
                
            </div>
            
        </div>
        
     );
}

export default Education;