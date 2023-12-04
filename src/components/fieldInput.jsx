import React from 'react'

const fieldInput = () => {
    return (
        <div className='flex items-center justify-center  p-5 bg-red-300 h-[400px]'>
            <div className='w-4/6 h-full'>
                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                <div
                    className="                    overflow-hidden rounded-lg shadow-sm  h-full"
                >
                    <textarea
                        id="OrderNotes"
                        className="w-full h-5/6 resize-none  align-top sm:text-sm"
                        rows="4"
                        placeholder="Enter any additional order notes..."
                    ></textarea>

                    <div className="flex items-center justify-end gap-2 bg-white p-3">
                        <button
                            type="button"
                            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                        >
                            Clear
                        </button>

                        <button
                            type="button"
                            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default fieldInput;
