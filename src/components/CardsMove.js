import React, { useState } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Card from './Card';
export default function CardsMove(props) {
    
    const initArr = () => {
        var p = 0
        const nums = props.cardsArr.map((e) => {
            var a = []
            if (p < 3) {
                a.push(e)
                p++
            }
            else{
                
                return a
            }
        })
        if (nums.length < 6) {
            for (let i = 0; i < nums.length - 6; i++) { nums.push(0) }
        }
        return nums
    }
    const iArr = initArr()
    const [num, setNum] = useState(initArr())
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(true)
    const [direction, setDirection] = useState('forward')

    const CardsMoveButtonNext = () => {
        setActive(!active)
        const pivot = (index + 1) === iArr.length ? 0 : index + 1
        index === iArr.length - 1 ? setIndex(0) : setIndex(index + 1)
        //setImg1(iArr[active ? index : pivot])
        //setImg2(iArr[!active ? index : pivot])
        setDirection('forward')
    }

    return (
        <div className='cardsMove bkg'>
            <button className='cardsMove button prev'><AiFillCaretLeft /></button>

            <div className='cardsMove move'>
                <div data-active={active} className='cardsMove group forward'>
                    <Card number={num[0]} />
                    <Card number={num[1]} />
                    <Card number={num[2]} />
                </div>
                <div data-active={!active} className='cardsMove group forward'>
                    <Card number={num[3]} />
                    <Card number={num[4]} />
                    <Card number={num[5]} />
                </div>

            </div>
            <button className='cardsMove button next'><AiFillCaretRight /></button>

        </div>
    )
}
