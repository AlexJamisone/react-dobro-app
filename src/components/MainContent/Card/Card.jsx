import React from 'react'
import { motion } from 'framer-motion'
import './Card.scss'

const Card = ({ data: { img, name, price } }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			className="card-container"
		>
			<img src={img} alt={name} className="card-img" />
			<p className="card-name">{name}</p>
			<p className="card-price">{price}</p>
		</motion.div>
	)
}

export default Card
