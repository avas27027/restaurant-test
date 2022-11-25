import React, { useState } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Card from './Card';
export default function CardsMove(props) {
    const base = { id: 0 }
    const initArr = () => {
        const arr = []
        for (let i = 0; i < props.cardsArr.length; i += 3) {
            const a = props.cardsArr.slice(i, i + 3)
            const d = 3 - a.length
            for (let i = 0; i < d; i++) {
                a.push(base)
            }
            arr.push(a)
        }
        return arr
    }
    const iArr = initArr()
    const [obj1, setObj1] = useState(iArr[0])
    const [obj2, setObj2] = useState(iArr[1])
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(true)
    const [direction, setDirection] = useState('forward')

    const CardsMoveButtonNext = () => {
        setActive(!active)
        const pivot = (index + 1) === iArr.length ? 0 : index + 1
        index === iArr.length - 1 ? setIndex(0) : setIndex(index + 1)
        setObj1(iArr[active ? index : pivot])
        setObj2(iArr[!active ? index : pivot])
        setDirection('forward')
    }
    const CardsMoveButtonPrev = () => {
        setActive(!active)
        const pivot = (index - 1) === -1 ? iArr.length - 1 : index - 1
        index === 0 ? setIndex(iArr.length - 1) : setIndex(index - 1)
        setObj1(iArr[active ? index : pivot])
        setObj2(iArr[!active ? index : pivot])
        setDirection('reverse')
    }

    return (
        <div className='cardsMove bkg'>
            <button onClick={CardsMoveButtonPrev} className='cardsMove button prev'><AiFillCaretLeft /></button>

            <div className='cardsMove move' onScrollCapture={() =>{console.log('scroll')}}>
                <div data-active={active} className={'cardsMove group ' + direction}>
                    <Card data={obj1[0]} />
                    <Card data={obj1[1]} />
                    <Card data={obj1[2]} />
                </div>
                <div data-active={!active} className={'cardsMove group ' + direction}>
                    <Card data={obj2[0]} />
                    <Card data={obj2[1]} />
                    <Card data={obj2[2]} />
                </div>

            </div>
            <button onClick={CardsMoveButtonNext} className='cardsMove button next'><AiFillCaretRight /></button>

        </div>
    )
}
