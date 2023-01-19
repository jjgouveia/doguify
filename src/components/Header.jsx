import React from 'react'
import dog from '../assets/doguify.png'
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
