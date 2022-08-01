import React from 'react'
import { ReactComponent as YandexLogo } from '../../../assets/navigation/yandex.svg'
import { motion } from 'framer-motion'

import './Yandex.scss'

const Yandex = () => {
	return (
		<motion.div
			className="logo-yandex"
			initial={{ opacity: 0, y: '220%', x: '-200%' }}
			animate={{ opacity: 1, y: '0', x: '0' }}
			transition={{ delay: 0.7 }}
		>
			<YandexLogo />
		</motion.div>
	)
}

export default Yandex
