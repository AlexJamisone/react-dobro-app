import React from 'react'
import { motion } from "framer-motion";
import {ReactComponent as TastyLogo} from '../../../assets/navigation/tasty.svg'

import './Tasty.scss'

const Tasty = () => {
	return (
		<motion.div
			className='logo-tasty'
			initial={{ opacity: 0, y: "220%", x: "200%"}}
			animate={{ opacity: 1, y: '0', x: '0'}} 
			transition={{delay: 0.8}}
		>
			<TastyLogo/>
		</motion.div>
	)
}

export default Tasty