import React from 'react'
import dog from '../../public/cachorro.png'
import '../styles/Header.css'


export default function Header () {
    return (
        <header>
            <div className='header-container'>
                <div className='header-wrapper'>
                    <h1>Doguify</h1>
                    <img src={dog} alt="Logo Doguify" />
                </div>
            </div>
        </header>
    )
}
