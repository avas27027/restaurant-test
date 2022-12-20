import React, { useEffect, useState } from 'react'
import CardM from '../Cards/CardM'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function MovableCards(props) {
    const cards = props.cardsArr
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (props.time > 0) {
            const intervalo = setInterval(() => {
                setCurrent(cur => cur + 1)
            }, props.time)
            return () => { clearInterval(intervalo) }
        }
    }, [props.time])

    useEffect(() => {
        
        
        if (current >= cards.length-1) setCurrent(0)
        if (current === -1) setCurrent(cards.length-3)
        const slide = document.querySelector('#s'+current)
        const box = document.querySelector('#mcBox')
        console.log(cards.length-cards.length%3-1, current * slide.offsetWidth +10)
        box.scrollLeft = (current * slide.offsetWidth)
    }, [current, cards.length])
    return (
        <div className='movableCards'>
            <div id='mcBox' className='movableCards box'>
                {cards.map((obj, index) =>
                    <div id={'s'+index} key={'s' + index} className='movableCards box-slide'>
                        <CardM data={obj} />
                    </div>
                )}
            </div>
            <button onClick={() => { setCurrent(cur => cur - 1) }} className='movableCards butt prev' ><AiFillCaretLeft /></button>
            <button onClick={() => { setCurrent(cur => cur + 1) }} className='movableCards butt next' ><AiFillCaretRight /></button>
        </div>
    )
}
