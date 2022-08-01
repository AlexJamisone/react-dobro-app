import React from 'react'
import { ReactComponent as SpinnerSVG } from '../../assets/spinner.svg'
import { motion } from 'framer-motion'

import './Spinner.scss'

const Spinner = () => {
	return (
		<>
			<motion.div
				className="spinner"
				initial={{ y: -200, opacity: 0 }}
				animate={{ rotate: 360, y: [-200, 50, -200, 50], opacity: 1 }}
				transition={{ type: 'spring', repeat: 'Infinity', duration: 4 }}
			>
				<SpinnerSVG />
			</motion.div>
		</>
	)
}

export default Spinner
