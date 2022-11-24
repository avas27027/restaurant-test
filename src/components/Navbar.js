import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [pivot, setPivot] = useState(false)
    return (
        <div>
            <nav className='navbarm navContainer'>
                <a className='navbarm title' href='/'>Jumbo</a>
                <div className='navbarm link-group' data-active={pivot}>
                    <div className='navbarm link-box'>
                        <div className='navbarm link-box hov'>
                            <a href='/'>Carta</a>
                        </div>
                    </div>
                    <div className='navbarm link-box'>
                        <div className='navbarm link-box hov'>
                            <a href='/'>Reservas</a>
                        </div>
                    </div>
                    <div className='navbarm link-box'>
                        <div className='navbarm link-box hov'>
                            <a href='/'>Pedidos</a>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{setPivot(!pivot)}} className='navbarm menu'><AiOutlineMenu/></button>
            </nav>
        </div>
    )

    /*<nav className="Navbar navContainer navbar navbar-expand-md ">
                <div className='container-fluid'>
                    <a className="navbar-title navbar-brand" href="/">Jumbo</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarID">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="navbar-li ">
                                <a className="navbar-a nav-link" href="/">Carta</a>
                            </li>
                            <li className="navbar-li nav-item">
                                <a className="navbar-a nav-link" href="/">Reservas</a>
                            </li>
                            <li className="navbar-li nav-item">
                                <a className="navbar-a nav-link" href="/">Eventos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */
}
