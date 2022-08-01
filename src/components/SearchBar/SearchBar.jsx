import React from 'react'
import { motion } from 'framer-motion'
import './SearchBar.scss'

const SearchBar = ({ onChengeHendler }) => {
	return (
		<div className="search">
			<input
				id="search"
				type="search"
				className="search-input"
				placeholder=" "
				onChange={onChengeHendler}
				autoComplete="off"
			/>
			<motion.label
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				htmlFor="search"
				className="search-input-label"
			>
				Поиск кофе
			</motion.label>
		</div>
	)
}

export default SearchBar
