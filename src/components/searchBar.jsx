import React, { useState } from 'react'
import { useContext } from 'react'
import { ItemContext } from '../context/AppContext'

const SearchBar = ({ data, onSearch }) => {

    const [keyword, setKeyword] = useState('')

    const handleSearch = (e) => {
        setKeyword(e.target.value);
        onSearch(e.target.value)
    }

    return (
        <div className='w-full flex items-center justify-end p-5 border-b'>
            <input onChange={handleSearch} type="text" placeholder='Search...' value={keyword} className='font-thin text-sm p-3 rounded-md border shadow-sm w-2/6' />
        </div>
    )
}

export default SearchBar