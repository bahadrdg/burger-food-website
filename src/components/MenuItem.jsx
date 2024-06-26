import React from 'react'
import Image from '../assets/burger.jpg'

const MenuItem = ({image, name, content, price}) => {

  return (
    <div className='menuItem'>
      <div style={{backgroundImage:`url(${Image})`}}></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p>{price}</p>
    </div>
  )
}

export default MenuItem
