import React, { useEffect, useState } from 'react'
import CardM from '../Cards/CardM'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function MovableCards(props) {
    const base = { id: 0 }
    const initArr = (rawArr) => {
        const arr = []
        for (let i = 0; i < rawArr.length; i += 3) {
            const a = rawArr.slice(i, i + 3)
            for (let i = 0; i < (3 - a.length); i++) {
                a.push(base)
            }
            arr.push(a)
        }
        return arr
    }
    const cards = props.cardsArr
    const [active, setActive] = useState(false)
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
        const box = document.querySelector('#mcBox')
        if (current === cards.length) setCurrent(0)
        if (current === -1) setCurrent(cards.length - 1)
        box.scrollLeft = current * box.offsetWidth
        setActive(false)
    }, [current, cards.length])
    const moveCapHandler = (e) => {
        if (e.currentTarget.scrollLeft % e.currentTarget.offsetWidth === 0 && active) {
            setCurrent(e.currentTarget.scrollLeft / e.currentTarget.offsetWidth)
            setActive(false)
        }
    }
    return (
        <div className='movableCards'>
            <div id='mcBox' onScroll={(e) => moveCapHandler(e)}
                onTouchEnd={() => setActive(true)}
                className='movableCards box'>
                {cards.map((obj, index) =>
                    <div key={'s' + index} className='movableCards box-slide'>
                        <CardM data={obj} />
                    </div>
                )}
            </div>
            <button onClick={() => { setCurrent(cur => cur - 1) }} className='movableCards butt prev' ><AiFillCaretLeft /></button>
            <button onClick={() => { setCurrent(cur => cur + 1) }} className='movableCards butt next' ><AiFillCaretRight /></button>
        </div>
    )
}
