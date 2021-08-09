import React from 'react';
import Logo from '../Assets/Screenshot 2021-08-09 at 09.45.21.png';

export default function Header() {
    return (
        <div className='header-container'>
            <img className='header-image' src={Logo} alt='Company logo'/>
            <div className='header-p-container'>
                <p className='header-p'>Login</p>
                <p className='header-p'>|</p>
                <p className='header-p'>Sign up</p>
            </div>
        </div>
    )
}
