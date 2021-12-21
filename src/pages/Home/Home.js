import React from 'react'
import Header from '../../Header/Header'
import SinggelPage from '../Singlepage/SinggelPage'

import './home.css'

export default function Home() {
    return (
        <>
         <Header/>
        <div className="home">
        <SinggelPage/>
           
        </div>
        </>
    )
}
