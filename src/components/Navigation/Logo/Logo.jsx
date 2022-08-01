import React from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as MainLogo } from '../../../assets/navigation/logo.svg'

import './Logo.scss'

const Logo = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: '100%' }}
			animate={{ opacity: 1, y: '0' }}
			transition={{ delay: 0.5 }}
			className="logo"
		>
			<MainLogo />
		</motion.div>
	)
}

export default Logo
