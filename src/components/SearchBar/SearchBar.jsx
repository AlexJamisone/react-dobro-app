import React from 'react'
import './SearchBar.scss'

const SearchBar = ({onChengeHendler}) => {

    return (
        <div className='search'>
            <input 
                id='search'
                type="search"
                className='search-input'
                placeholder=' '
                onChange={onChengeHendler}
                autoComplete='off'
            />
            <label 
                htmlFor="search"
                className='search-input-label'
            >Поиск кофе</label>
        </div>
    )
}

export default SearchBar