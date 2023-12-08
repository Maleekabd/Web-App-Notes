import React, { useState } from 'react'
import { useContext } from 'react'
import { ItemContext } from '../context/AppContext'

const fieldInput = () => {

    const { items, addItem, removeItem } = useContext(ItemContext)
    const [title, SetTitle] = useState("")
    const [body, setBody] = useState("")
    const [archived, setArchived] = useState(false)

    const handleInputData = (e) => {
        e.preventDefault();
        const newItem = {
            title: title,
            body: body,
            archived: archived,
            createAt: new Date().toLocaleDateString()
        }
        addItem(newItem)
    }

    return (
        <div className='flex items-center justify-center h-[400px]'>
            <div className='w-4/6 h-auto'>
                <form className='flex items-center flex-col'>
                    <input 
                    onChange={e => {
                        SetTitle(e.target.value)
                    }} className='w-full border p-3 font-thin text-sm rounded-md shadow-sm' type="text" placeholder='Title' />
                    <textarea 
                    onChange={e => {
                        setBody(e.target.value)
                    }} className='w-full border p-3 font-thin text-sm rounded-sm my-3 shadow-md' name="" id="" cols="30" rows="10" placeholder='masukan deskripsi' style={{ resize: 'none' }}></textarea>
                    <button
                        type='submit'
                        onClick={handleInputData}
                        className="w-full p-3 rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default fieldInput;
