import React, { useEffect, useState } from 'react'

export default function CardM(props) {
  const id = props.data.id
  const [active, setActive] = useState(true)
  useEffect(() => {
    id === 0 ? setActive(false) : setActive(true)
  }, [id])

  return (
    <div className='cardM bkg' data-active={active}>
      <p>{id}</p>
    </div>
  )
}
