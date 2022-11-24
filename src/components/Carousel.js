import React, { useEffect, useState } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function Carousel(props) {
    const imgSrc = props.imgs
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(true)
    const [direction, setDirection] = useState('forward')
    const [img1, setImg1] = useState(imgSrc[0])
    const [img2, setImg2] = useState(imgSrc[1])

    const CarouselButtonNext = () => {
        setActive(!active)
        const pivot = (index + 1) === imgSrc.length ? 0 : index + 1
        index === imgSrc.length - 1 ? setIndex(0) : setIndex(index + 1)
        setImg1(imgSrc[active ? index : pivot])
        setImg2(imgSrc[!active ? index : pivot])
        setDirection('forward')
    }
    const CarouselButtonPrev = () => {
        setActive(!active)
        const pivot = (index - 1) === -1 ? imgSrc.length - 1 : index - 1
        index === 0 ? setIndex(imgSrc.length - 1) : setIndex(index - 1)
        setImg1(imgSrc[active ? index : pivot])
        setImg2(imgSrc[!active ? index : pivot])
        setDirection('reverse')
    }
    useEffect(() => {
        const intervalo = setInterval(() => {
            setActive(!active)
            const pivot = (index + 1) === imgSrc.length ? 0 : index + 1
            index === imgSrc.length - 1 ? setIndex(0) : setIndex(index + 1)
            setImg1(imgSrc[active ? index : pivot])
            setImg2(imgSrc[!active ? index : pivot])
            setDirection('forward')
        }, 5000)
        return () => {
            clearInterval(intervalo)
        }
    }, [active, index, imgSrc])

    return (
        <div className='carouselm box'>
            <div className='carouselm slide' >
                <img data-active={active} className={'carouselm img '+direction} src={img1} alt='Slide 1' />
            </div>
            <div className='carouselm slide' >
                <img data-active={!active} className={'carouselm img '+direction} src={img2} alt='Slide 1' />
            </div>

            <button onClick={CarouselButtonNext} className='carouselm-button next'><AiFillCaretRight /></button>
            <button onClick={CarouselButtonPrev} className='carouselm-button prev'><AiFillCaretLeft /></button>

        </div>
    )
}
