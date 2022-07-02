import React from 'react'
import { ReactComponent as SpinnerSVG } from '../../assets/spinner.svg';
import { motion } from "framer-motion";

import './Spinner.scss'

const Spinner = () => {
	return (
		<>
			<motion.div
				className='spinner'
				animate={{rotate: 360}}
				transition={{ type: 'spring', repeat: 'Infinity'}}
			>
				<SpinnerSVG/>
			</motion.div>
		</>
	)
}

export default Spinner