import React, { useEffect, useState } from 'react'

export default function Card(props) {
  const id = props.data.id
  const [active, setActive] = useState(true)
  useEffect(() => {
    id === 0 ? setActive(false) : setActive(true)
  }, [id])

  return (
    <div className='card bkg' data-active={active}>
      <p>{id}</p>
    </div>
  )
}
