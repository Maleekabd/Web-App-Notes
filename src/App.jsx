import React from 'react'
import FieldInput from './components/fieldInput';
import ListItem from './components/listItem';

const App = () => {
    return (
        <div className='h-auto w-[100%] bg-gray-200 text-lg'>
            <div className='flex items-center justify-center'>
                <h1 className='p-3 font-[Poppins] font-extralight'>Web App Notes</h1>
            </div>
            <FieldInput />
            <ListItem />
        </div>
    )
}

export default App;