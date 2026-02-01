import React from 'react'
import { useNavigate } from 'react-router-dom';

function Hero({logout,name}) {
    const navigate = useNavigate();
    const isLoggedIn = Boolean(name && name.length > 0);
    return ( 
        <div className='container text-center mb-5'>
            <img src='media/homeHero.png' className='img-fluid' alt='HomeHero'></img>
            <h1 className='mt-5'>Invest in everything {name}</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            {isLoggedIn ? (
                <button className='btn btn-danger mb-5' onClick={logout}>Log out</button>
            ) : (
                <button className='btn btn-primary mb-5' onClick={() => navigate('/signup')}>SingUp for free</button>
            )}

        </div>
     );
}

export default Hero;