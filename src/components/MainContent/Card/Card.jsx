import React from 'react'
import './Card.scss'

const Card = ({ data: {img, name, price}}) => {
  return (
    <div className='card-container'>
        <img src={img} alt={name} className="card-img" />
        <p className="card-name">{name}</p>
        <p className="card-price">{price}</p>
    </div>
  )
}

export default Card