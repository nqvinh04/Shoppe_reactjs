import React from 'react';
import logo from '../../image/logo-full-white.png';
import './logo.css';

const Logo = () => {
    return (
        <div className='header-with-search__logo-section'>
            <img src={logo} alt='logo'/>
        </div>
    )
};

export default Logo;