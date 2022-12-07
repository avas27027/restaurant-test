import React, { useEffect, useState } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function Carousel2(props) {
    const imgSrc = props.imgs
    const [active, setActive] = useState(false)
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const intervalo = setInterval(() => {
            setCurrent(cur => cur + 1)
        }, 5000)
        return () => { clearInterval(intervalo) }
    }, [])
    useEffect(() => {
        const box = document.querySelector('#c2box')
        if (current === imgSrc.length) setCurrent(0)
        if (current === -1) setCurrent(imgSrc.length - 1)
        box.scrollLeft = current * box.offsetWidth
        setActive(false)
    }, [current, imgSrc.length])

    const moveCapHandler = (e) => {
        if (e.currentTarget.scrollLeft % e.currentTarget.offsetWidth === 0 && active) {
            setCurrent(e.currentTarget.scrollLeft / e.currentTarget.offsetWidth)
            setActive(false)
        }
    }

    return (
        <div className='carousel2'>
            <div id='c2box' onScroll={(e) => moveCapHandler(e)}
                onTouchEnd={() => setActive(true)} className='carousel2 box'>
                {imgSrc.map((e, index) =>
                    <div id={'s-' + index} key={index} className='carousel2 box slide'>
                        <img className='carousel2 box slide-img' key={index} src={e} alt="imagen" />
                    </div>
                )}
            </div>
            <button onClick={() => { setCurrent(cur => cur - 1) }} className='carousel2 butt prev' ><AiFillCaretLeft /></button>
            <button onClick={() => { setCurrent(cur => cur + 1) }} className='carousel2 butt next' ><AiFillCaretRight /></button>
        </div>
    )
}
