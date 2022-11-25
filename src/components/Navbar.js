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

}
