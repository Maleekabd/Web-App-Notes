import React, { useState } from 'react'
import FieldInput from './components/fieldInput';
import ListItem from './components/listItem';
import SearchBar from './components/searchBar';
import { ItemContext } from './context/AppContext';
import { useContext } from 'react';

const App = () => {

    const { items } = useContext(ItemContext)
    const [filteredData, setFiltered] = useState(items);
    const regexPattern = /^[a-zA-Z0-9]+$/;

    const handleSearch = (searchItem) => {
        const filtered = items.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()))
        setFiltered(filtered)
    }



    return (
        <div className='h-auto w-[100%] text-lg'>
            <SearchBar onSearch={handleSearch} />
            <div className='flex items-center justify-center'>
                <h1 className='pt-5 font-[Poppins] text-2xl font-semibold '>Web App Notes</h1>
            </div>
            <FieldInput />
            {
                filteredData.length == 0 ? <ListItem items={items} />
                    : <ListItem items={filteredData} />
            }
        </div>
    )
}

export default App;