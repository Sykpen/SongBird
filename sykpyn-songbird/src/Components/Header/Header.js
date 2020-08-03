import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header_main'>
            <div className='header_main_item first'>Разминка</div>
            <div className='header_main_item'>Воробьиные</div>
            <div className='header_main_item'>Лесные птицы</div>
            <div className='header_main_item'>Певчие птицы</div>
            <div className='header_main_item'>Хищные птицы</div>
            <div className='header_main_item last'>Морские птицы</div>
        </div>
    )
}

export default Header