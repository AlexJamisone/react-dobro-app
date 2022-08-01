import React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem/MenuItem'

import './BurgerNav.scss'

const BurgerNav = () => {
	const itemIds = [
		{
			name: 'Кофе',
			path: '/',
		},
		{
			name: 'Яндекс',
			path: '/yandex',
		},
		{
			name: 'Чаевые',
			path: '/tips',
		},
	]
	const variants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	}

	return (
		<motion.ul variants={variants} className="burger-list">
			{itemIds.map((i) => (
				<MenuItem i={i.name} key={i.name} pth={i.path} />
			))}
		</motion.ul>
	)
}

export default BurgerNav
