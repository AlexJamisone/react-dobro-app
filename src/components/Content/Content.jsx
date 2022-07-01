import React, {useState, useEffect } from 'react'
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import CardList from '../CardList/CardList';

import './Content.scss'


const Content = () => {

	//State

	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState(data)
	const [search, setSearch] = useState('')

	//Data

	useEffect(() => {
		const api_url = 'https://wrapapi.com/use/alexjamison/homeit/all/latest?wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz'

		axios.get(api_url)
			.then(res => {
				const data = res.data.data.coffee
				setData(data)
			})
			.catch(err => console.log(err))
	}, [])

	
	
	//Search
	useEffect(() => {
		const newFilterData = data.filter((item) => {
			return item.name.toLocaleLowerCase().includes(search)
		})
		setFilterData(newFilterData)
	}, [data, search])
	
	const onSearchChange = (e) => {
		const value = e.target.value.toLocaleLowerCase()
		setSearch(value)
	}
	//

	return (
		<>
			<SearchBar onChengeHendler={onSearchChange}/>
				<div className="blure">
					<div className="content-container">
						<CardList data={filterData}/>
					</div>
				</div>
		</>
	)
}

export default Content