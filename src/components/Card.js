import React from 'react'

export default function Card(props) {
    const number = props.number
  return (
    <div className='card bkg'>
        <p>{number}</p>
    </div>
  )
}
