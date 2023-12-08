import React, { useState } from 'react'
import { getData } from "../API/data";
import { useContext } from 'react';
import { ItemContext } from '../context/AppContext';


const listItem = ({ items }) => {

    const { addItem, removeItem, updateItem } = useContext(ItemContext);

    return (
        <>
            <div className='p-3 border-b'>
                <h3 className='font-semibold text-xl'>Catatan</h3>
            </div>
            <article className="mt-10 group grid grid-cols-4 gap-2 mx-2">
                {items.length == 0 ? (
                    <div>Catatan tidak ditemukan</div>
                ) : (
                    items.map(item => (
                        <div key={item.id} className='bg-white border shadow-sm rounded-md space-y-5 mb-5 h-80'>
                            <div className=' h-full'>
                                <div className='p-5 h-5/6'>
                                    <div className='border-b border-black flex items-center justify-center text-sm font-semibold'>
                                        <h4 className=''>{item.title}</h4>
                                    </div>
                                    <div className='h-full w-full'>
                                        <p className='font-thin text-sm p-2'>{item.body}</p>
                                    </div>
                                </div>
                                <div className='h-1/6 flex gap-2 items-center justify-center px-2'>
                                    <button onClick={() => removeItem(item.id)} className='bg-rose-400 hover:text-white w-full text-sm px-5 py-1 rounded-md'>Delete</button>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </article>
        </>

    )
}

export default listItem;