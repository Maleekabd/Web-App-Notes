import React, { useState } from 'react'
import { getData } from "../API/data";

const listItem = () => {

    const [data, newData] = useState(getData)

    return (
        <article className="group grid grid-cols-4 gap-2 mx-2 mt-5">
            {data.map(item => (
                <div key={item.id} className='space-y-5'>
                    <img
                        alt={item.name}
                        src={item.imageUrl}
                        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">{item.tag}</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{item.catatan}
                        </p>
                    </div>
                </div>
            ))}
        </article>
    )
}

export default listItem;